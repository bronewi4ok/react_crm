type SortOptionTypes<T extends string> = {
  key: T
  label: string
  icon?: string
  column?: string
}
export type SortOrderTypes = 'asc' | 'desc'

export type SortStateTypes<T extends string> = {
  field: T | null
  order: SortOrderTypes | null
}

export type SortBarTypes<T extends string> = {
  options: readonly SortOptionTypes<T>[]
  value: SortStateTypes<T>
  onSort: (field: T, order: SortOrderTypes) => void
  className?: string
}
