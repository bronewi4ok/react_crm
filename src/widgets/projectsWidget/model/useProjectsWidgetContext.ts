import { useProjectsWidgetAction, useProjectsWidgetState } from './context'

export const useProjectsWidgetContext = () => {
  const state = useProjectsWidgetState()
  const actions = useProjectsWidgetAction()

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
