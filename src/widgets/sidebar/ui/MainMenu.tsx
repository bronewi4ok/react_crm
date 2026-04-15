import { selectAuthUser } from '@entities/auth'
import { LogoutButton } from '@features/auth/logout'
import { Avatar } from '@ui/base/avatar'
import { useSelector } from 'react-redux'
import { menuRoutes } from '../config/routes'
import { MenuLink } from './MenuLink'
import { SidebarLogo } from './SidebarLogo'

export function MainMenu() {
  const user = useSelector(selectAuthUser)
  return (
    <>
      <SidebarLogo />

      <nav className="bg-light">
        <ul>
          {menuRoutes.map((route) => {
            return (
              <li key={route.path} className="flex items-center gap-4 px-5 py-2">
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

      <div className="mt-auto gap-4 space-y-4 p-7">
        <div className="flex items-center gap-4">
          <Avatar />
          {user && <p>{user?.name}</p>}
        </div>

        {user && <LogoutButton />}
      </div>
    </>
  )
}
