export type PaginationTypes = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  isLoading?: boolean
  isFetching?: boolean
  showStatus?: boolean
}
