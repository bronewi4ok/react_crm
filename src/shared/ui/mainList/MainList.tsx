import clsx from 'clsx'
import { type MainListProps } from './types'

export function MainList({ children, className }: MainListProps) {
  return (
    <ul className={clsx('p-6 bg-light space-y-3 list-none m-0', className)}>
      {children}
    </ul>
  )
}
