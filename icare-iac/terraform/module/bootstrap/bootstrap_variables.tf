variable "aws_s3_bucket_tfstate" {
  type = string
  description = "Name of the S3 bucket used for Terraform state storage"
}

variable "aws_s3_bucket_tfstate_arn" {
  type = string
  description = "tfstate bucket arn"
}

variable "s3_logging_bucket_name" {
  type = string
  description = "Name of S3 bucket to use for access logging"
}

variable "codebuild_iam_role_name" {
  description = "Name for IAM Role utilized by CodeBuild"
}
variable "codebuild_iam_role_policy_name" {
  description = "Name for IAM policy used by CodeBuild"
}

//variable "tf_codepipeline_artifact_bucket_arn" {
//  description = "Codepipeline artifact bucket ARN"
//}