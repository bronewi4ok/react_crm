import { cn } from '@/shared/lib'
import type { CardHeaderTypes } from '../model/types'

export function CardHeader({ children, className }: CardHeaderTypes) {
  return <div className={cn('flex items-center justify-center', className)}>{children}</div>
}
