import { useProjectsListAction, useProjectsListState } from './context'

export const useProjectsListContext = () => {
  const state = useProjectsListState()
  const actions = useProjectsListAction()

  return {
    projects: state.projects,
    hasProjects: state.projects.length > 0,
    meta: state.meta,
    isLoading: state.isLoading,
    isError: state.isError,
    isFetching: state.isFetching,
    refetch: actions.refetch,
    buildLink: (page: number) => actions.buildSearch({ page }),
  }
}
