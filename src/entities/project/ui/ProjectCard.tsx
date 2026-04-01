import { DeleteProjectMenuItem } from '@/features/project/delete-project/ui/DeleteProjectIMenuItem'
import { useFormatDate } from '@/shared/hooks'
import { Avatar } from '@/shared/ui/baseUI/avatar'
import { Button } from '@/shared/ui/baseUI/button'
import { Dropdown } from '@/shared/ui/baseUI/dropdown'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Card } from '@/shared/ui/customUI/card'
import { Link } from 'react-router-dom'
import { type ProjectCardProps } from '../model/types'

export function ProjectCard({ project, className, onClick, to }: ProjectCardProps) {
  const endDate = useFormatDate(project.endDate, { format: 'short' })

  return (
    <Card onClick={onClick} className={className} to={to}>
      <Link
        to={to}
        className="flex flex-1 items-center gap-3"
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

      <Card.Controls className="flex items-center gap-3">
        <Dropdown>
          <Dropdown.Trigger>
            <Button size="sm" square aria-label="More actions" variant="support">
              <Icon className="fill-secondary-500" size="sm" name="common-dots" />
            </Button>
          </Dropdown.Trigger>

          <Dropdown.Box>
            <Dropdown.Item title="">
              <DeleteProjectMenuItem projectId={project.id} />
            </Dropdown.Item>
            <Dropdown.Item title="">
              <DeleteProjectMenuItem projectId={project.id} />
            </Dropdown.Item>
          </Dropdown.Box>
        </Dropdown>
      </Card.Controls>
    </Card>
  )
}
