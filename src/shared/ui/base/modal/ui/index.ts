import { ModalBody } from './ModalBody'
import { ModalClose } from './ModalClose'
import { ModalContent } from './ModalContent'
import { ModalCross } from './ModalCross'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalRoot as Root } from './ModalRoot'
import { ModalTitle } from './ModalTitle'
import { ModalTrigger } from './ModalTrigger'

export const Modal = Object.assign(Root, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Close: ModalClose,
  Cross: ModalCross,
  Title: ModalTitle,
  Description: ModalDescription,
  Footer: ModalFooter,
  Header: ModalHeader,
  Body: ModalBody,
})
