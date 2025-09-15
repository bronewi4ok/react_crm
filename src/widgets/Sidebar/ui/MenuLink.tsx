import { Icon } from '@/shared/ui/icon'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import type { MenuLinkProps } from '../model/types'

export function MenuLink({ icon, title, path, className }: MenuLinkProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(
          className,
          'inline-flex items-center gap-7 p-3 rounded-sm text-sm font-bold',
          isActive ? 'text-dark bg-primary-50' : 'text-secondary-500',
        )
      }>
      {({ isActive }) => (
        <>
          {icon && (
            <Icon
              name={icon}
              size="lg"
              className={isActive ? 'fill-primary-500' : 'fill-current'}
            />
          )}
          <span>{title}</span>
        </>
      )}
    </NavLink>
  )
}
