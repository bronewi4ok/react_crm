import { menuRoutes } from '@/shared/config/router/'
import { MenuLink } from './MenuLink'
import { SidebarLogo } from './SidebarLogo'

export function MainMenu() {
  return (
    <div>
      <SidebarLogo />
      <nav className="bg-light">
        <ul>
          {menuRoutes.map((route) => {
            return (
              <li
                key={route.path}
                className="flex items-center gap-4 px-5 py-2">
                <MenuLink
                  path={route.path}
                  icon={route.meta.icon}
                  title={route.meta.title}
                  className="w-full"
                />
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
