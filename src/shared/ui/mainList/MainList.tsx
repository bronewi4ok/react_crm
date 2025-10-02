import clsx from 'clsx'
import { type MainListProps } from './types'

export function MainList<T>({
  items,
  renderItem,
  className,
  getKey,
}: MainListProps<T>) {
  return (
    <ul
      className={clsx(
        'p-6 bg-light flex flex-col gap-2 list-none m-0',
        className,
      )}>
      {items.map((item, i) => (
        <li key={getKey(item, i)}>{renderItem(item, i)}</li>
      ))}
    </ul>
  )
}
