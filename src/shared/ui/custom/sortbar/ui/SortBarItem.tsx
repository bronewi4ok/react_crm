import { cn } from '@shared/lib'
import { SORT_ORDER } from '@shared/query-state'
import { Icon } from '@ui/base/icon'
import { useSortBarContext } from '../model/context'
import type { SortBarItemProps } from '../model/types'

export const SortBarItem = (props: SortBarItemProps) => {
  const { children, className, field, icon, ...rest } = props
  const { value, onValueChange } = useSortBarContext()

  const isActive = value?.field === field
  const order = isActive ? value?.order : null
  const iconName = !icon ? null : isActive && order === SORT_ORDER.DESC ? icon.desc : icon.asc

  const sortItemClasses = cn(
    'text-sm text-secondary-500 flex cursor-pointer items-center gap-6.5',
    isActive && [
      order === SORT_ORDER.ASC && 'text-success-700',
      order === SORT_ORDER.DESC && 'text-danger-400',
    ],
    className,
  )

  return (
    <li className={cn('flex-1')}>
      <button
        className={sortItemClasses}
        onClick={() => onValueChange(field)}
        type="button"
        {...rest}>
        {iconName && <Icon className="fill-current" name={iconName} size="sm" />}

        {children}
      </button>
    </li>
  )
}
