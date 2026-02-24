import type { SortOrderTypes } from '@/shared/model/sort'
import { projectsSortConfigs } from './configs'

export type ProjectsSortTypes = (typeof projectsSortConfigs)[number]['key']
export type ProjectSortOrderTypes = SortOrderTypes
