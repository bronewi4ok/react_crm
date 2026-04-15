import clsx from 'clsx'
import type { ComponentPropsWithoutRef } from 'react'

export function Wrap({ children, className }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('bg-back-200 text-dark min-h-dvh w-full break-all', className)}>
      {children}
    </div>
  )
}
