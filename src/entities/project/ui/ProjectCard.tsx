import { useFormatDate } from '@/shared/hooks/useFormatDate'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Card } from '@/shared/ui/customUI/card'
import { Link } from 'react-router-dom'
import { type ProjectCardProps } from '../model/types'

export function ProjectCard({ project, className, onClick, to }: ProjectCardProps) {
  const dueDate = useFormatDate(project.endDate, { format: 'short' })

  return (
    <Card onClick={onClick} className={className} to={to}>
      <Link
        to={to}
        className="flex flex-1 items-center gap-3"
        aria-label={`Open project ${project.name}`}>
        <Card.Header>
          <span className="text-sm">●</span>
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
          <Card.Title>{dueDate}</Card.Title>
          <Card.Text>Due date</Card.Text>
        </Card.Item>
      </Link>

      <div className="z-20 flex items-center gap-3">
        <Button size="sm" square aria-label="More actions" variant="support">
          <Icon className="fill-secondary-500" size="sm" name="common-dots" />
        </Button>
      </div>
    </Card>
  )
}
