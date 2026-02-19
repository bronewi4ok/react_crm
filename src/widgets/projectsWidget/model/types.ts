import type { ProjectTypes, useGetProjectsQuery } from '@/entities/project'

type RefetchTypes = ReturnType<typeof useGetProjectsQuery>['refetch']

export type ProjectsWidgetContentProps = {
  projects: ProjectTypes[]
  meta?: { page: number; totalPages: number }
  isLoading: boolean
  isError: boolean
  isFetching: boolean
  refetch: RefetchTypes
  buildLink: (page: number) => string
}
