import { cn } from '@/shared/lib'
import { Link } from 'react-router-dom'
import { Button } from '../../button'
import { usePagination } from '../model/hooks'
import type { PaginationNextProps } from '../model/types'

export const PaginationNext = ({ children, className }: PaginationNextProps) => {
  const { currentPage, totalPages, nextPage, buildLink, disabled } = usePagination()
  const isDisabled = currentPage >= totalPages || disabled

  return (
    <Button
      asChild
      className={cn(className, isDisabled && 'pointer-events-none opacity-50')}
      variant="support"
      size="sm">
      <Link aria-disabled={isDisabled} tabIndex={isDisabled ? -1 : 0} to={buildLink(nextPage)}>
        {children}
      </Link>
    </Button>
  )
}
