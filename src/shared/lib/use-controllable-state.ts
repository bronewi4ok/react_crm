import { useState } from 'react'

type Params<T> = {
  value?: T
  defaultValue: T
  onValueChange?: (value: T) => void
}

export function useControllableState<T>({ value, defaultValue, onValueChange }: Params<T>) {
  const [internal, setInternal] = useState(defaultValue)

  const isControlled = value !== undefined
  const state = isControlled ? value : internal

  const setState = (next: T) => {
    if (!isControlled) setInternal(next)
    onValueChange?.(next)
  }

  return [state, setState] as const
}
