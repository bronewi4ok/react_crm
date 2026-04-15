import { useCreateProjectMutation } from '@entities/project'
import { toast } from 'sonner'
import { useCreateProjectForm } from './use-create-project-form'
import type { CreateProjectTypes } from './validation'

export type CreateProjectOnSuccessTypes = { onSuccess?: (projectId: string) => void }

export function useCreateProject({ onSuccess }: CreateProjectOnSuccessTypes) {
  const [createProject, { isLoading, error: apiError }] = useCreateProjectMutation()
  const form = useCreateProjectForm()
  const isDisabled = isLoading || form.formState.isSubmitting

  async function handleFormSubmit(credentials: CreateProjectTypes) {
    try {
      const result = await createProject(credentials).unwrap()

      if (result?.id) {
        onSuccess?.(result.id)
        form.reset()
        toast.success(`New Project ${result?.name}!`)
      }
    } catch (e) {
      console.error('Failed to create project:', e)
    }
  }

  return { form, onSubmit: form.handleSubmit(handleFormSubmit), isDisabled, apiError }
}
