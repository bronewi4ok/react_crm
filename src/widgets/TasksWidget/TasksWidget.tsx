import { TaskCard, useGetTasksQuery } from '@/entities/task'
import { TasksSortBar } from '@/features/tasksSortBar'
import { tasksSortSchema } from '@/features/tasksSortBar/model/validation'
import { useQueryParams } from '@/shared/hooks/useQueryParams'
import { Button } from '@/shared/ui/baseUI/button'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Pagination } from '@/shared/ui/baseUI/pagination'
import { EmptyFallback } from '@/shared/ui/customUI/emptyFallback'
import { ErrorFallback } from '@/shared/ui/customUI/errorFallback'
import { MainList } from '@/shared/ui/customUI/mainList'
import noTasksImg from './no_tasks.svg'

export function TasksWidget() {
  const [params, setParams] = useQueryParams(tasksSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetTasksQuery(params)

  if (isError) {
    return <ErrorFallback error={{ message: 'Failed to load projects' }} onRetry={refetch} />
  }

  if (isLoading) {
    return <div className="text-support-700 p-4">Loading projects...</div>
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

      <MainList className="h-full flex-1">
        {tasks.map((task) => (
          <MainList.Item key={task.id}>
            <TaskCard
              task={task}
              // to={generatePath(mainRoutes.taskDetails.navPath, { id: tasks.id })}
            />
          </MainList.Item>
        ))}
      </MainList>

      {meta && meta.totalPages > 1 && (
        <Pagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
          onPageChange={handlePageChange}
          disabled={isFetching}>
          <Pagination.Start>
            <Icon size="md" name="common-arrowLeft" /> Prev
          </Pagination.Start>
          <Pagination.Pages />
          <Pagination.End>
            Next
            <Icon size="md" name="common-arrowRight" />
          </Pagination.End>
        </Pagination>
      )}
    </>
  )
}
