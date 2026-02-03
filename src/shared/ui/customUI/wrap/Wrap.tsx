import clsx from 'clsx'
import type { WrapTypes } from './types'

export function Wrap({ children, className }: WrapTypes) {
  return (
    <div
      className={clsx(
        'bg-back-200 text-dark min-h-dvh w-full break-all',
        className,
      )}>
      {children}
    </div>
  )
}
