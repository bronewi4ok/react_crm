import { cn } from '@/shared/libs'
import { Children } from 'react'
import type { MainListLoaderTypes } from '../model/types'

export const MainListLoader = ({ children, className }: MainListLoaderTypes) => {
  const isChildren = Children.count(children) === 0

  return (
    <div
      className={cn(
        'bg-dark/20 absolute inset-0 flex h-full w-full items-center justify-center',
        'flex h-full w-full items-center justify-center',
        'text-support-900 txt-sm',
        className,
      )}>
      {!isChildren && <div className={cn('p-3', className)}>Updating…</div>}
      {children}
    </div>
  )
}
