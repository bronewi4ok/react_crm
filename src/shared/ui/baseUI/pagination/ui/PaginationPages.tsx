import { Button } from '@/shared/ui/baseUI/button'
import { usePagination } from '../model/hooks'

export const PaginationPages = () => {
  const { startPage, endPage, totalPages, onPageChange, currentPage, pages, disabled } =
    usePagination()
  return (
    <>
      {startPage > 1 && (
        <>
          <Button
            square
            variant="support"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={disabled}>
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
          disabled={disabled}>
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
            disabled={disabled}>
            {totalPages}
          </Button>
        </>
      )}
    </>
  )
}
