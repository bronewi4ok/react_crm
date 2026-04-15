import { toggleSort, useQueryParams } from '@shared/query-state'
import { projectsQueryKeys, projectsQuerySchema } from './schema'
import type { ProjectsSortTypes } from './types'

export function useProjectsQuery() {
  const { params, setParams, buildLink } = useQueryParams(projectsQuerySchema, projectsQueryKeys)
  const sort = params.sort
  const setSort = (field: ProjectsSortTypes) =>
    setParams({ sort: toggleSort(sort, field), page: 1 })

  return { params, setParams, sort, setSort, buildLink }
}
