export * from './model/context'
export * from './model/hooks'
export * from './model/types'

export { getPaginationRange } from './lib/getPaginationRange'

import { PaginationNext } from './ui/PaginationNext'
import { PaginationPages } from './ui/PaginationPages'
import { PaginationPrev } from './ui/PaginationPrev'
import { PaginationRoot as Root } from './ui/PaginationRoot'

export const Pagination = Object.assign(Root, {
  Start: PaginationPrev,
  Pages: PaginationPages,
  End: PaginationNext,
})
