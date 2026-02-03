import clsx from 'clsx'
import { Dialog } from 'radix-ui'
import type { ModalTitleTypes } from '../model/types'

export function ModalTitle({ children, className }: ModalTitleTypes) {
  return (
    <Dialog.Title className={clsx('text-dark text-bold text-2xl', className)}>
      {children}
    </Dialog.Title>
  )
}
