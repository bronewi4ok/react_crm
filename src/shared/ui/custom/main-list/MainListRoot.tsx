import { cn } from '@shared/lib'
import type { ComponentPropsWithoutRef } from 'react'

// ======================================
type Props = ComponentPropsWithoutRef<'ul'>

// ======================================
export const MainListRoot = ({ children, className }: Props) => {
  return <ul className={cn('bg-light relative list-none space-y-2 p-6', className)}>{children}</ul>
}
