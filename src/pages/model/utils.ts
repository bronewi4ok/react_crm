import type { RouteMetaTypes } from '@/shared/config/'
import { useMatches } from 'react-router-dom'

export function usePageMeta(): RouteMetaTypes | undefined {
  const matches = useMatches() as { handle?: { meta?: RouteMetaTypes } }[]
  const reversed = [...matches].reverse()
  return reversed.find((m) => m.handle?.meta)?.handle?.meta
}
