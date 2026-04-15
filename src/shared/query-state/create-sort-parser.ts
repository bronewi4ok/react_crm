import { createParser, parseAsStringLiteral } from 'nuqs'
import { SORT_ORDER_VALUES } from './config'

export const createSortParser = <T extends string>(sortKeys: readonly T[]) => {
  return createParser({
    parse(query) {
      const [rawKey = '', rawOrder = ''] = query.split(':')
      const field = parseAsStringLiteral(sortKeys).parse(rawKey)
      const order = parseAsStringLiteral(SORT_ORDER_VALUES).parse(rawOrder)

      if (!field || !order) return null
      return { field, order }
    },
    serialize({ field, order }) {
      return `${field}:${order}`
    },
    eq: (prev, next) => prev.field === next.field && prev.order === next.order,
  })
}
