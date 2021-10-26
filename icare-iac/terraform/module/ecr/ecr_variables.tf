variable "scan_images_on_push" {
  type        = bool
  description = "Indicates whether images are scanned after being pushed to the repository (true) or not (false)"
  default     = true
}

//variable "max_image_count" {
//  type        = number
//  description = "How many Docker Image versions AWS ECR will store"
//  default     = 500
//}

variable "icare_ecr_image_names" {
  type        = list(string)
  default     = []
  description = "List of Docker local image names, used as repository names for AWS ECR "
}

variable "image_tag_mutability" {
  type        = string
  default     = "MUTABLE"
  description = "The tag mutability setting for the repository. Must be one of: `MUTABLE` or `IMMUTABLE`"
}