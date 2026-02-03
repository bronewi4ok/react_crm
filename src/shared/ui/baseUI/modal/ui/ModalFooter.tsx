import clsx from 'clsx'
import type { ModalFooterTypes } from '../model/types'

export function ModalFooter({ children, className }: ModalFooterTypes) {
  return (
    <div className={clsx('bg-back-500 sticky bottom-0 z-1 px-7 py-4.5', className)}>
      {children}
    </div>
  )
}
