import { MainListItem } from './ui/MainListItem'
import { MainListLoader } from './ui/MainListLoader'
import { MainListRoot as Root } from './ui/MainListRoot'

export const MainList = Object.assign(Root, {
  Item: MainListItem,
  Loader: MainListLoader,
})

export * from './model/types'
