import { createContext } from 'react'
import type { DropdownActionsTypes, DropdownStateType } from './types'

export const DropdownStateContext = createContext<DropdownStateType>({
  open: false,
  setOpen: () => {},
})

export const DropdownActionsContext = createContext<DropdownActionsTypes>({
  closeMenu: async () => {},
})
