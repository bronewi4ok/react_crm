import { Icon } from '@/shared/ui/baseUI/icon'
import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'
import { Pagination } from '@/shared/ui/baseUI/pagination'
import { useProjectsWidgetContext } from '../model/useProjectsWidgetContext'

export const ProjectWidgetPagination = () => {
  const { meta, buildLink, isFetching, isLoading } = useProjectsWidgetContext()
  const currentPage = Number(meta?.page)
  const totalPages = Number(meta?.totalPages)
  const canPaginate =
    Number.isFinite(currentPage) && Number.isFinite(totalPages) && totalPages > 1

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
            <Icon size="md" name="common-arrowLeft" /> Prev
          </Pagination.Start>

          <Pagination.Pages />

          <Pagination.End>
            Next <Icon size="md" name="common-arrowRight" />
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
