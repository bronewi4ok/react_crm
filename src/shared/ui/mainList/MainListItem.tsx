import clsx from 'clsx'
import type { MainListItemProps } from './types'

export function MainListItem({ children, className }: MainListItemProps) {
  return (
    <li
      className={clsx(
        'rounded-xl bg-light border border-border-300',
        className,
      )}>
      {children}
    </li>
  )
}
