import { UpdateProjectSchema, type UpdateProjectTypes } from '@entities/project'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const DEFAULT_FORM_VALUES: UpdateProjectTypes = {
  name: '',
  description: '',
  budget: undefined,
  startDate: '',
  endDate: '',
} as const

export const useUpdateProjectForm = (projectData: UpdateProjectTypes = DEFAULT_FORM_VALUES) => {
  return useForm<UpdateProjectTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(UpdateProjectSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    values: projectData || DEFAULT_FORM_VALUES,

    resetOptions: {
      keepDirtyValues: true,
    },
  })
}
