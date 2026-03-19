import { createSafeContext } from '@/shared/hooks'
import type { SortBarContextTypes } from './types'

export const [useSortBarContext, SortBarProvider] =
  createSafeContext<SortBarContextTypes>('SortBarProvider')
