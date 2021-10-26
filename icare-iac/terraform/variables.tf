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

variable "icare_claimmgmt_dbname" {
  type = string
}

variable "icare_claimmgmt_instance_class" {
  type = string
  default = "db.t2.micro"
}

variable "icare_claimmgmt_allocated_storage" {
  type = number
  default = 20
}

variable "icare_claimmgmt_username" {
  type = string
}

variable "icare_claimmgmt_password" {
  type = string
}

variable "icare_claimmgmt_dbport" {
  type = number
  default = 3306
}