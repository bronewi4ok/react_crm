import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/baseUI/button'
import { Link } from 'react-router-dom'
import { usePagination } from '../model/hooks'

export const PaginationPages = () => {
  const { startPage, endPage, totalPages, currentPage, pages, disabled, buildLink } = usePagination()

  return (
    <>
      {startPage > 1 && (
        <>
          <Button
            asChild
            square
            variant="support"
            size="sm"
            className={cn(
              disabled && 'pointer-events-none opacity-50',
              currentPage === 1 && 'pointer-events-none',
            )}>
            <Link
              aria-disabled={disabled || currentPage === 1}
              tabIndex={disabled || currentPage === 1 ? -1 : 0}
              to={buildLink(1)}>
              1
            </Link>
          </Button>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Button
          asChild
          square
          key={page}
          variant={page === currentPage ? 'primary' : 'support'}
          size="sm"
          className={cn(
            disabled && 'pointer-events-none opacity-50',
            page === currentPage && 'pointer-events-none',
          )}>
          <Link
            aria-disabled={disabled || page === currentPage}
            tabIndex={disabled || page === currentPage ? -1 : 0}
            to={buildLink(page)}>
            {page}
          </Link>
        </Button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <Button
            asChild
            square
            variant="support"
            size="sm"
            className={cn(
              disabled && 'pointer-events-none opacity-50',
              currentPage === totalPages && 'pointer-events-none',
            )}>
            <Link
              aria-disabled={disabled || currentPage === totalPages}
              tabIndex={disabled || currentPage === totalPages ? -1 : 0}
              to={buildLink(totalPages)}>
              {totalPages}
            </Link>
          </Button>
        </>
      )}
    </>
  )
}
