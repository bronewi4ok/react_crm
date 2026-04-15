import clsx from 'clsx'
import type { ModalHeaderTypes } from '../model/types'

export function ModalHeader({ children, className }: ModalHeaderTypes) {
  return (
    <div
      className={clsx(
        'bg-light sticky top-0 z-1 flex items-baseline justify-between px-7 py-5',
        className,
      )}>
      {children}
    </div>
  )
}
