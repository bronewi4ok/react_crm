import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { ReactNode } from 'react'

export function DropdownTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenu.Trigger asChild className="cursor-default select-none">
      {children}
    </DropdownMenu.Trigger>
  )
}
