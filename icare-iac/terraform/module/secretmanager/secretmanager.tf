resource "aws_secretsmanager_secret" "sm_icare_claimmgmt_dev" {
  name = "icare_claimmgmt_db_credentials"
  tags = {
    environment = "dev"
    project = "nus-iss-icare"
  }
}

output "sm_icare_claimmgmt_arn" {
  value = aws_secretsmanager_secret.sm_icare_claimmgmt_dev.arn
}

output "sm_icare_claimmgmt_id" {
  value = aws_secretsmanager_secret.sm_icare_claimmgmt_dev.id
}