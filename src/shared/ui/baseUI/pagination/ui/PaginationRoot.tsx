import { cn } from '@/shared/lib'
import { getPaginationRange } from '../lib/getPaginationRange'
import { PaginationActionProvider, PaginationStateProvider } from '../model/context'
import type { PaginationRootProps } from '../model/types'

export const PaginationRoot = (props: PaginationRootProps) => {
  const {
    children,
    className,
    currentPage,
    totalPages,
    showPages = 3,
    buildLink,
    disabled = false,
    ...rest
  } = props

  const { pages, startPage, endPage } = getPaginationRange(currentPage, totalPages, showPages)
  const state = { showPages, currentPage, totalPages, pages, startPage, endPage, disabled }
  const action = { buildLink }

  return (
    <PaginationStateProvider value={{ ...state }}>
      <PaginationActionProvider value={{ ...action }}>
        <div className={cn('flex items-center justify-center gap-2 p-4', className)} {...rest}>
          {children}
        </div>
      </PaginationActionProvider>
    </PaginationStateProvider>
  )
}
