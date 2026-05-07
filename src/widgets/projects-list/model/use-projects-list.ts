import { useGetProjectsQuery } from '@entities/project'
import { useProjectsQuery } from '@features/project/sort-projects'
import type { ProjectsListActionsTypes, ProjectsListDataTypes } from './types'

export const useProjectsList = () => {
  const { apiParams, buildLink } = useProjectsQuery()

  const { data, isLoading, isError, isFetching, refetch } = useGetProjectsQuery(apiParams)
  const projects = data?.data ?? []
  // const projects: ProjectTypes[] = []
  const meta = data?.meta

  const state: ProjectsListDataTypes = { projects, meta, isLoading, isError, isFetching }
  const actions: ProjectsListActionsTypes = {
    refetch,
    buildSearch: (updates) => buildLink(updates),
  }

  return { state, actions }
}
