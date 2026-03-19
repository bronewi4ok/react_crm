import type { SortOrderTypes } from '@/shared/config'
import { PROJECTS_SORT_CONFIGS } from './configs'

export type ProjectsSortTypes = (typeof PROJECTS_SORT_CONFIGS)[number]['field']
export type ProjectSortOrderTypes = SortOrderTypes
