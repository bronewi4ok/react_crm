import { useCreateProjectMutation, type CreateProjectTypes } from '@entities/project'
import { toast } from 'sonner'
import { DEFAULT_FORM_VALUES, useCreateProjectForm } from './use-create-project-form'

// ======================================
export type CreateProjectOnSuccessTypes = { onSuccess?: (projectId: string) => void }

// ======================================
export function useCreateProject({ onSuccess }: CreateProjectOnSuccessTypes) {
  const [createProject, { isLoading, error: apiError }] = useCreateProjectMutation()
  const form = useCreateProjectForm()
  const isDisabled = isLoading || form.formState.isSubmitting

  async function handleFormSubmit(data: CreateProjectTypes) {
    try {
      const result = await createProject(data).unwrap()
      if (!result?.id) throw new Error('No ID returned from server')

      onSuccess?.(result.id)
      toast.success(
        result.name ? `Проєкт "${result.name}" успішно створено` : 'Проєкт успішно створено',
      )
      form.reset(DEFAULT_FORM_VALUES)
    } catch (error) {
      console.error('Failed to create project:', error)
    }
  }

  const onSubmit = form.handleSubmit(handleFormSubmit)

  return { form, onSubmit, isDisabled, apiError }
}
