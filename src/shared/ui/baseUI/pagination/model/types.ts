import type { HTMLAttributes } from 'react'

export type PaginationTypes = {
  currentPage: number
  totalPages: number
  buildLink: (page: number) => string
  className?: string
  disabled?: boolean
}

export type PaginationBaseProps = {
  currentPage: number
  totalPages: number
  showPages?: number
  disabled?: boolean
}

export type PaginationPrevProps = HTMLAttributes<HTMLElement>
export type PaginationNextProps = HTMLAttributes<HTMLElement>

export type PaginationStateProps = {
  pages: number[]
  startPage: number
  endPage: number
} & PaginationBaseProps

export type PaginationActionProps = {
  buildLink: (page: number) => string
}

export type PaginationRootProps = PaginationActionProps &
  PaginationBaseProps &
  HTMLAttributes<HTMLElement>
