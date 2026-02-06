import { cn } from '@/shared/lib'
import { Button } from '../../button'
import { usePagination } from '../model/hooks'
import type { PaginationNextProps } from '../model/types'

export const PaginationNext = ({ children, className }: PaginationNextProps) => {
  const { currentPage, totalPages, onNextPage, onPageChange, disabled } = usePagination()
  return (
    <Button
      className={cn(className)}
      variant="support"
      size="sm"
      onClick={() => onPageChange(onNextPage)}
      disabled={currentPage >= totalPages || disabled}>
      {children}
    </Button>
  )
}
