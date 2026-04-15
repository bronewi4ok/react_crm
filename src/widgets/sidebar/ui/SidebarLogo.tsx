import { frontRoutes } from '@shared/routes'
import { Avatar } from '@ui/base/avatar'
import { Link } from 'react-router-dom'

export function SidebarLogo() {
  return (
    <Link
      to={frontRoutes.main.HomePage.navPath}
      className="text-dark flex items-center gap-6 p-6 font-bold"
      aria-label="betaCRM logo">
      <Avatar />

      <span>betaCRM</span>
    </Link>
  )
}
