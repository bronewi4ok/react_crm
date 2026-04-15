import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState, type ReactNode } from 'react'
import { DropdownStateContext } from '../model/context'

export function Dropdown({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownStateContext.Provider value={{ open, setOpen }}>
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        {children}
      </DropdownMenu.Root>
    </DropdownStateContext.Provider>
  )
}
