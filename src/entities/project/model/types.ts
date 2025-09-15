export type Project = {
  id: string
  name: string
  specialization: string
  description?: string
  tasks: string[]
  budget?: number
  startDate?: string
  plannedEndDate?: string
  clients: string[]
  taskers: string[]
  createdAt?: string
  updatedAt?: string
}

export type ProjectCardProps = {
  project: Project
  className?: string
  onClick?: () => void
}
