import { usePaginationAction, usePaginationState } from './context'

export const usePagination = () => {
  const state = usePaginationState()
  const action = usePaginationAction()
  const onPrevPage = state.currentPage - 1
  const onNextPage = state.currentPage + 1

  return {
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    pages: state.pages,
    startPage: state.startPage,
    endPage: state.endPage,
    disabled: state.disabled,
    onPageChange: action.onPageChange,
    onPrevPage,
    onNextPage,
  }
}
