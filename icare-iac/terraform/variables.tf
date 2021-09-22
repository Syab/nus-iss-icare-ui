variable "aws_region" {
  type = string
  description = "aws region for this project"
  default = "ap-southeast-1"
}

variable "aws_credentials" {
  type = string
  description = "aws credentials for this project"
}

variable "aws_profile" {
  type = string
  description = "aws profile for this project"
}

variable "icare_cluster_name" {
  type = string
  description = "Name of icare cluster with environment"
}