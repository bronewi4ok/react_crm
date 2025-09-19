import type { ReactNode } from 'react'

export type SortBarProps = { children?: ReactNode }

export type SortOption<K extends string = string> = {
  key: K
  label: string
  icon?: string
  column?: `flex-${number}`
}

export type SortBarItemProps = {
  className?: string
  isAcitve?: boolean
  onClick: () => void
  option: SortOption
}
