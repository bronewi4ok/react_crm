import { useGetProjectsQuery, type ProjectsQueryArgs } from '@/entities/project'
import { useProjectsQuery } from '@/features/project/projectsSortBar'
import type { ProjectsWidgetActionsTypes, ProjectsWidgetDataTypes } from './types'

export const useProjectsWidget = () => {
  const { params, buildLink } = useProjectsQuery()

  const apiParams: ProjectsQueryArgs = {
    sort: params.sort?.key,
    order: params.sort?.order,
    page: params.page,
    per: params.perPage,
    q: params.search || undefined,
  } as const

  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery(apiParams)
  const projects = data?.data ?? []
  const meta = data?.meta

  const state: ProjectsWidgetDataTypes = { projects, meta, isLoading, isError, isFetching }
  const actions: ProjectsWidgetActionsTypes = {
    refetch,
    buildSearch: (updates) => buildLink(updates),
  }

  return { state, actions }
}
