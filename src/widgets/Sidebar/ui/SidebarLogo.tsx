import { mainRoutes } from '@/shared/config/router'
import { Icon } from '@/shared/ui/icon'
import { Link } from 'react-router-dom'

export function SidebarLogo() {
  return (
    <Link
      to={mainRoutes.home.navPath}
      className="flex items-center gap-6 font-bold p-6 "
      aria-label="betaCRM logo">
      <Icon
        name="common-logo"
        size="lg"
      />

      <span>betaCRM</span>
    </Link>
  )
}
