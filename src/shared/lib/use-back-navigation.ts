import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FRONT_ROUTES } from '../routes'

const defaultPath = FRONT_ROUTES.main.HomePage.navPath

export const getBackLocation = (fallbackPath = defaultPath) => {
  const hasHistory = window.history?.state.idx > 0
  return hasHistory ? -1 : fallbackPath
}

export function useBackNavigation(fallbackPath = defaultPath) {
  const navigate = useNavigate()

  return useCallback(() => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1)
    else navigate(fallbackPath, { replace: true })
  }, [navigate, fallbackPath])
}
