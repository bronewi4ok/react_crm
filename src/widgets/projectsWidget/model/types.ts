import type {
  GetProjectsQueryTypes,
  GetProjectsRefetchTypes,
  ProjectTypes,
  ProjectsListResponse,
} from '@/entities/project'
import { projectsSortSchema } from '@/features/project/projectsSortBar'
import type { HTMLAttributes } from 'react'
import type { z } from 'zod'

type RefetchTypes = GetProjectsRefetchTypes
type ProjectsQueryResultTypes = GetProjectsQueryTypes
type BuildSearchTypes = (updates: Partial<z.output<typeof projectsSortSchema>>) => string
type ProjectsWidgetMetaTypes = ProjectsListResponse['meta']

export type ProjectsWidgetContentProps = {
  projects: ProjectTypes[]
  meta?: { page: number; totalPages: number }
  isLoading: boolean
  isError: boolean
  isFetching: boolean
  refetch: RefetchTypes
  buildLink: (page: number) => string
}

export type ProjectsWidgetFallbackProps = {
  title: string
  text: string
  image: string
  onRetry?: () => void
} & HTMLAttributes<HTMLElement>

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

export type ProjectsWidgetActionsTypes = {
  refetch: ProjectsQueryResultTypes['refetch']
  buildSearch: BuildSearchTypes
}

export type ProjectsWidgetDataTypes = {
  projects: ProjectTypes[]
  meta?: ProjectsWidgetMetaTypes
} & ProjectsWidgetStateTypes
