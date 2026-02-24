import { cn } from '@/shared/lib'
import type { ErrorFallbackDescriptionProps } from '../model/types'

export const ErrorFallbackDescription = ({
  children,
  className,
}: ErrorFallbackDescriptionProps) => {
  return (
    <p className={cn('text-secondary mb-5.5 w-100 max-w-full text-center text-sm', className)}>
      {children}
    </p>
  )
}
