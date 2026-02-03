import { AddProject } from '@/features/addProject'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'

import { Modal } from '@/shared/ui/baseUI/modal'
import type { NewProjectModalTypes } from '../model/types'

export function NewProjectModal({ open, onOpenChange }: NewProjectModalTypes) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>Create new project!</Modal.Title>

          <Modal.Cross>
            <Icon name="common-close" size="sm" />
          </Modal.Cross>
        </Modal.Header>

        <Modal.Body className="space-y-4">
          <Modal.Description>Enter data to create new project.</Modal.Description>

          <AddProject></AddProject>
        </Modal.Body>

        <Modal.Footer>
          <Modal.Close>
            <Button variant="support">Cancel</Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
