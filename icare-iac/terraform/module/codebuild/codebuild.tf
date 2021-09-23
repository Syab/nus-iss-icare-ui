resource "aws_codebuild_project" "codebuild-icare-fe" {
  name          = var.codebuild_icare_frontend
  description   = "CodeBuild Resource for iCare frontend"
  build_timeout = "5"
  service_role  = var.codebuild_iam_role_arn

  artifacts {
    type = "NO_ARTIFACTS"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:2.0"
    type                        = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"
  }

  source {
    type            = "GITHUB"
    location        = "https://github.com/Syab/nus-iss-icare-ui.git"
    git_clone_depth = 1

  }

  source_version = "development"

  tags = {
    environment = "dev"
  }
}