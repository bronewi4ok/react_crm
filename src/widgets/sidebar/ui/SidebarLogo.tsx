import { frontRoutes, getRoutePath } from '@/app/router'
import { Icon } from '@/shared/ui/icon'
import { Link } from 'react-router-dom'

export function SidebarLogo() {
  return (
    <Link
      to={getRoutePath(frontRoutes.pages.HomePage)}
      className="flex items-center gap-6 font-bold p-6 "
      aria-label="betaCRM logo">
      <Icon
        name="common-logo"
        size="lg"
        className=""
      />

      <span className="sidebar__logo-text">betaCRM</span>
    </Link>
  )
}
