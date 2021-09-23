resource "aws_ecr_repository" "name" {
  for_each             = toset(var.icare_ecr_image_names)
  name                 = each.value
  image_tag_mutability = var.image_tag_mutability

  image_scanning_configuration {
    scan_on_push = var.scan_images_on_push
  }

  tags = {
    project = "icare"
    terraform = "true"
    environment = "dev"
  }
}