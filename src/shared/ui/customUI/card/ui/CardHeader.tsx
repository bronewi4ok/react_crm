import { cn } from '@/shared/libs'
import type { CardHeaderTypes } from '../model/types'

export function CardHeader({ children, className }: CardHeaderTypes) {
  return (
    <div className={cn('flex items-center justify-center', className)}>{children}</div>
  )
}
