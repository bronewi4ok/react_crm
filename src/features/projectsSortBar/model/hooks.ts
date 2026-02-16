import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { SORT_ORDER } from '@/shared/model/sort'
import { z } from 'zod'
import { projectsSortSchema } from './validation'

type SortField = NonNullable<z.output<typeof projectsSortSchema>['sort']>

export function useProjectsQueryParams() {
  const [params, setParams] = useQueryParams(projectsSortSchema)
  const sort = params.sort
  const order = params.order

  const setSort = (field: SortField) =>
    setParams((prev) => {
      if (prev.sort !== field) return { sort: field, order: SORT_ORDER.ASC, page: 1 }
      if (prev.order === SORT_ORDER.ASC) return { order: SORT_ORDER.DESC, page: 1 }
      return { sort: undefined, order: undefined, page: 1 }
    })

  return { sort, order, setSort }
}
