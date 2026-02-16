import { useId } from 'react'
import { InputStateProvider } from '../model/context'
import type { ItemRootTypes } from '../model/types'

export function InputRoot({ error, children }: ItemRootTypes) {
  const id = useId()
  return <InputStateProvider value={{ error, id }}>{children}</InputStateProvider>
}
