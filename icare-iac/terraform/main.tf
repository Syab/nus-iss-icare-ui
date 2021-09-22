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

module "ecs" {
  source = "./module/ecs"
  icare_cluster_name = var.icare_cluster_name
}