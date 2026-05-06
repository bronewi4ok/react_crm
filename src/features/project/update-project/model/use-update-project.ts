import { useGetProjectByIdQuery, useUpdateProjectMutation } from '@entities/project'
import type { UpdateProjectTypes } from '@entities/project/model/schema'
import { toast } from 'sonner'
import { DEFAULT_FORM_VALUES, useUpdateProjectForm } from './use-update-project-form'

// ======================================
export type UpdateProjectOnSuccessTypes = {
  onSuccess?: (projectId: string) => void
  id: string
}

// ======================================
export const useUpdateProject = ({ onSuccess, id }: UpdateProjectOnSuccessTypes) => {
  const { project, isProjectLoading } = useGetProjectByIdQuery(id, {
    selectFromResult: ({ data, isLoading }) => ({
      isProjectLoading: isLoading,
      project: data
        ? {
            ...data,
            startDate: data.startDate?.slice(0, 10) || '',
            endDate: data.endDate?.slice(0, 10) || '',
          }
        : undefined,
    }),
  })
  const [updateProject, { isLoading, error }] = useUpdateProjectMutation()
  const form = useUpdateProjectForm(project)
  const isDisabled = isLoading || isProjectLoading || form.formState.isSubmitting

  const handleFormSubmit = async (data: UpdateProjectTypes) => {
    try {
      const result = await updateProject({ id, ...data }).unwrap()
      if (!result?.id) throw new Error('No ID returned from server')

      onSuccess?.(result.id)
      toast.success(
        result.name ? `Проєкт "${result.name}" успішно оновлено` : 'Проєкт успішно оновлено',
      )
      form.reset(DEFAULT_FORM_VALUES)
    } catch (error) {
      console.error('Failed to update project:', error)
    }
  }

  const onSubmit = form.handleSubmit(handleFormSubmit)

  return { form, onSubmit, isDisabled, error }
}
