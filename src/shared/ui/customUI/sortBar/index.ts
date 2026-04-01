import { SortBarItem } from './ui/SortBarItem'
import { SortBarRoot as Root } from './ui/SortBarRoot'

export * from './model/types'

export const SortBar = Object.assign(Root, {
  Item: SortBarItem,
})
