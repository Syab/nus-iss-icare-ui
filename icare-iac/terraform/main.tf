terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "3.56.0"
    }
  }
  backend "s3" {
    bucket         = "s3-nus-iss-icare-prd"
    key            = "terraform.tfstate"
    region         = "ap-southeast-1"
    encrypt        = true
  }
}

provider "aws" {
  region                  = var.aws_region
  shared_credentials_file = var.aws_credentials
  profile                 = var.aws_profile
}

## Build an S3 bucket for Terraform state
module "bootstrap" {
  source                              = "./module/bootstrap"
  aws_s3_bucket_tfstate               = "s3-nus-iss-icare-prd"
  aws_s3_bucket_tfstate_arn           = "arn:aws:s3:::s3-nus-iss-icare-prd"
  s3_logging_bucket_name              = "s3-nus-iss-icare-logging"
  codebuild_iam_role_name             = "iCareCodeBuildIamRole"
  codebuild_iam_role_policy_name      = "iCareCodeBuildIamRolePolicy"
//  tf_codepipeline_artifact_bucket_arn = module.codepipeline.tf_codepipeline_artifact_bucket_arn
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "icare_vpc"
  cidr = "10.0.0.0/16"

  azs             = ["ap-southeast-1a", "ap-southeast-1b"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
  database_subnets = ["10.0.21.0/24", "10.0.22.0/24"]

  create_database_subnet_group           = true
  create_database_subnet_route_table     = true
  create_database_internet_gateway_route = true

  enable_nat_gateway = true
  enable_vpn_gateway = true

  enable_dns_hostnames = true

  tags = {
    project = "icare"
    terraform = "true"
    environment = "dev"
  }
}

module "ecs" {
  source = "./module/ecs"
  icare_cluster_name = var.icare_cluster_name
}

module "ecr" {
  source = "./module/ecr"
  icare_ecr_image_names=["icare-fe","icare-policymgmt","icare-claimmgmt","icare-reporting","icare-auth"]
}

module "codebuild" {
  source                    = "./module/codebuild"
  codebuild_icare_frontend  = "codebuild-icare-frontend"
  codebuild_iam_role_arn    = module.bootstrap.codebuild_iam_role_arn
}
