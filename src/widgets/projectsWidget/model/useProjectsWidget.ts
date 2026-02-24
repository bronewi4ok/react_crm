import { useGetProjectsQuery } from '@/entities/project'
import { projectsSortSchema } from '@/features/projectsSortBar'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import type { ProjectsWidgetActionsTypes, ProjectsWidgetDataTypes } from './types'

export const useProjectsWidget = () => {
  const { params, buildSearch } = useQueryParams(projectsSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery(params)
  const projects = data?.data ?? []
  const meta = data?.meta

  const state: ProjectsWidgetDataTypes = { projects, meta, isLoading, isError, isFetching }
  const actions: ProjectsWidgetActionsTypes = { refetch, buildSearch }

  return {
    state,
    actions,
  }
}
