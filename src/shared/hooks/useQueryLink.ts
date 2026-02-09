import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

export function useQueryLink(buildSearch: (updates: Record<string, unknown>) => string) {
  const location = useLocation()

  return useCallback(
    (updates: Record<string, unknown>) => `${location.pathname}${buildSearch(updates)}`,
    [location.pathname, buildSearch],
  )
}
