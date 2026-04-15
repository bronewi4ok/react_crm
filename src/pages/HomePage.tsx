import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import { Modal } from '@ui/base/modal'
import { MyDatePicker } from '@ui/controls/data-picker'

const HomePage = () => {
  return (
    <div className="space-y-3">
      <MyDatePicker />

      <Modal>
        <Modal.Trigger>
          <Button variant="support">Open Modal</Button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Hi there! Lorem ipsum dolor sit amet consecteturZ</Modal.Title>

            <Modal.Cross className="-mt-3 -mr-3">
              <Icon name="close" size="sm" />
            </Modal.Cross>
          </Modal.Header>

          <Modal.Body>
            <Modal.Description>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, temporibus.
            </Modal.Description>
          </Modal.Body>

          <Modal.Footer>
            <Modal.Close>
              <Button variant="support">Cancel</Button>
            </Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  )
}
export default HomePage
