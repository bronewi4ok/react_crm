import type { HTMLAttributes } from 'react'

// Root
export type ModalRootTypes = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
} & HTMLAttributes<HTMLElement>

// Trigger
export type ModalTriggerTypes = HTMLAttributes<HTMLElement>

// Close
export type ModalCloseTypes = HTMLAttributes<HTMLElement>

// Cross
export type ModalCrossTypes = HTMLAttributes<HTMLElement>

// Content
export type ModalContentTypes = HTMLAttributes<HTMLElement>

// Title
export type ModalTitleTypes = HTMLAttributes<HTMLElement>

// Header
export type ModalHeaderTypes = HTMLAttributes<HTMLElement>

// Body
export type ModalBodyTypes = HTMLAttributes<HTMLElement>

// Footer
export type ModalFooterTypes = HTMLAttributes<HTMLElement>

// Description
export type ModalDescriptionTypes = HTMLAttributes<HTMLElement>
