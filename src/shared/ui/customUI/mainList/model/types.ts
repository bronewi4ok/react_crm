import type { HTMLAttributes, Key, ReactNode } from 'react'

export type MainListProps<T> = {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  getKey: (item: T, index: number) => Key
  className?: string
}

export type MainListRootTypes = {
  isLoading?: string
  error?: string
} & HTMLAttributes<HTMLElement>

export type MainListItemTypes = HTMLAttributes<HTMLElement>
export type MainListLoaderTypes = HTMLAttributes<HTMLElement>
