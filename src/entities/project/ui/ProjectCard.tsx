import { DeleteProjectMenuItem } from '@/features/project/delete-project/ui/DeleteProjectIMenuItem'
import { cn, useFormatDate } from '@shared/lib'
import { Avatar } from '@ui/base/avatar'
import { Button } from '@ui/base/button'
import { Dropdown } from '@ui/base/dropdown'
import { Icon } from '@ui/base/icon'
import { Card } from '@ui/custom/card'
import { UpdateProjectModal } from '@widgets/update-project-modal'
import { useState, type HTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import type { ProjectTypes } from '../model/schema'

// ======================================
type Props = {
  project: ProjectTypes
  // onClick?: () => void
} & HTMLAttributes<HTMLElement> &
  LinkProps

// ======================================
export const ProjectCard = (props: Props) => {
  const { project, className, to, state } = props
  const endDate = useFormatDate(project.endDate, { format: 'short' })
  const [openUpdateProject, setOpenUpdateProject] = useState(false)

  return (
    <Card className={cn('group relative', className)}>
      <Link
        to={to}
        state={state}
        className={cn('flex flex-1 items-center gap-3', 'after:absolute after:inset-0 after:z-10')}
        aria-label={`Open project ${project.name}`}>
        <Card.Header>
          <Avatar src={project.avatar} size="2xl" alt={project.name} />
        </Card.Header>

        <Card.Item>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>{project.specialization}</Card.Text>
        </Card.Item>

        <Card.Item>
          <Card.Title>{project.tasks.length}</Card.Title>
          <Card.Text>Tasks</Card.Text>
        </Card.Item>

        <Card.Item>
          <Card.Title>{project.budget}</Card.Title>
          <Card.Text>Budget</Card.Text>
        </Card.Item>

        <Card.Item>
          <Card.Title>{endDate}</Card.Title>
          <Card.Text>Due date</Card.Text>
        </Card.Item>
      </Link>

      <Card.Controls data-group="controls" className={cn('relative z-20 flex items-center gap-3')}>
        <Dropdown>
          <Dropdown.Trigger>
            <Button size="sm" square aria-label="More actions" variant="support">
              <Icon className="fill-secondary-500" size="sm" name="dots" />
            </Button>
          </Dropdown.Trigger>

          <Dropdown.Box>
            <Dropdown.Item title="">
              <DeleteProjectMenuItem projectId={project.id} />
            </Dropdown.Item>

            <Dropdown.Item title="">
              <Button square variant="support" size="sm" onClick={() => setOpenUpdateProject(true)}>
                <Icon name="edit" size="xs" />
              </Button>
            </Dropdown.Item>
          </Dropdown.Box>
        </Dropdown>
      </Card.Controls>

      <UpdateProjectModal
        id={project.id}
        open={openUpdateProject}
        onOpenChange={setOpenUpdateProject}
      />
    </Card>
  )
}
