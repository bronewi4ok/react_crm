import { TasksWidget } from '@/widgets/tasksWidget/TasksWidget'

function TasksPage() {
  return (
    <div className=" bg-light rounded-2xl">
      <h1 className="text-dark text-2xl px-6.5 py-5">Projects</h1>
      <TasksWidget />
    </div>
  )
}

export default TasksPage
