import { getPagesList, getRoutePath, type frontRouteTypes } from '@/app/router'
import { MenuLink } from './MenuLink'
import { SidebarLogo } from './SidebarLogo'

function MainMenu() {
  const allowedRoutes = getPagesList().filter(
    (route: frontRouteTypes) => route.meta.isInMenu,
  )

  return (
    <div>
      <SidebarLogo />
      <nav className="bg-light">
        <ul>
          {allowedRoutes.map((route: frontRouteTypes) => {
            const path = getRoutePath(route)
            return (
              <li
                key={path}
                className="flex items-center gap-4 px-5 py-2">
                <MenuLink
                  path={path}
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

export default MainMenu
