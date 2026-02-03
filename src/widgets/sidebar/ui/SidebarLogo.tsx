import { mainRoutes } from '@/shared/config/router'
import { Icon } from '@/shared/ui/baseUI/icon'
import { Link } from 'react-router-dom'

export function SidebarLogo() {
  return (
    <Link
      to={mainRoutes.home.navPath}
      className="text-dark flex items-center gap-6 p-6 font-bold"
      aria-label="betaCRM logo">
      <Icon name="common-logo" size="lg" />

      <span>betaCRM</span>
    </Link>
  )
}
