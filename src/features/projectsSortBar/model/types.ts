import { projectsSortConfigs } from './configs'

export type ProjectsSortTypes = (typeof projectsSortConfigs)[number]['key']
export type ProjectSortOrderTypes = 'asc' | 'desc'
