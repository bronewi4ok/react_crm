import { SORT_ORDER } from '@/shared/model/sort'
import clsx from 'clsx'
import { Icon } from '../baseUI/icon'
import type { SortBarTypes } from './types'

export function SortBar<T extends string>({ options, value, onSort, className }: SortBarTypes<T>) {
  const handleSortClick = (field: T) => onSort(field)

  return (
    <div className={clsx('flex items-center gap-4 px-6.5 py-4 bg-back-50', className)}>
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => handleSortClick(option.key)}
          className={clsx(
            'flex items-center gap-6.5 cursor-pointer',
            value.field === option.key ?
              value.order === SORT_ORDER.ASC ?
                'text-success-700'
              : 'text-danger-500'
            : 'text-secondary-500',
            option.column,
          )}>
          {option?.icon && (
            <Icon
              className="fill-current"
              name={
                value.field === option.key ?
                  value.order === SORT_ORDER.DESC ?
                    option.icon.desc
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
