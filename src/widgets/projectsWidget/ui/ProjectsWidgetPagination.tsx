import { Icon } from '@/shared/ui/baseUI/icon'
import { Loader } from '@/shared/ui/baseUI/loader'
import { Overlay } from '@/shared/ui/baseUI/overlay'
import { Pagination } from '@/shared/ui/baseUI/pagination'
import { useProjectsWidgetContext } from '../model/useProjectsWidgetContext'

export const ProjectWidgetPagination = () => {
  const { meta, buildLink, isFetching, isLoading } = useProjectsWidgetContext()

  return (
    <>
      {meta && meta.totalPages > 1 && (
        <Pagination
          className="relative"
          currentPage={meta.page}
          totalPages={meta.totalPages}
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
