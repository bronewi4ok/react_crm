import clsx from 'clsx'
import { Icon } from '../../icon'
import type { SortBarItemProps } from '../model/types'

export function SortBarItem({
  isAcitve = false,
  onClick,
  option,
  className,
}: SortBarItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      key={option.key}
      className={clsx(
        'flex items-center gap-6.5 cursor-pointer',
        isAcitve ? 'text-red-500' : 'text-secondary-500',
        option?.column,
        className,
      )}>
      {option.icon && (
        <Icon
          className="fill-current"
          name={option.icon}
          size="sm"
        />
      )}
      {option.label}
    </button>
  )
}
