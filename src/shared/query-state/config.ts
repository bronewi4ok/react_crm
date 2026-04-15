export const SORT_ORDER = { ASC: 'asc', DESC: 'desc' } as const
export const SORT_ORDER_VALUES = [SORT_ORDER.ASC, SORT_ORDER.DESC] as const
export const PER_PAGE = 7

export type SortOrderTypes = (typeof SORT_ORDER)[keyof typeof SORT_ORDER]

export type SortValueTypes<Field extends string> = {
  field: Field
  order: SortOrderTypes
} | null
