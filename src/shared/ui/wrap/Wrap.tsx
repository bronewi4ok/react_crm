import clsx from 'clsx'
import type { WrapTypes } from './types'

export function Wrap({ children, className }: WrapTypes) {
  return (
    <div
      className={clsx(
        'min-h-dvh w-full bg-back-500 text-dark break-all',
        className,
      )}>
      {children}
    </div>
  )
}
