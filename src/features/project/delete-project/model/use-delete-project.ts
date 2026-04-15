import { useDeleteProjectMutation } from '@entities/project'

export const useDeleteProject = () => {
  const [deleteProjectMutation, { ...states }] = useDeleteProjectMutation()
  const deleteProject = async (id: string) => await deleteProjectMutation(id).unwrap()

  return { deleteProject, ...states }
}
