import type { SortOrderTypes } from '@/shared/model/sort'
import { tasksSortConfigs } from './configs'

export type TasksSortTypes = (typeof tasksSortConfigs)[number]['key']
export type TaskSortOrderTypes = SortOrderTypes
