import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Modal } from '@/shared/ui/baseUI/modal'
import { MyDatePicker } from '@/shared/ui/formUI/dataPicker/ui/DataPicker'

const HomePage = () => {
  return (
    <div className="space-y-3">
      <h1>Dashboard</h1>
      <MyDatePicker />
      <Modal>
        <Modal.Trigger>
          <Button variant="support">Open Modal</Button>
        </Modal.Trigger>

        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Hi there! Lorem ipsum dolor sit amet consecteturZ</Modal.Title>

            <Modal.Cross className="-mt-3 -mr-3">
              <Icon name="common-close" size="sm" />
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
