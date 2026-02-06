import { cn } from '@/shared/lib'
import type { CardTypes } from '../model/types'

export function CardRoot({ children, className, onClick }: CardTypes) {
  return (
    <article
      onClick={onClick}
      className={cn(
        'min-h-20 px-4 py-3 md:px-5 md:py-4',
        'border-frame-200 bg-light shadow-frame-50 rounded-xl border shadow-sm',
        'flex items-center gap-3',
        'transition duration-200 hover:scale-101 hover:shadow-lg',
        onClick && 'cursor-pointer',
        className,
      )}>
      {children}
    </article>
  )
}
