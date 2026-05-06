import type { QueryParamsTypes, QueryResponseTypes } from '@shared/query-state'
import type { ProjectTypes } from './schema'

// export type ProjectTypes = {
//   id: string
//   name?: string
//   specialization?: string
//   description?: string
//   budget?: number
//   tasks: string[]
//   clients?: string[]
//   taskers?: string[]
//   createdAt?: string
//   finishedAt?: string
//   updatedAt?: string
//   startDate?: string
//   endDate?: string
//   avatar?: string
//   abbreviation?: string
// }

export type ProjectsResponseTypes = QueryResponseTypes<ProjectTypes>
export type ProjectsRequestTypes = QueryParamsTypes
