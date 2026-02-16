import { cn } from '@/shared/lib'
import type { CardTitleTypes } from '../model/types'

export function CardTitle({ children, className }: CardTitleTypes) {
  return <h3 className={cn('truncate font-medium', className)}>{children}</h3>
}
