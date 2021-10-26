variable "codebuild_iam_role_arn" {
  type = string
  description = "CodeBuild IAM Role"
}

variable "codebuild_icare_frontend" {
  type = string
  description = "Name of CodeBuild project for frontend"
}

variable "codebuild_icare_auth" {
  type = string
  description = "Name of CodeBuild project for Auth Microservice"
}

variable "codebuild_icare_policymgmt" {
  type = string
  description = "Name of CodeBuild project for Auth Microservice"
}