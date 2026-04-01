import { Button, type ButtonProps } from '@/shared/ui/baseUI/button'
import { toast } from 'sonner'
import { useDeleteProject } from '../model/useDeleteProject'

type DeleteProjectButtonProps = {
  projectId: string
  projectName?: string
  onSuccess?: () => void
} & ButtonProps

export const DeleteProjectButton = (props: DeleteProjectButtonProps) => {
  const { projectId, projectName, onSuccess, children, ...rest } = props
  const { deleteProject } = useDeleteProject()

  const handleRemoveProject = () => {
    deleteProject(projectId)
    toast.success(`Project ${projectName} was removed`, { className: 'bg-red' })
    onSuccess?.()
  }

  return (
    <Button variant="danger" size="sm" {...rest} onClick={() => handleRemoveProject()}>
      {children}
    </Button>
  )
}
