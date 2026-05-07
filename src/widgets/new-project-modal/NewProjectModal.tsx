import { CreateProject } from '@features/project/create-project'
import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import { Modal } from '@ui/base/modal'
import { generatePath, useNavigate } from 'react-router-dom'

// ======================================
type Props = {
  open?: boolean
  onOpenChange?: (v: boolean) => void
}

// ======================================
export function NewProjectModal({ open, onOpenChange }: Props) {
  const navigate = useNavigate()

  const handleSubmit = (projectId: string) => {
    onOpenChange?.(false)
    navigate(generatePath(FRONT_ROUTES.main.ProjectDetailsPage.navPath, { id: projectId }))
  }

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <CreateProject onSuccess={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Create New Project</Modal.Title>

            <Modal.Cross>
              <Icon name="close" size="sm" />
            </Modal.Cross>
          </Modal.Header>

          <Modal.Body className="space-y-4">
            <Modal.Description>Enter data to create a new project.</Modal.Description>
            <CreateProject.Fields />
          </Modal.Body>

          <Modal.Footer className="justify-end gap-4">
            <Modal.Close>
              <Button variant="support" type="button" className="flex-2">
                Cancel
              </Button>
            </Modal.Close>

            <CreateProject.Submit className="flex-2">Create Project</CreateProject.Submit>
          </Modal.Footer>
        </CreateProject>
      </Modal.Content>
    </Modal>
  )
}
