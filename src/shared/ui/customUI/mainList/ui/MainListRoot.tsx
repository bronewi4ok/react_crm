import { cn } from '@/shared/libs'
import type { MainListRootTypes } from '../model/types'

export const MainListRoot = ({ children, className }: MainListRootTypes) => {
  return <ul className={cn('bg-light relative list-none space-y-2 p-6', className)}>{children}</ul>
}
