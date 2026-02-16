import { Wrap } from '@/shared/ui/customUI/wrap'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <Wrap>
      <Outlet />
    </Wrap>
  )
}
