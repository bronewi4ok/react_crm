import { cn } from '@shared/lib'
import type { CardTypes } from '../model/types'

export function CardRoot({ children, className, onClick }: CardTypes) {
  return (
    <article
      onClick={onClick}
      className={cn(
        'isolate min-h-20 px-4 py-3 md:px-5 md:py-4',
        'border-frame-200 bg-light shadow-frame-50 rounded-xl border shadow-sm',
        'flex items-center gap-3',
        'relative z-0 transition duration-200 hover:scale-101 hover:shadow-lg',
        'has-[[data-group="controls"]:hover]:scale-100',
        'has-[[data-group="controls"]:hover]:shadow-sm',
        'has-[[data-group="controls"]:hover]:cursor-default',
        onClick && 'cursor-pointer',
        className,
      )}>
      {children}
    </article>
  )
}
