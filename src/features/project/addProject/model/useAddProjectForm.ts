import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addProjectSchema, type addProjectTypes } from './validation'

export const useAddProjectForm = (defaultValues: addProjectTypes) => {
  return useForm<addProjectTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(addProjectSchema),
    defaultValues,
  })
}
