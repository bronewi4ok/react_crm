import { cn } from '@/shared/lib'

import { Button } from '../../button'
import { usePagination } from '../model/hooks'
import type { PaginationPrevProps } from '../model/types'

export const PaginationPrev = ({ children, className }: PaginationPrevProps) => {
  const { currentPage, prevPage, onPageChange, disabled } = usePagination()
  // const location = useLocation()

  return (
    <Button
      className={cn(className)}
      variant="support"
      size="sm"
      onClick={() => onPageChange(prevPage)}
      disabled={currentPage <= 1 || disabled}>
      {children}
    </Button>

    // <Button
    //   asChild
    //   className={cn(className)}
    //   variant="support"
    //   size="sm"
    //   disabled={currentPage <= 1 || disabled}>
    //   <Link to={`${location.pathname}${pageLink(prevPage)}`}>{children}</Link>
    // </Button>
  )
}
