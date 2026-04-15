import clsx from 'clsx'
import type { FormFieldTypes } from '../model/types'

export function FormField({ children, className }: FormFieldTypes) {
  return <div className={clsx('space-y-2', className)}>{children}</div>
}
