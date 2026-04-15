import { baseQuerySchema, baseQueryUrlKeys, createSortParser } from '@shared/query-state'
import { type UrlKeys } from 'nuqs'
import { PROJECTS_SORT_KEYS } from './configs'

const parseAsProjectsSort = createSortParser(PROJECTS_SORT_KEYS)

export const projectsQuerySchema = {
  ...baseQuerySchema,
  sort: parseAsProjectsSort,
} as const

export const projectsQueryKeys: UrlKeys<typeof projectsQuerySchema> = {
  ...baseQueryUrlKeys,
  sort: 's',
} as const
