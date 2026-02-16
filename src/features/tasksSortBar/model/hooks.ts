import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { SORT_ORDER } from '@/shared/model/sort'
import { z } from 'zod'
import { tasksSortSchema } from './validation'

type SortField = NonNullable<z.output<typeof tasksSortSchema>['sort']>

export function useTasksQueryParams() {
  const [params, setParams] = useQueryParams(tasksSortSchema)
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
