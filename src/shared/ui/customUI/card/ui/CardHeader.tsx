import { cn } from '@/shared/libs'
import type { CardHeaderTypes } from '../model/types'

export function CardHeader({ children, className }: CardHeaderTypes) {
  return (
    <div
      className={cn(
        'bg-back-100 text-secondary-500 flex size-10 items-center justify-center rounded-xl',
        className,
      )}>
      {children}
    </div>
  )
}
