import { cn } from '@/shared/lib'
import type { CardItemTypes } from '../model/types'

export function CardItem({ children, className }: CardItemTypes) {
  return <div className={cn('min-w-0 flex-1', className)}>{children}</div>
}
