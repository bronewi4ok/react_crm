import clsx from 'clsx'
import type { FromGlobalErrorTypes } from '../model/types'

export function FromGlobalError({ error, className, title }: FromGlobalErrorTypes) {
  if (!error) return

  return (
    <div className={clsx('text-danger-500', className)}>
      {'message' in error ? error.message : title}
    </div>
  )
}
