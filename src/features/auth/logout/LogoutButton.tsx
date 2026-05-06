import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Icon } from '@ui/base/icon'
import { useNavigate } from 'react-router-dom'
import { useLogout } from './use-logout'

export function LogoutButton() {
  const { logoutUser } = useLogout()
  const navigate = useNavigate()
  const handleClick = async () => {
    await logoutUser()
    navigate(FRONT_ROUTES.auth.LoginPage.navPath)
  }

  return (
    <Button onClick={handleClick} square size="sm" variant="danger" aria-label="logout">
      <Icon name="logout" size="sm" />
    </Button>
  )
}
