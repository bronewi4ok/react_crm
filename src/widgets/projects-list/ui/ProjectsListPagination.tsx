import { Icon } from '@ui/base/icon'
import { Pagination } from '@ui/base/pagination'
import { useProjectsListContext } from '../model/use-projects-list-context'

export const ProjectsListPagination = () => {
  const { meta, buildLink, isFetching } = useProjectsListContext()
  const currentPage = Number(meta?.page)
  const totalPages = Number(meta?.totalPages)
  const canPaginate = Number.isFinite(currentPage) && Number.isFinite(totalPages) && totalPages > 1

  return (
    <>
      {canPaginate && (
        <Pagination
          className="relative"
          currentPage={currentPage}
          totalPages={totalPages}
          buildLink={buildLink}
          disabled={isFetching}>
          <Pagination.Start>
            <Icon size="md" name="arrowLeft" /> Prev
          </Pagination.Start>

          <Pagination.Pages />

          <Pagination.End>
            Next <Icon size="md" name="arrowRight" />
          </Pagination.End>
        </Pagination>
      )}
    </>
  )
}
