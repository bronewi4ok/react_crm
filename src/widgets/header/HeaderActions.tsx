import { Button } from '@ui/base/button'
import { Chip } from '@ui/base/chip'
import { Dropdown } from '@ui/base/dropdown'
import { Icon } from '@ui/base/icon'
import { NewProjectModal } from '@widgets/new-project-modal'

import { useState } from 'react'

export function HeaderActions() {
  const [openNewProject, setOpenNewProject] = useState(false)

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button square variant="support" aria-label="open search">
          <Icon name="add" size="xs" className="fill-secondary-500" />
        </Button>
      </Dropdown.Trigger>

      <Dropdown.Box>
        <Dropdown.Item title="Add Project" onSelect={() => setOpenNewProject(true)}>
          <Chip>
            <Icon name="projects" />
          </Chip>
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item title="Add Task" onSelect={() => alert('OHOHOHO')}>
          <Chip>
            <Icon name="tasks" />
          </Chip>
        </Dropdown.Item>

        <Dropdown.Separator />

        <Dropdown.Item title="Add Products" onSelect={() => alert('OHOHOHO')}>
          <Chip>
            <Icon name="products" />
          </Chip>
        </Dropdown.Item>
      </Dropdown.Box>

      <NewProjectModal open={openNewProject} onOpenChange={setOpenNewProject} />
    </Dropdown>
  )
}
