import type { Key, ReactNode } from 'react'

export type MainListProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  getKey: (item: T, index: number) => Key
  className?: string
}
