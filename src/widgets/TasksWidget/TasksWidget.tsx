import { TasksList, useGetTasksQuery } from '@/entities/task'
import { TasksSortBar } from '@/features/tasksSortBar'
import { tasksSortSchema } from '@/features/tasksSortBar/model/validation'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { Button } from '@/shared/ui/baseUI/button'
import { Pagination } from '@/shared/ui/baseUI/pagination'
import { EmptyFallback } from '@/shared/ui/emptyFallback'
import { ErrorFallback } from '@/shared/ui/errorFallback'
import noTasksImg from './no_tasks.svg'

export function TasksWidget() {
  const [params, setParams] = useQueryParams(tasksSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetTasksQuery(params)

  if (isError) {
    return (
      <ErrorFallback
        error={{ message: 'Failed to load projects' }}
        onRetry={refetch}
      />
    )
  }

  if (isLoading) {
    return <div className="p-4 text-support-700">Loading projects...</div>
  }

  const tasks = data?.data ?? []
  const meta = data?.meta
  const hasTasks = tasks?.length > 0

  if (!hasTasks) {
    return (
      <EmptyFallback
        image={noTasksImg}
        title="No projects found?"
        description="Create your first project to get started">
        <Button variant="primary">Add task</Button>
      </EmptyFallback>
    )
  }

  const handlePageChange = (page: number) => {
    setParams({ page })
  }

  return (
    <>
      <TasksSortBar />
      <TasksList tasks={tasks} />
      {meta && meta.totalPages > 1 && (
        <Pagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
          onPageChange={handlePageChange}
          isLoading={isLoading}
          isFetching={isFetching}
          showStatus={true}
        />
      )}
    </>
  )
}
