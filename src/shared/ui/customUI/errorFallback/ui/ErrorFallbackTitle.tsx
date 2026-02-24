import { cn } from '@/shared/lib'
import type { ErrorFallbackTitleProps } from '../model/types'

export function ErrorFallbackTitle({ children, className }: ErrorFallbackTitleProps) {
  return <h2 className={cn('mb-3 text-center text-4xl font-bold', className)}>{children}</h2>
}
