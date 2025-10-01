import type { ListQueryParams, ListResponse } from '@/shared/hooks/useListQuery'

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

export type ProjectsListResponse = ListResponse<Project>

export type ProjectCardProps = {
  project: Project
  className?: string
  onClick?: () => void
}

export type ProjectsQueryArgs<TSortKey extends string = string> =
  ListQueryParams<TSortKey>
