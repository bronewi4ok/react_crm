import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { frontRoutes } from '../config/routes'

export function useBackNavigation(defaultFallback = frontRoutes.main.HomePage.navPath) {
  const navigate = useNavigate()

  return useCallback(
    (fallbackPath?: string | undefined) =>
      window.history?.state?.idx > 0
        ? navigate(-1)
        : navigate(fallbackPath ?? defaultFallback, { replace: true }),
    [navigate, defaultFallback],
  )
}
