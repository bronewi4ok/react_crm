import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { CreateProjectSchema, type CreateProjectTypes } from './validation'

export const DEFAULT_FORM_VALUES: CreateProjectTypes = {
  name: '',
  description: '',
  budget: 0,
  startDate: '',
  endDate: '',
} as const

export const useCreateProjectForm = (defaultValues: CreateProjectTypes = DEFAULT_FORM_VALUES) => {
  return useForm<CreateProjectTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(CreateProjectSchema),
    defaultValues,
  })
}
