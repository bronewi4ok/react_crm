import { SORT_ORDER, type SortOrderTypes } from '@/shared/config'

export const toggleSort = <Field extends string>(
  currentSort: { field: Field; order: SortOrderTypes } | null,
  newField: Field,
) => {
  if (currentSort?.field !== newField) return { field: newField, order: SORT_ORDER.ASC }
  if (currentSort?.order === SORT_ORDER.ASC) return { field: newField, order: SORT_ORDER.DESC }
  return null
}
