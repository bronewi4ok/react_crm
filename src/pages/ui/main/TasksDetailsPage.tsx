import { useGetTaskByIdQuery } from '@/entities/task'
import { useParams } from 'react-router-dom'

const TasksDetailsPage = () => {
  const { id } = useParams()
  const { data: task, isLoading, isError } = useGetTaskByIdQuery(id ?? '', { skip: !id })

  if (!id) {
    return <div className="text-danger-700 p-4 text-sm">No project id</div>
  }
  if (isLoading) {
    return <div className="text-support-700 p-4 text-sm">Loading…</div>
  }
  if (isError || !task) {
    return <div className="text-danger-700 p-4 text-sm">Project not found</div>
  }

  return (
    <div className="bg-light rounded-2xl p-6">
      <h1 className="text-dark mb-4 text-2xl">{task.title}</h1>
      {task.description && <p className="text-secondary-700 mb-2 text-sm">{task.description}</p>}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <div className="text-secondary-500 text-xs">Status</div>
          <div className="font-medium">{task.status}</div>
        </div>
        <div>
          <div className="text-secondary-500 text-xs">Priority</div>
          <div className="font-medium">{task.priority}</div>
        </div>
      </div>
    </div>
  )
}

export default TasksDetailsPage
