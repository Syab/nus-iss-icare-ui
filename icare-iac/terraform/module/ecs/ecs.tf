# Build AWS ECS Cluster
resource "aws_ecs_cluster" "icare-cluster-dev" {
  name               = var.icare_cluster_name
  capacity_providers = ["FARGATE","FARGATE_SPOT"]
  tags = {
    "project"   = "nus-iss-icare"
    "terraform" = true
    "env"       = "dev"
  }
}

//resource "aws_ecs_task_definition" "icare-fe-service" {
//
//}

#Outputs for ECS cluster
output "ecs-icare-cluster-arn" {
  value = aws_ecs_cluster.icare-cluster-dev.arn
}

output "ecs-icare-cluster-id" {
  value = aws_ecs_cluster.icare-cluster-dev.id
}
