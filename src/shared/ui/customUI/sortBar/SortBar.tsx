import { cn } from '@/shared/lib'
import { SORT_ORDER } from '@/shared/model/sort'
import { Icon } from '@/shared/ui/baseUI/icon'
import type { SortBarTypes } from './types'

export function SortBar<T extends string>({ options, value, onSort, className }: SortBarTypes<T>) {
  const handleSortClick = (field: T) => onSort(field)

  return (
    <div className={cn('bg-back-50 flex items-center gap-4 px-6.5 py-4', className)}>
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => handleSortClick(option.key)}
          className={cn(
            'text-secondary-500 flex cursor-pointer items-center gap-6.5',
            value.field === option.key && [
              value.order === SORT_ORDER.ASC && 'text-success-700',
              value.order === SORT_ORDER.DESC && 'text-danger-400',
            ],
            option.column,
          )}>
          {option?.icon && (
            <Icon
              className="fill-current"
              name={
                value.field === option.key
                  ? value.order === SORT_ORDER.DESC
                    ? option.icon.desc
                    : option.icon.asc
                  : option.icon.asc
              }
              size="sm"
            />
          )}
          {option.label}
        </button>
      ))}
    </div>
  )
}
