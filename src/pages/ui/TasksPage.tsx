import { TasksWidget } from '@/widgets/tasksWidget/TasksWidget'

const TasksPage = () => {
  return (
    <div className="bg-light rounded-2xl">
      <h1 className="text-dark px-6.5 py-5 text-2xl">Tasks</h1>
      <TasksWidget />
    </div>
  )
}

export default TasksPage
