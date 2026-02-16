import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { addProjectSchema, type addProjectTypes } from './validation'

const defaultValues: addProjectTypes = {
  name: '',
  description: '',
  budget: 0,
  startDate: '',
  endDate: '',
}

export const useAddProjectRegister = () => {
  return useForm<addProjectTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(addProjectSchema),
    defaultValues,
  })
}
