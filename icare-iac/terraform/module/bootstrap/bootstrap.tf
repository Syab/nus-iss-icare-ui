##
# Module to build the AWS base infrastructure
# Modified from https://github.com/KyMidd/AwsCodePipelineDemo
##

# Build an AWS S3 bucket for logging
resource "aws_s3_bucket" "s3_logging_bucket" {
  bucket = var.s3_logging_bucket_name
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

# Output name of S3 logging bucket back to main.tf
output "s3_logging_bucket_id" {
  value = aws_s3_bucket.s3_logging_bucket.id
}
output "s3_logging_bucket" {
  value = aws_s3_bucket.s3_logging_bucket.bucket
}

# Create an IAM role for CodeBuild to assume
resource "aws_iam_role" "codebuild_iam_role" {
  name = var.codebuild_iam_role_name

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "codebuild.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

# Output the CodeBuild IAM role
output "codebuild_iam_role_arn" {
  value = aws_iam_role.codebuild_iam_role.arn
}

# Create an IAM role policy for CodeBuild to use implicitly
# For later
##  "${var.tf_codepipeline_artifact_bucket_arn}",
##  "${var.tf_codepipeline_artifact_bucket_arn}/*"

resource "aws_iam_role_policy" "codebuild_iam_role_policy" {
  name = var.codebuild_iam_role_policy_name
  role = aws_iam_role.codebuild_iam_role.name

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "${aws_s3_bucket.s3_logging_bucket.arn}",
        "${aws_s3_bucket.s3_logging_bucket.arn}/*",
        "${var.aws_s3_bucket_tfstate_arn}",
        "${var.aws_s3_bucket_tfstate_arn}/*",
        "arn:aws:s3:::codepipeline-ap-southeast-1*",
        "arn:aws:s3:::codepipeline-ap-southeast-1*/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "iam:Get*",
        "iam:List*"
      ],
      "Resource": "${aws_iam_role.codebuild_iam_role.arn}"
    },
    {
      "Effect": "Allow",
      "Action": "sts:AssumeRole",
      "Resource": "${aws_iam_role.codebuild_iam_role.arn}"
    }
  ]
}
POLICY
}


# Create IAM role for Terraform builder to assume
resource "aws_iam_role" "tf_iam_assumed_role" {
  name = "TerraformAssumedIamRole"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "${aws_iam_role.codebuild_iam_role.arn}"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

  tags = {
    Terraform = "true"
  }
}


# Create broad IAM policy Terraform to use to build, modify resources
resource "aws_iam_policy" "tf_iam_assumed_policy" {
  name = "TerraformAssumedIamPolicy"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAllPermissions",
      "Effect": "Allow",
      "Action": [
        "*"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}

# Attach IAM assume role to policy
resource "aws_iam_role_policy_attachment" "tf_iam_attach_assumed_role_to_permissions_policy" {
  role       = aws_iam_role.tf_iam_assumed_role.name
  policy_arn = aws_iam_policy.tf_iam_assumed_policy.arn
}