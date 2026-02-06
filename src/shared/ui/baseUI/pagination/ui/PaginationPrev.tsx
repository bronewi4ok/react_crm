import { cn } from '@/shared/lib'
import { Button } from '../../button'
import { usePagination } from '../model/hooks'
import type { PaginationPrevProps } from '../model/types'

export const PaginationPrev = ({ children, className }: PaginationPrevProps) => {
  const { currentPage, onPrevPage, onPageChange, disabled } = usePagination()
  return (
    <Button
      className={cn(className)}
      variant="support"
      size="sm"
      onClick={() => onPageChange(onPrevPage)}
      disabled={currentPage <= 1 || disabled}>
      {children}
    </Button>
  )
}
