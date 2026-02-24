import { cn } from '@/shared/lib'
import type { ErrorFallbackRootProps } from '../model/types'

export function ErrorFallbackRoot({ children, className }: ErrorFallbackRootProps) {
  return (
    <div className={cn('flex w-xl max-w-full flex-col items-center p-4', className)}>
      {children}
    </div>
  )
}
