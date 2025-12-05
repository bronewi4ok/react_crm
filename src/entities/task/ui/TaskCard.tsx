// import { useFormatDate } from '@/shared/hooks/useFormatDate'
// import { Button } from '@/shared/ui/baseUI/button'
// import { Icon } from '@/shared/ui/baseUI/icon'
import clsx from 'clsx'
import { type TaskCardTypes } from '../model/types'

export function TaskCard({ task, className, onClick }: TaskCardTypes) {
  // const dueDate = useFormatDate(task.plannedEndDate, { format: 'short' })

  return (
    <article
      onClick={onClick}
      className={clsx(
        'rounded-xl border border-border-300 bg-light px-4 py-3 md:px-5 md:py-4 shadow-sm hover:shadow transition-colors',
        onClick && 'cursor-pointer',
        className,
      )}>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex size-10 items-center justify-center rounded-xl bg-back-100 text-secondary-500">
          <span className="text-sm">●</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-medium truncate">{task.title}</div>
          <div className="text-xs text-secondary-500 truncate">
            {task.description}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="text-right">
            <div className="font-medium">{task.subTasks.length}</div>
            <div className="text-xs text-secondary-500">Tasks</div>
          </div>

          <div className="text-right">
            <div className="font-medium">{task.status}</div>
            <div className="text-xs text-secondary-500">Budget</div>
          </div>

          <div className="text-right">
            <div className="font-medium">{task.priority}</div>
            <div className="text-xs text-secondary-500">Due date</div>
          </div>
        </div>

        {/* <div className="flex items-center gap-3">
          <Button
            aria-label="More actions"
            variant="support">
            <Icon
              className="fill-secondary-500"
              size="sm"
              name="common-dots"
            />
          </Button>
        </div> */}
      </div>
    </article>
  )
}
