import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { type ProjectCardProps } from '../model/types'

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white px-4 py-3 md:px-5 md:py-4 shadow-sm hover:shadow transition-colors">
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex size-10 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
          <span className="text-sm">●</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-medium truncate">{project.name}</div>
          <div className="text-xs text-gray-500 truncate">
            {project.specialization}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-right">
            <div className="font-medium">{project.tasks.length}</div>
            <div className="text-xs text-gray-500">Tasks</div>
          </div>

          <div className="text-right">
            <div className="font-medium">{project.budget}</div>
            <div className="text-xs text-gray-500">Budget</div>
          </div>

          <div className="text-right">
            <div className="font-medium">{project.plannedEndDate}</div>
            <div className="text-xs text-gray-500">Due date</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            aria-label="More actions"
            variant="support">
            <Icon
              className="fill-secondary-500"
              size="sm"
              name="common-dots"
            />
          </Button>
        </div>
      </div>
    </article>
  )
}
