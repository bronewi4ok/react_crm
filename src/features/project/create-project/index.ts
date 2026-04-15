export * from './model/use-create-project'
export * from './model/use-create-project-form'
export * from './model/validation'
import { CreateProjectFields } from './ui/CreateProjectFields'
import { CreateProjectRoot as Root } from './ui/CreateProjectRoot'
import { CreateProjectSubmit } from './ui/CreateProjectsSubmit'

export const CreateProject = Object.assign(Root, {
  Fields: CreateProjectFields,
  Submit: CreateProjectSubmit,
})
