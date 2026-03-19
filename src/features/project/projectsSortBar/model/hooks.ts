import { useQueryParams } from '@/shared/hooks'
import { toggleSort } from '@/shared/lib/sort/toggleSort'
import { projectsQueryKeys, projectsQuerySchema } from '../lib/schema'
import type { ProjectsSortTypes } from './types'
export { SORT_ORDER } from '@/shared/config/'

export function useProjectsQuery() {
  const { params, setParams, buildLink } = useQueryParams(projectsQuerySchema, projectsQueryKeys)
  const sort = params.sort
  const setSort = (field: ProjectsSortTypes) =>
    setParams({ sort: toggleSort(sort, field), page: 1 })

  return { params, setParams, sort, setSort, buildLink }
}
