import { usePaginationAction, usePaginationState } from './context'

export const usePagination = () => {
  const state = usePaginationState()
  const action = usePaginationAction()

  return {
    currentPage: state.currentPage,
    prevPage: state.currentPage - 1,
    nextPage: state.currentPage + 1,
    totalPages: state.totalPages,
    pages: state.pages,
    startPage: state.startPage,
    endPage: state.endPage,
    disabled: state.disabled,

    buildLink: action.buildLink,
    onPageChange: action.onPageChange,
  }
}
