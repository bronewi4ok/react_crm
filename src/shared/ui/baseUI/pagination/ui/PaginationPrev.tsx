import { cn } from '@/shared/lib'

import { Link } from 'react-router-dom'
import { Button } from '../../button'
import { usePagination } from '../model/hooks'
import type { PaginationPrevProps } from '../model/types'

export const PaginationPrev = ({ children, className }: PaginationPrevProps) => {
  const { currentPage, prevPage, buildLink, disabled } = usePagination()
  const isDisabled = currentPage <= 1 || disabled

  return (
    <Button
      asChild
      className={cn(className, isDisabled && 'pointer-events-none opacity-50')}
      variant="support"
      size="sm">
      <Link aria-disabled={isDisabled} tabIndex={isDisabled ? -1 : 0} to={buildLink(prevPage)}>
        {children}
      </Link>
    </Button>
  )
}
