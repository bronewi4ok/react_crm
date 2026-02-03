import type { ListQueryParams, ListResponse } from '@/shared/hooks/useListQuery'
import type { HTMLAttributes } from 'react'
import type { LinkProps } from 'react-router-dom'

export type ProjectTypes = {
  id: string
  name: string
  specialization: string
  description?: string
  tasks: string[]
  budget?: number
  clients: string[]
  taskers: string[]
  createdAt?: string
  finishedAt?: string
  updatedAt?: string
  startDate?: string
  endDate?: string
}

export type ProjectsListResponse = ListResponse<ProjectTypes>

export type ProjectCardProps = {
  project: ProjectTypes
  onClick?: () => void
} & HTMLAttributes<HTMLElement> &
  LinkProps

export type ProjectsQueryArgs<TSortKey extends string = string> = ListQueryParams<TSortKey>
