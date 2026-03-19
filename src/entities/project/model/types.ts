import type { QueryParamsTypes, QueryResponseTypes } from '@/shared/types'
import type { HTMLAttributes } from 'react'
import type { LinkProps } from 'react-router-dom'

export type ProjectTypes = {
  id: string
  name?: string
  specialization?: string
  description?: string
  tasks: string[]
  budget?: number
  clients?: string[]
  taskers?: string[]
  createdAt?: string
  finishedAt?: string
  updatedAt?: string
  startDate?: string
  endDate?: string
  avatar?: string
  abbreviation?: string
}

export type ProjectsListResponse = QueryResponseTypes<ProjectTypes>

export type ProjectCardProps = {
  project: ProjectTypes
  onClick?: () => void
} & HTMLAttributes<HTMLElement> &
  LinkProps

export type ProjectsQueryArgs<T extends string = string> = QueryParamsTypes<T>
