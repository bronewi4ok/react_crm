import type { SORT_ORDER } from './configs'

export type SortOrderTypes = (typeof SORT_ORDER)[keyof typeof SORT_ORDER]
