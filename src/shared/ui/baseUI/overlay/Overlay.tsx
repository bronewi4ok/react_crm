import { cn } from '@/shared/libs'
import type { HTMLAttributes } from 'react'

export type OverlayTypes = {
  full?: boolean
  fullscreen?: boolean
} & HTMLAttributes<HTMLElement>

export const Overlay = ({ full, fullscreen, children, className }: OverlayTypes) => {
  return (
    <div
      className={cn(
        'bg-dark/70 text-light',
        'flex items-center justify-center',
        full && 'h-full w-full',
        fullscreen && 'fixed inset-0 h-[vh] w-[100vw]',
        className,
      )}>
      {children}
    </div>
  )
}
