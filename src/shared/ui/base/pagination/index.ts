export * from './lib/get-pagination-range'
export * from './lib/use-pagination'
export * from './model/context'
export * from './model/types'

import { PaginationNext } from './ui/PaginationNext'
import { PaginationPages } from './ui/PaginationPages'
import { PaginationPrev } from './ui/PaginationPrev'
import { PaginationRoot as Root } from './ui/PaginationRoot'

export const Pagination = Object.assign(Root, {
  Start: PaginationPrev,
  Pages: PaginationPages,
  End: PaginationNext,
})
