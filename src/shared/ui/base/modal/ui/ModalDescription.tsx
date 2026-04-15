import clsx from 'clsx'
import { Dialog } from 'radix-ui'
import type { ModalDescriptionTypes } from '../model/types'

export function ModalDescription({ children, className }: ModalDescriptionTypes) {
  return (
    <Dialog.Description className={clsx('text-secondary-400 text-lg', className)}>
      {children}
    </Dialog.Description>
  )
}
