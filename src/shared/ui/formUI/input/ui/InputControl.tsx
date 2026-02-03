import clsx from 'clsx'
import { useInput } from '../model/hooks'
import type { InputControlTypes } from '../model/types'

export function InputControl({ className, autoComplete = 'off', ...rest }: InputControlTypes) {
  const { error, isError, id } = useInput()

  return (
    <input
      id={id}
      className={clsx('flex-1 text-sm outline-none', className)}
      {...rest}
      aria-invalid={isError}
      aria-describedby={error ? `${id}_error` : undefined}
      autoComplete={autoComplete}
    />
  )
}
