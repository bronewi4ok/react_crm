import { useSearchParams } from 'react-router-dom'
import { SORT_ORDER, type SortOrderTypes } from '../model/sort'

export type ListQueryParams<TSortKey extends string = string> = {
  sort?: TSortKey
  order?: SortOrderTypes
  page?: number
  per?: number
  q?: string
}

export type ListMeta<TSortKey extends string = string> = {
  page: number
  per: number
  total: number
  totalPages: number
  sorted: boolean
  sort: TSortKey | string
  order: SortOrderTypes
  q: string | null
}

export type ListResponse<TItem, TSortKey extends string = string> = {
  data: TItem[]
  meta: ListMeta<TSortKey>
}

export function useListQuery<TSortKey extends string = string>(defaultPer: number = 20) {
  const [searchParams, setSearchParams] = useSearchParams()

  // Читаємо параметри з URL
  const sort = (searchParams.get('sort') as TSortKey) || undefined
  const dirParam = searchParams.get('order')
  const order: SortOrderTypes | undefined =
    dirParam === SORT_ORDER.ASC ? SORT_ORDER.DESC
    : dirParam === SORT_ORDER.ASC ? SORT_ORDER.ASC
    : undefined

  const page = Number(searchParams.get('page') || '1')
  const per = Number(searchParams.get('per') || String(defaultPer))
  const q = searchParams.get('q') || undefined

  const sortParams: ListQueryParams<TSortKey> = { sort, order, page, per, q }

  // Функція оновлення параметрів
  const setSortParams = (newParams: Partial<ListQueryParams<TSortKey>>) => {
    const params = new URLSearchParams(searchParams)

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null) params.delete(key)
      else params.set(key, String(value))
    })

    setSearchParams(params)
  }

  return { sortParams, setSortParams }
}
