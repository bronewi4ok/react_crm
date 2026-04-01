import { AddProject } from '@/features/project/addProject'
import { frontRoutes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Modal } from '@/shared/ui/baseUI/modal'
import { generatePath, useNavigate } from 'react-router-dom'

export type NewProjectModalTypes = {
  open?: boolean
  onOpenChange?: (v: boolean) => void
}

export function NewProjectModal({ open, onOpenChange }: NewProjectModalTypes) {
  const navigate = useNavigate()

  const handleSubmit = (projectId: string) => {
    onOpenChange?.(false)
    navigate(generatePath(frontRoutes.main.ProjectDetailsPage.navPath, { id: projectId }))
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <AddProject onSuccess={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Create New Project</Modal.Title>

            <Modal.Cross>
              <Icon name="common-close" size="sm" />
            </Modal.Cross>
          </Modal.Header>

          <Modal.Body className="space-y-4">
            <Modal.Description>Enter data to create a new project.</Modal.Description>
            <AddProject.Fields />
          </Modal.Body>

          <Modal.Footer className="justify-end gap-4">
            <Modal.Close>
              <Button variant="support" className="flex-2">
                Cancel
              </Button>
            </Modal.Close>

            <AddProject.Submit className="flex-2">Create Project</AddProject.Submit>
          </Modal.Footer>
        </AddProject>
      </Modal.Content>
    </Modal>
  )
}
