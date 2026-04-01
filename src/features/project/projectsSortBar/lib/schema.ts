import { baseQuerySchema, baseQueryUrlKeys } from '@/shared/lib'
import { createSortParser } from '@/shared/lib/sort'
import { type UrlKeys } from 'nuqs'
import { PROJECTS_SORT_KEYS } from '../model/configs'

const parseAsProjectsSort = createSortParser(PROJECTS_SORT_KEYS)

export const projectsQuerySchema = {
  ...baseQuerySchema,
  sort: parseAsProjectsSort,
} as const

export const projectsQueryKeys: UrlKeys<typeof projectsQuerySchema> = {
  ...baseQueryUrlKeys,
  sort: 's',
} as const
