import { createSafeContext } from '@/shared/lib'
import type { ProjectsWidgetActionsTypes, ProjectsWidgetDataTypes } from './types'

export const [useProjectsWidgetState, ProjectsWidgetStateProvider] =
  createSafeContext<ProjectsWidgetDataTypes>('ProjectsWidgetState')

export const [useProjectsWidgetAction, ProjectsWidgetActionProvider] =
  createSafeContext<ProjectsWidgetActionsTypes>('ProjectsWidgetActions')
