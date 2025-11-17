import clsx from 'clsx'
import type { FormItemTypes } from './types'

export function FormItem({
  title,
  hint,
  error,
  className,
  children,
  border = true,
}: FormItemTypes) {
  return (
    <div
      className={clsx(
        'flex flex-col space-y-1.5 pt-2.5 pb-2.5 ',
        border && 'border-b-1',
        error && border ? 'border-b-danger-500' : 'border-b-border-500',
        className,
      )}>
      {title && <p className="text-p1 text-secondary-500">{title}</p>}

      {children}

      {hint && !error && (
        <div className="text-base leading-1 text-success-500">{hint}</div>
      )}

      {error && (
        <div className="text-xs text-danger-500 leading-1">{error}</div>
      )}
    </div>
  )
}
