import type { MainListItemTypes } from '../model/types'

export const MainListItem = ({ className, children }: MainListItemTypes) => {
  return <li className={className}>{children}</li>
}
