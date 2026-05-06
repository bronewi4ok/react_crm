import { SortBar } from '@ui/custom/sortbar'
import { PROJECTS_SORT_CONFIGS } from '../model/configs'

import type { ProjectsSortTypes } from '../model/types'
import { useProjectsQuery } from '../model/use-projects-query'

export function ProjectsSortBar() {
  const { sort, setSort } = useProjectsQuery()

  const handleSortChange = (field: string) => {
    setSort(field as ProjectsSortTypes)
  }

  return (
    <SortBar value={sort} onValueChange={handleSortChange}>
      <h2 className="text-sm text-zinc-500">Projects</h2>

      {PROJECTS_SORT_CONFIGS.map((item) => (
        <SortBar.Item key={item.field} field={item.field} icon={item.icon}>
          {item.label}
        </SortBar.Item>
      ))}
    </SortBar>
  )
}
