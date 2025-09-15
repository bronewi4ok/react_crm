import type { HTMLAttributes, LiHTMLAttributes, ReactNode } from 'react'

export type MainListProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLUListElement>

export type MainListItemProps = {
  children: ReactNode
  className?: string
} & LiHTMLAttributes<HTMLLIElement>
