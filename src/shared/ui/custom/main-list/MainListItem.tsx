import type { ComponentPropsWithoutRef } from 'react'

// ======================================
export type MainListItemTypes = ComponentPropsWithoutRef<'li'>

// ======================================
export const MainListItem = ({ className, children }: MainListItemTypes) => {
  return <li className={className}>{children}</li>
}
