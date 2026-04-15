import type { SortOrderTypes } from '@shared/query-state'
import { tasksSortConfigs } from './configs'

export type TasksSortTypes = (typeof tasksSortConfigs)[number]['key']
export type TaskSortOrderTypes = SortOrderTypes
