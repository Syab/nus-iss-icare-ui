variable "icare_claimmgmt_identifier" {
  type = string
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