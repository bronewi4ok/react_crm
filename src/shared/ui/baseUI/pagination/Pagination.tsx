import { Button } from '@/shared/ui/baseUI/button'
import { Loader } from '../loader'
import type { PaginationTypes } from './types'

export function Pagination(props: PaginationTypes) {
  const {
    currentPage,
    totalPages,
    onPageChange,
    className,
    isLoading = false,
    isFetching = false,
  } = props
  const pages = []
  const showPages = 3

  if (isLoading) return <Loader />
  if (totalPages <= 1) return null

  let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
  const endPage = Math.min(totalPages, startPage + showPages - 1)

  if (endPage - startPage + 1 < showPages) {
    startPage = Math.max(1, endPage - showPages + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  return (
    <div className={`flex items-center justify-center gap-2 p-4 ${className}`}>
      <Button
        variant="support"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1 || isFetching}>
        Previous
      </Button>

      {startPage > 1 && (
        <>
          <Button
            square
            variant="support"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={isFetching}>
            1
          </Button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Button
          square
          key={page}
          variant={page === currentPage ? 'primary' : 'support'}
          size="sm"
          onClick={() => onPageChange(page)}
          disabled={isFetching}>
          {page}
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <Button
            square
            variant="support"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            disabled={isFetching}>
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="support"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages || isFetching}>
        Next
      </Button>
    </div>
  )
}
