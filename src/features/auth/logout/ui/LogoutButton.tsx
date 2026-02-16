import { frontRoutes } from '@/shared/config/routes'
import { Button } from '@/shared/ui/baseUI/button'
import { useNavigate } from 'react-router-dom'
import { useLogout } from '../model/useLogout'

export function LogoutButton() {
  const { logoutUser } = useLogout()
  const navigate = useNavigate()
  const handleClick = async () => {
    await logoutUser()
    navigate(frontRoutes.auth.LoginPage.navPath)
  }
  return <Button onClick={handleClick}>Logout</Button>
}
