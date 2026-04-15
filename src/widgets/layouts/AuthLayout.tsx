import { Wrap } from '@ui/custom/wrap'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  )
}
