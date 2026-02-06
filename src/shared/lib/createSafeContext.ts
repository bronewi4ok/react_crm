import { createContext, useContext } from 'react'

export function createSafeContext<T>(name: string) {
  const Context = createContext<T | null>(null)

  function useSafeContext() {
    const value = useContext(Context)
    if (!value) {
      throw new Error(`Component ${name} used outside of provider`)
    }
    return value
  }

  return [useSafeContext, Context.Provider] as const
}
