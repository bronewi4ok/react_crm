import { SortBar } from '@/shared/ui/customUI/sortBar'
import { PROJECTS_SORT_CONFIGS } from '../model/configs'
import { useProjectsQuery } from '../model/hooks'
import type { ProjectsSortTypes } from '../model/types'

export function ProjectsSortBar() {
  const { sort, setSort } = useProjectsQuery()

  const handleSortChange = (field: string) => {
    setSort(field as ProjectsSortTypes)
  }

  return (
    <SortBar value={sort} onValueChange={handleSortChange}>
      {PROJECTS_SORT_CONFIGS.map((item) => (
        <SortBar.Item key={item.field} field={item.field} icon={item.icon}>
          {item.label}
        </SortBar.Item>
      ))}
    </SortBar>
  )
}
