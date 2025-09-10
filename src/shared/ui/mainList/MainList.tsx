import clsx from 'clsx'
import { type MainListProps } from './MainList.types'

export function MainList({
  children,
  className,
  emptyFallback = null,
  ...rest
}: MainListProps) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : !!children
  return (
    <ul
      {...rest}
      className={clsx('p-6 bg-light space-y-3 list-none m-0', className)}>
      {hasChildren ? children : emptyFallback}
    </ul>
  )
}
