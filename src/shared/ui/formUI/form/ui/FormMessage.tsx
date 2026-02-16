import { cn } from '@/shared/lib'
import type { FormMessageTypes } from '../model/types'

export function FormMessage({ message, className }: FormMessageTypes) {
  if (!message) return

  return (
    <p role="alert" className={cn('text-danger-500 text-xs', className)}>
      {message}
    </p>
  )
}
