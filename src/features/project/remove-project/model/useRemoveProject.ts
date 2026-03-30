import { useDeleteProjectMutation } from '@/entities/project'

export const useRemoveProject = () => {
  const [deleteProject, { isLoading }] = useDeleteProjectMutation()

  const removeProject = async (id: string) => {
    try {
      await deleteProject(id).unwrap()
    } catch (error) {
      console.log(`Failed to remove project: ${error}`)
    }
  }

  return { removeProject, isLoading }
}
