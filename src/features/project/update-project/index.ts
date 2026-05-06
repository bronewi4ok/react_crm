import { UpdateProjectFields } from './ui/UpdateProjectFields'
import { UpdateProjectRoot as Root } from './ui/UpdateProjectRoot'
import { UpdateProjectSubmit } from './ui/UpdateProjectsSubmit'

export { useUpdateProject } from './model/use-update-project'
export * from './model/validation'
export { UpdateProjectFields } from './ui/UpdateProjectFields'
export { UpdateProjectRoot } from './ui/UpdateProjectRoot'
export { UpdateProjectSubmit } from './ui/UpdateProjectsSubmit'

export const UpdateProject = Object.assign(Root, {
  Fields: UpdateProjectFields,
  Submit: UpdateProjectSubmit,
})
