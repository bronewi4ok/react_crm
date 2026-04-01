import { useCreateProjectMutation } from '@/entities/project'
import { toast } from 'sonner'
import { DEFAULT_FORM_VALUES } from '../config/defaultFormValues'
import { useAddProjectForm } from './useAddProjectForm'
import type { addProjectTypes } from './validation'

export type AddProjectOnSuccessTypes = {
  onSuccess?: (projectId: string) => void
}

export function useAddProject({ onSuccess }: AddProjectOnSuccessTypes) {
  const [createProject, { isLoading, error: apiError }] = useCreateProjectMutation()
  const form = useAddProjectForm(DEFAULT_FORM_VALUES satisfies addProjectTypes)
  const isDisabled = isLoading || form.formState.isSubmitting

  async function handleFormSubmit(credentials: addProjectTypes) {
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
