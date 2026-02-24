import { useCreateProjectMutation } from '@/entities/project'
import type { AddProjectTypes } from './types'

export function useAddProject() {
  const [AddProjectMutation, { isLoading, error }] = useCreateProjectMutation()

  async function handleAddProject(credentials: AddProjectTypes) {
    const result = await AddProjectMutation(credentials).unwrap()
    return result
  }

  return { addProject: handleAddProject, isLoading, error }
}
