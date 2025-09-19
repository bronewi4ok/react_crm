import { useAppDispatch, useAppSelector } from '@/app/store'
import { SortBar, SortBarItem } from '@/shared/ui/sortBar'
import { selectProjectsSort } from '../model/selectors'
import { toggleProjectsSort } from '../model/slices'
import { sortOptions, type SortKey } from '../model/types'

export function ProjectsSortBar() {
  const dispatch = useAppDispatch()
  const sortState = useAppSelector(selectProjectsSort)

  const handleClick = (key: SortKey) => {
    dispatch(toggleProjectsSort(key))
  }

  return (
    <SortBar>
      {sortOptions.map((option) => (
        <SortBarItem
          key={option.key}
          option={option}
          onClick={() => handleClick(option.key)}
          isAcitve={sortState[option.key] !== ''}
        />
      ))}
    </SortBar>
  )
}
