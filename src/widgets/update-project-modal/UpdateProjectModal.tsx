import { UpdateProject } from '@features/project/update-project'
import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import { Modal } from '@ui/base/modal'

// ======================================
type Props = {
  id: string
  open?: boolean
  onOpenChange?: (v: boolean) => void
}

//========================================
export const UpdateProjectModal = (props: Props) => {
  const { open, onOpenChange, id } = props
  const handleClose = () => onOpenChange?.(false)

  return (
    <Modal open={open} onOpenChange={handleClose}>
      <Modal.Content>
        <UpdateProject id={id} onSuccess={handleClose}>
          <Modal.Header>
            <Modal.Title>Create New Project</Modal.Title>

            <Modal.Cross>
              <Icon name="close" size="sm" />
            </Modal.Cross>
          </Modal.Header>

          <Modal.Body className="space-y-4">
            <Modal.Description>Enter data to update a new project.</Modal.Description>
            <UpdateProject.Fields />
          </Modal.Body>

          <Modal.Footer className="justify-end gap-4">
            <Modal.Close>
              <Button variant="support" className="flex-2">
                Cancel
              </Button>
            </Modal.Close>

            <UpdateProject.Submit className="flex-2">Update Project</UpdateProject.Submit>
          </Modal.Footer>
        </UpdateProject>
      </Modal.Content>
    </Modal>
  )
}
