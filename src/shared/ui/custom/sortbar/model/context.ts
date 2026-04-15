import { createSafeContext } from '@shared/lib'
import type { SortValueTypes } from '@shared/query-state'

export type SortBarContextTypes = {
  value: SortValueTypes<string>
  onValueChange: (field: string) => void
}

export const [useSortBarContext, SortBarProvider] =
  createSafeContext<SortBarContextTypes>('SortBarProvider')
