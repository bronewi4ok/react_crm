import { mainRoutes } from '@/shared/config/router'
import { MainList } from '@/shared/ui/customUI/mainList'
import { generatePath, useNavigate } from 'react-router-dom'
import type { TaskTypes } from '../model/types'
import { TaskCard } from './TaskCard'

export function TasksList({ tasks }: { tasks: TaskTypes[] }) {
  const navigate = useNavigate()

  return (
    <MainList
      items={tasks}
      getKey={(project) => project.id}
      renderItem={(item) =>
        typeof item === 'string' ? (
          <div className="text-support-700 p-3 text-xs">Updating…</div>
        ) : (
          <TaskCard
            task={item}
            onClick={() => navigate(generatePath(mainRoutes.taskDetails.navPath, { id: item.id }))}
          />
        )
      }
    />
  )
}
