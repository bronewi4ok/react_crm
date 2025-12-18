import type { SortOrderTypes } from '@/shared/model/sort'
type IconTypes = { asc: string; desc: string }

type SortOptionTypes<T extends string> = {
  key: T
  label: string
  icon?: IconTypes
  column?: string
}

export type SortStateTypes<T extends string> = { field: T | null; order: SortOrderTypes | null }

export type SortBarTypes<T extends string> = {
  options: readonly SortOptionTypes<T>[]
  value: SortStateTypes<T>
  onSort: (field: T) => void
  className?: string
}
