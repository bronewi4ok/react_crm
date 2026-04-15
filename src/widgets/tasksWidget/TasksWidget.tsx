import { TaskCard, useGetTasksQuery } from '@entities/task'
import { TasksSortBar } from '@features/tasks/sort-tasks'
import { tasksSortSchema } from '@features/tasks/sort-tasks/model/validation'
import { useQueryParams } from '@shared/query-state'
import { Icon } from '@ui/base/icon'
import { Loader } from '@ui/base/loader'
import { Overlay } from '@ui/base/overlay'
import { Pagination } from '@ui/base/pagination'
import { ErrorFallback } from '@ui/custom/error-fallback'
import { MainList } from '@ui/custom/main-list'

export function TasksWidget() {
  const { params, buildSearch } = useQueryParams(tasksSortSchema)
  const { data, isLoading, isError, isFetching, refetch } = useGetTasksQuery(params)

  if (isError) {
    return <ErrorFallback error={{ message: 'Failed to load projects' }} onRetry={refetch} />
  }

  if (isLoading) {
    return <div className="text-support-700 p-4">Loading projects...</div>
  }

  const tasks = data?.data ?? []
  const meta = data?.meta

  const buildLink = (page: number) => buildSearch({ page })

  return (
    <>
      <TasksSortBar />

      <MainList className="h-full flex-1">
        {tasks.map((task) => (
          <MainList.Item key={task.id}>
            <TaskCard
              task={task}
              // to={generatePath(frontRoutes.main.TasksDetailsPage.navPath, { id: tasks.id })}
            />
          </MainList.Item>
        ))}
      </MainList>

      {meta && meta.totalPages > 1 && (
        <Pagination
          className="relative"
          currentPage={meta.page}
          totalPages={meta.totalPages}
          buildLink={buildLink}
          disabled={isFetching}>
          <Pagination.Start>
            <Icon size="md" name="arrowLeft" /> Prev
          </Pagination.Start>

          <Pagination.Pages />

          <Pagination.End>
            Next
            <Icon size="md" name="arrowRight" />
          </Pagination.End>

          {isFetching && !isLoading && (
            <Overlay className="absolute h-full w-full">
              <Loader />
            </Overlay>
          )}
        </Pagination>
      )}
    </>
  )
}
