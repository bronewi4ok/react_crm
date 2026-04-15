import { useGetProjectsQuery, type ProjectsQueryTypes } from '@entities/project'
import { useProjectsQuery } from '@features/project/sort-projects'
import type { ProjectsListActionsTypes, ProjectsListDataTypes } from './types'

export const useProjectsList = () => {
  const { params, buildLink } = useProjectsQuery()

  const apiParams: ProjectsQueryTypes = {
    sort: params.sort?.field,
    order: params.sort?.order,
    page: params.page,
    per: params.perPage,
    q: params.search || undefined,
  } as const

  const { data, isLoading, isError, isFetching, refetch, } = useGetProjectsQuery(apiParams)
  const projects = data?.data ?? []
  const meta = data?.meta

  const state: ProjectsListDataTypes = { projects, meta, isLoading, isError, isFetching }
  const actions: ProjectsListActionsTypes = {
    refetch,
    buildSearch: (updates) => buildLink(updates),
  }

  return { state, actions }
}
