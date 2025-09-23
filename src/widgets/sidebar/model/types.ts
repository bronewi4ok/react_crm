import type { To } from 'react-router-dom'

export type MenuLinkProps = {
  path: To
  title: string
  icon?: string
  className?: string
}
