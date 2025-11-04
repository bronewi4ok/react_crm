import { Wrap } from '@/shared/ui/wrap'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  )
}
