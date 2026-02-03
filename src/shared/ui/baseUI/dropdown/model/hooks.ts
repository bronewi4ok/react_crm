import { useAnimationControls } from 'motion/react'
import { useContext, useEffect } from 'react'
import { DropdownActionsContext, DropdownStateContext } from './context'
import type { DropdownBoxControlsTypes } from './types'

export function useDropdownState() {
  const ctx = useContext(DropdownStateContext)
  if (!ctx) throw new Error('useDropdownState must be used inside DropdownStateContext.Provider')
  return ctx
}

export function useDropdownActions() {
  const ctx = useContext(DropdownActionsContext)
  if (!ctx) throw new Error('useDropdownActions must be used inside DropdownActionsContext.Provider')
  return ctx
}

export function useDropdownControls(
  open: boolean,
  setOpen: (v: boolean) => void,
): DropdownBoxControlsTypes {
  const controls = useAnimationControls()

  async function closeMenu() {
    await controls.start('closed')
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => controls.start('open'))
    }
  }, [open, controls])

  return { closeMenu, controls }
}
