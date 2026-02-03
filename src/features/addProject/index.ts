export * from './model/types'
export * from './model/useAddProject'
export * from './model/useAddProjectRegister'
export * from './model/validation'
import { AddProjectRoot as Root } from './ui/AddProjectRoot'
import { AddProjectSubmit } from './ui/AddProjectSubmit'

export const AddProject = Object.assign(Root, {
  Submit: AddProjectSubmit,
})
