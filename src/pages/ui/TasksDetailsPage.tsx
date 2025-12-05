import { useGetTaskByIdQuery } from '@/entities/task'
import { useParams } from 'react-router-dom'

function TasksDetailsPage() {
  const { id } = useParams()
  const {
    data: task,
    isLoading,
    isError,
  } = useGetTaskByIdQuery(id ?? '', { skip: !id })

  if (!id) {
    return <div className="p-4 text-sm text-danger-700">No project id</div>
  }
  if (isLoading) {
    return <div className="p-4 text-sm text-support-700">Loading…</div>
  }
  if (isError || !task) {
    return <div className="p-4 text-sm text-danger-700">Project not found</div>
  }

  return (
    <div className="bg-light rounded-2xl p-6">
      <h1 className="text-2xl text-dark mb-4">{task.title}</h1>
      {task.description && (
        <p className="text-sm text-secondary-700 mb-2">{task.description}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <div>
          <div className="text-xs text-secondary-500">Status</div>
          <div className="font-medium">{task.status}</div>
        </div>
        <div>
          <div className="text-xs text-secondary-500">Priority</div>
          <div className="font-medium">{task.priority}</div>
        </div>
      </div>
    </div>
  )
}

export default TasksDetailsPage
