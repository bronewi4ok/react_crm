import { Button } from '@/shared/ui/baseUI/button'
import { Chip } from '@/shared/ui/baseUI/chip'
import { Dropdown } from '@/shared/ui/baseUI/dropdown'
import { Icon } from '@/shared/ui/baseUI/icon'
import { NewProjectModal } from '@/widgets/NewProjectWidget'
import { useState } from 'react'

export function HeaderAddMenu() {
  const [openNewProject, setOpenNewProject] = useState(false)

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button square variant="support" aria-label="open search">
          <Icon name="common-add" size="xs" className="fill-secondary-500" />
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Box>
        <Dropdown.Item title="Add Project" onSelect={() => setOpenNewProject(true)}>
          <Chip>
            <Icon name="common-projects" />
          </Chip>
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item title="Add Task" onSelect={() => alert('OHOHOHO')}>
          <Chip>
            <Icon name="common-tasks" />
          </Chip>
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item title="Add Products" onSelect={() => alert('OHOHOHO')}>
          <Chip>
            <Icon name="common-products" />
          </Chip>
        </Dropdown.Item>
      </Dropdown.Box>

      <NewProjectModal open={openNewProject} onOpenChange={setOpenNewProject} />
    </Dropdown>
  )
}
