resource "aws_db_instance" "rds_icare_claimmgmt" {
  identifier = var.icare_claimmgmt_identifier
  allocated_storage    = var.icare_claimmgmt_allocated_storage
  engine               = "mysql"
  engine_version       = "8.0"
  instance_class       = var.icare_claimmgmt_instance_class
  name                 = var.icare_claimmgmt_dbname
  username             = var.icare_claimmgmt_username
  password             = var.icare_claimmgmt_password
  parameter_group_name = "default.mysql8.0"
  port                 = var.icare_claimmgmt_dbport
  publicly_accessible  = true
  skip_final_snapshot  = true
  storage_type         = "gp2"
  vpc_security_group_ids = ["sg-03b26974d7d2e147b"]
  tags = {
    environment = "dev"
    project = "nus-iss-icare"
  }
}

output "rds_icare_claimmgmt_address" {
  value = aws_db_instance.rds_icare_claimmgmt.address
}

output "rds_icare_claimmgmt_arn" {
  value = aws_db_instance.rds_icare_claimmgmt.arn
}

output "rds_icare_claimmgmt_endpoint" {
  value = aws_db_instance.rds_icare_claimmgmt.endpoint
}