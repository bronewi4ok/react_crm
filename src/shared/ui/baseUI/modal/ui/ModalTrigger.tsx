import { Dialog } from 'radix-ui'
import type { ModalTriggerTypes } from '../model/types'

export function ModalTrigger({ children }: ModalTriggerTypes) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>
}
