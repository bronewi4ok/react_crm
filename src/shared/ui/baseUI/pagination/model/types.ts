import type { HTMLAttributes } from 'react'

export type PaginationTypes = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  disabled?: boolean
}

export type PaginationBaseProps = {
  currentPage: number
  totalPages: number
  showPages?: number
  disabled?: boolean
  buildLink?: (page: number) => void
}

export type PaginationRootProps = {
  onPageChange?: (page: number) => void
} & PaginationBaseProps &
  HTMLAttributes<HTMLElement>

export type PaginationPrevProps = HTMLAttributes<HTMLElement>
export type PaginationNextProps = HTMLAttributes<HTMLElement>

export type PaginationStateProps = {
  pages: number[]
  startPage: number
  endPage: number
} & PaginationBaseProps

export type PaginationActionProps = {
  onPageChange?: (page: number) => void
  buildLink?: (page: number) => void
}
