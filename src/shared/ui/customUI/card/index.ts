import { CardControls } from './ui/CardControls'
import { CardHeader } from './ui/CardHeader'
import { CardItem } from './ui/CardItem'
import { CardRoot as Root } from './ui/CardRoot'
import { CardText } from './ui/CardText'
import { CardTitle } from './ui/CardTitle'

export const Card = Object.assign(Root, {
  Header: CardHeader,
  Item: CardItem,
  Title: CardTitle,
  Text: CardText,
  Controls: CardControls,
})
