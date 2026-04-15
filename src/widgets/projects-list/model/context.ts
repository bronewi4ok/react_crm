import { createSafeContext } from '@shared/lib'
import type { ProjectsListActionsTypes, ProjectsListDataTypes } from './types'

export const [useProjectsListState, ProjectsListStateProvider] =
  createSafeContext<ProjectsListDataTypes>('ProjectsListState')

export const [useProjectsListAction, ProjectsListActionProvider] =
  createSafeContext<ProjectsListActionsTypes>('ProjectsListActions')
