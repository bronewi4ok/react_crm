import type { SortOrderTypes } from '@/shared/config'
import { tasksSortConfigs } from './configs'

export type TasksSortTypes = (typeof tasksSortConfigs)[number]['key']
export type TaskSortOrderTypes = SortOrderTypes
