import { MainList } from '@/shared/ui/mainList'
import type { TaskProps } from '../model/types'
import { TaskListItem } from './TaskListItem'

export function TaskList({ tasks }: { tasks: TaskProps[] }) {
  return (
    <MainList
      emptyFallback={<div className="text-sm text-text-soft">Нема задач</div>}>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
        />
      ))}
    </MainList>
  )
}
