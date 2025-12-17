import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { z } from 'zod'
import { projectsSortSchema } from './validation'

type SortField = NonNullable<z.output<typeof projectsSortSchema>['sort']>

export function useProjectsQueryParams() {
  const [params, setParams] = useQueryParams(projectsSortSchema)
  const sort = params.sort
  const order = params.order

  const setSort = (field: SortField) =>
    setParams((prev) => {
      if (prev.sort !== field) return { sort: field, order: 'asc', page: 1 }
      if (prev.order === 'asc') return { order: 'desc', page: 1 }
      return { sort: undefined, order: undefined, page: 1 }
    })

  return { sort, order, setSort }
}
