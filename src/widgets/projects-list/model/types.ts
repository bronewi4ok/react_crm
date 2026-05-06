import type {
  GetProjectsQueryTypes,
  GetProjectsRefetchTypes,
  ProjectTypes,
  ProjectsResponseTypes,
} from '@entities/project'
import { projectsQuerySchema } from '@features/project/sort-projects'
import type { HTMLAttributes } from 'react'
import type { z } from 'zod'

type RefetchTypes = GetProjectsRefetchTypes
type ProjectsQueryResultTypes = GetProjectsQueryTypes
type BuildSearchTypes = (updates: Partial<z.output<typeof projectsQuerySchema>>) => string
type ProjectsWidgetMetaTypes = ProjectsResponseTypes['meta']

export type ProjectsWidgetContentProps = {
  projects: ProjectTypes[]
  meta?: { page: number; totalPages: number }
  isLoading: boolean
  isError: boolean
  isFetching: boolean
  refetch: RefetchTypes
  buildLink: (page: number) => string
}

export type ProjectsWidgetEmptyFallbackProps = {
  onRetry?: () => void
} & HTMLAttributes<HTMLElement>

export type ProjectsWidgetErrorFallbackProps = {
  onRetry?: () => void
} & HTMLAttributes<HTMLElement>

export type ProjectsWidgetStateTypes = Pick<
  ProjectsQueryResultTypes,
  'isLoading' | 'isError' | 'isFetching'
>

export type ProjectsListActionsTypes = {
  refetch: ProjectsQueryResultTypes['refetch']
  buildSearch: BuildSearchTypes
}

export type ProjectsListDataTypes = {
  projects: ProjectTypes[]
  meta?: ProjectsWidgetMetaTypes
} & ProjectsWidgetStateTypes
