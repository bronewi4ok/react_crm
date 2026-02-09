import { cn } from '@/shared/lib'
import { Button } from '@/shared/ui/baseUI/button'
import { usePagination } from '../model/hooks'
import { Link } from 'react-router-dom'

export const PaginationPages = () => {
  const { startPage, endPage, totalPages, onPageChange, currentPage, pages, disabled, buildLink } =
    usePagination()
  return (
    <>
      {startPage > 1 && (
        <>
          {buildLink ? (
            <Button
              asChild
              square
              variant="support"
              size="sm"
              className={cn(disabled && 'pointer-events-none opacity-50', currentPage === 1 && 'pointer-events-none')}>
              <Link
                aria-disabled={disabled || currentPage === 1}
                tabIndex={disabled || currentPage === 1 ? -1 : 0}
                to={buildLink(1)}>
                1
              </Link>
            </Button>
          ) : (
            <Button
              square
              variant="support"
              size="sm"
              onClick={() => onPageChange?.(1)}
              disabled={disabled}>
              1
            </Button>
          )}
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {pages.map((page) => (
        buildLink ? (
          <Button
            asChild
            square
            key={page}
            variant={page === currentPage ? 'primary' : 'support'}
            size="sm"
            className={cn(disabled && 'pointer-events-none opacity-50', page === currentPage && 'pointer-events-none')}>
            <Link
              aria-disabled={disabled || page === currentPage}
              tabIndex={disabled || page === currentPage ? -1 : 0}
              to={buildLink(page)}>
              {page}
            </Link>
          </Button>
        ) : (
          <Button
            square
            key={page}
            variant={page === currentPage ? 'primary' : 'support'}
            size="sm"
            onClick={() => onPageChange?.(page)}
            disabled={disabled}>
            {page}
          </Button>
        )
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          {buildLink ? (
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
          ) : (
            <Button
              square
              variant="support"
              size="sm"
              onClick={() => onPageChange?.(totalPages)}
              disabled={disabled}>
              {totalPages}
            </Button>
          )}
        </>
      )}
    </>
  )
}
