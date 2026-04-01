export * from './model/useAddProject'
export * from './model/useAddProjectForm'
export * from './model/validation'
import { AddProjectFields } from './ui/AddProjectFields'
import { AddProjectRoot as Root } from './ui/AddProjectRoot'
import { AddProjectSubmit } from './ui/AddProjectsSubmit'

export const AddProject = Object.assign(Root, {
  Fields: AddProjectFields,
  Submit: AddProjectSubmit,
})
