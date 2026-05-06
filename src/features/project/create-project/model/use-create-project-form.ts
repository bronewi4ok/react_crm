import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
// import {  type UpdateProjectTypes } from './validation'
import { UpdateProjectSchema, type UpdateProjectTypes } from '@entities/project'

export const DEFAULT_FORM_VALUES: UpdateProjectTypes = {
  name: '',
  description: '',
  budget: 0,
  startDate: '',
  endDate: '',
} as const

// Отримуємо сьогоднішню дату у форматі YYYY-MM-DD
// const today = new Date().toISOString().split('T')[0];

// export const DEFAULT_FORM_VALUES: CreateProjectTypes = {
//   name: '',
//   specialization: '',
//   description: '',
//   budget: 0,
//   tasks: [],
//   clients: [],
//   taskers: [],
//   startDate: '',
//   endDate: '',
//   finishedAt: null,
//   avatar: '',
//   abbreviation: '',
// };


export const useCreateProjectForm = (defaultValues: UpdateProjectTypes = DEFAULT_FORM_VALUES) => {
  return useForm<UpdateProjectTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(UpdateProjectSchema),
    defaultValues,
  })
}
