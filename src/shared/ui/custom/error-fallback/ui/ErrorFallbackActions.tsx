import { cn } from '@shared/lib'
import type { HTMLAttributes } from 'react'

// ======================================
type Props = HTMLAttributes<HTMLElement>

// ======================================
export const ErrorFallbackActions = (props: Props) => {
  const { children, className } = props

  return <div className={cn('flex flex-wrap gap-3', className)}>{children}</div>
}
