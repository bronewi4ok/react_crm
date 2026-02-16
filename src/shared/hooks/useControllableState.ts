import { useCallback, useState } from 'react'

type Params<T> = {
  value?: T
  defaultValue: T
  onChange?: (value: T) => void
}

export function useControllableState<T>({ value, defaultValue, onChange }: Params<T>) {
  const [internal, setInternal] = useState(defaultValue)

  const isControlled = value !== undefined
  const state = isControlled ? value : internal

  const setState = useCallback(
    (next: T) => {
      if (!isControlled) setInternal(next)
      onChange?.(next)
    },
    [isControlled, onChange],
  )

  return [state, setState] as const
}
