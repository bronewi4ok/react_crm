import clsx from 'clsx'
import type { MainListItemProps } from './MainList.types'

export function MainListItem({
  children,
  className,
  ...rest
}: MainListItemProps) {
  return (
    <li
      {...rest}
      className={clsx(
        'rounded-xl bg-light border border-border-300',
        className,
      )}>
      {children}
    </li>
  )
}
