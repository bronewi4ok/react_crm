import { cn } from '@/shared/lib'
import type { CardTextTypes } from '../model/types'

export function CardText({ className, children }: CardTextTypes) {
  return <div className={cn('text-secondary-500 truncate text-xs', className)}>{children}</div>
}
