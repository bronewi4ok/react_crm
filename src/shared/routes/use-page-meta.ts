import type { RouteMetaTypes } from '@shared/routes'
import { useMatches } from 'react-router-dom'

export function usePageMeta(): RouteMetaTypes | undefined {
  const matches = useMatches() as { handle?: { meta?: RouteMetaTypes } }[]

  for (let i = matches.length - 1; i >= 0; i--) {
    const meta = matches[i].handle?.meta
    if (meta) return meta
  }

  return undefined
}
