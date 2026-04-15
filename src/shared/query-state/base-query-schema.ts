import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  type inferParserType,
  type UrlKeys,
} from 'nuqs'
import { PER_PAGE } from './config'

export const baseQuerySchema = {
  search: parseAsString.withDefault(''),
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(PER_PAGE),
  filter: parseAsArrayOf(parseAsString).withDefault([]),
  tags: parseAsArrayOf(parseAsString).withDefault([]),
} as const

export type BaseQueryTypes = inferParserType<typeof baseQuerySchema>

export const baseQueryUrlKeys: UrlKeys<BaseQueryTypes> = {
  search: 'q',
  filter: 'f',
  page: 'p',
  perPage: 'pp',
  tags: 'tg',
} as const
