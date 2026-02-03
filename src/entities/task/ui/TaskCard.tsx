// import { useFormatDate } from '@/shared/hooks/useFormatDate'
// import { Button } from '@/shared/ui/baseUI/button'
// import { Icon } from '@/shared/ui/baseUI/icon'
import clsx from 'clsx'
import { type TaskCardTypes } from '../model/types'

export function TaskCard({ task, className, onClick }: TaskCardTypes) {
  // const dueDate = useFormatDate(task.endDate, { format: 'short' })

  return (
    <article
      onClick={onClick}
      className={clsx(
        'border-frame-300 bg-light rounded-xl border px-4 py-3 shadow-sm transition-colors hover:shadow md:px-5 md:py-4',
        onClick && 'cursor-pointer',
        className,
      )}>
      <div className="flex items-center gap-4">
        <div className="bg-back-100 text-secondary-500 hidden size-10 items-center justify-center rounded-xl sm:flex">
          <span className="text-sm">●</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate font-medium">{task.title}</div>
          <div className="text-secondary-500 truncate text-xs">{task.description}</div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <div className="text-right">
            <div className="font-medium">{task.subTasks.length}</div>
            <div className="text-secondary-500 text-xs">Tasks</div>
          </div>

          <div className="text-right">
            <div className="font-medium">{task.status}</div>
            <div className="text-secondary-500 text-xs">Budget</div>
          </div>

          <div className="text-right">
            <div className="font-medium">{task.priority}</div>
            <div className="text-secondary-500 text-xs">Due date</div>
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
