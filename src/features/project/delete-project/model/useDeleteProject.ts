import { useDeleteProjectMutation } from '@/entities/project'

export const useDeleteProject = () => {
  const [deleteProjectMutation, { isLoading, isError, isSuccess, error, reset }] =
    useDeleteProjectMutation()

  const deleteProject = async (id: string) => {
    try {
      await deleteProjectMutation(id).unwrap()
    } catch (error) {
      console.log(`Failed to remove project: ${error}`)
    }
  }

  return { deleteProject, isLoading, isError, error, isSuccess, reset }
}
