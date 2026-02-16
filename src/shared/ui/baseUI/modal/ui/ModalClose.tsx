import clsx from 'clsx'
import { Dialog } from 'radix-ui'
import type { ModalCloseTypes } from '../model/types'

export function ModalClose({ children, className }: ModalCloseTypes) {
  return (
    <Dialog.Close asChild className={clsx(className)}>
      {children}
    </Dialog.Close>
  )
}
