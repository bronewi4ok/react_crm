import { Button } from '@/shared/ui/button'
import type { PaginationTypes } from './types'

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  isLoading = false,
  isFetching = false,
  // showStatus = true,
}: PaginationTypes) {
  if (isLoading) return null
  if (totalPages <= 1) return null

  const pages = []
  const showPages = 5

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
      {/* {showStatus && isFetching && (
        <span className="text-sm text-gray-500 mr-2">Оновлення...</span>
      )} */}

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
            variant="support"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={isFetching}></Button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Button
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
