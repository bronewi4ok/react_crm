import { useSyncExternalStore } from 'react'

export const useLocalStorage = (key: string, defaultValue?: string) => {
  const subscribe = (callback: () => void) => {
    window.addEventListener('storage', callback)
    return () => window.removeEventListener('storage', callback)
  }
  const getSnapshot = () => localStorage.getItem(key) ?? defaultValue ?? ''

  const value = useSyncExternalStore(subscribe, getSnapshot, () => defaultValue ?? '')

  const setValue = (newValue: string) => {
    localStorage.setItem(key, newValue)
    window.dispatchEvent(new Event('storage'))
  }

  return [value, setValue] as const
}
