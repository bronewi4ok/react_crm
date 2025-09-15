import { MainListItem } from '@/shared/ui/mainList'
import type { TaskProps } from '../model/types'

export function TaskListItem({ task }: { task: TaskProps }) {
  return (
    <MainListItem>
      <div className="p-4 flex items-center gap-3">
        <div className="flex-1 font-medium">{task.title}</div>
      </div>
    </MainListItem>
  )
}
