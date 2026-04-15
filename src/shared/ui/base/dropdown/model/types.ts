import type { useAnimationControls } from 'motion/react'
import type { ReactNode } from 'react'

export type DropdownStateType = {
  open: boolean
  setOpen: (value: boolean) => void
}

export type DropdownActionsTypes = {
  closeMenu: () => Promise<void> | void
}

export type DropdownItemTypes = {
  children: ReactNode
  title: string
  onSelect?: () => void
}

export type DropdownBoxControlsTypes = DropdownActionsTypes & {
  controls: ReturnType<typeof useAnimationControls>
}
