import * as Dialog from '@radix-ui/react-dialog'
import type { ModalRootTypes } from '../model/types'

export function ModalRoot({ open, onOpenChange, children }: ModalRootTypes) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  )
}
