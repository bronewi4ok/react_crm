import type { ProjectsRequestTypes } from '@entities/project'
import { toggleSort, useQueryParams } from '@shared/query-state'
import { projectsQueryKeys, projectsQuerySchema } from './schema'
import type { ProjectsSortTypes } from './types'

export function useProjectsQuery() {
  const { params, setParams, buildLink } = useQueryParams(projectsQuerySchema, projectsQueryKeys)
  const sort = params.sort
  const setSort = (field: ProjectsSortTypes) =>
    setParams({ sort: toggleSort(sort, field), page: 1 })

  const apiParams: ProjectsRequestTypes = {
    sort: params.sort?.field,
    order: params.sort?.order,
    page: params.page,
    per: params.perPage,
    q: params.search || undefined,
  } as const

  return { params, apiParams, setParams, sort, setSort, buildLink }
}
