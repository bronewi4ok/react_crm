import { Icon } from '@/shared/ui/baseUI/icon'
import clsx from 'clsx'
import type { InputTypes } from './types'

export function Input({ icon, error, ...rest }: InputTypes) {
  return (
    <label className={clsx('text-p1 text-dark font-bold flex')}>
      <input
        className="flex-1 text-sm"
        {...rest}
      />

      {icon && (
        <Icon
          name={icon}
          size="sm"
          className={clsx(
            ' ml-4',
            icon && error ? 'fill-danger-500' : 'fill-current',
          )}
        />
      )}
    </label>
  )
}
