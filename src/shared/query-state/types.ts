import type { SortOrderTypes } from './config'

export type QueryParamsTypes<TSortKey extends string = string> = {
  sort?: TSortKey
  order?: SortOrderTypes
  page?: number
  per?: number
  q?: string
}

export type QueryMetaTypes<TSortKey extends string = string> = {
  page: number
  per: number
  total: number
  totalPages: number
  sorted: boolean
  sort: TSortKey | string
  order: SortOrderTypes
  q: string | null
}

export type QueryResponseTypes<TItem, TSortKey extends string = string> = {
  data: TItem[]
  meta: QueryMetaTypes<TSortKey>
}
