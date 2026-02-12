import { serializeQuery } from '@/shared/lib/serializeQuery'
import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

type QueryPrimitive = string | number | boolean
type QueryValue = QueryPrimitive | readonly QueryPrimitive[]
type QueryRecord = Record<string, QueryValue>

export function useQueryParams<T extends z.ZodObject<Record<string, z.ZodTypeAny>>>(
  schema: T & { _output: QueryRecord },
) {
  const [searchParams, setSearchParams] = useSearchParams()

  type Output = z.output<T>
  type Input = z.input<T>

  const defaults = useMemo<Output>(() => {
    try {
      return schema.parse({} as Input)
    } catch {
      return {} as Output
    }
  }, [schema])

  const parseSearchParams = useCallback(
    (sp: URLSearchParams): Output => {
      const acc: Record<string, string | string[]> = {}

      for (const [key, value] of sp.entries()) {
        const prev = acc[key]
        if (prev === undefined) acc[key] = value
        else if (Array.isArray(prev)) prev.push(value)
        else acc[key] = [prev, value]
      }

      const result = schema.safeParse(acc as Input)
      return result.success ? result.data : defaults
    },
    [schema, defaults],
  )

  const params = useMemo(() => parseSearchParams(searchParams), [searchParams, parseSearchParams])

  const setParams = useCallback(
    (updates: Partial<Output> | ((prev: Output) => Partial<Output>)) => {
      setSearchParams(
        (prevSp) => {
          const prev = parseSearchParams(prevSp)
          const patch = typeof updates === 'function' ? updates(prev) : updates
          const next = schema.parse({ ...prev, ...patch })
          return serializeQuery(next, defaults)
        },
        { replace: true },
      )
    },
    [setSearchParams, parseSearchParams, schema, defaults],
  )

  const buildSearch = useCallback(
    (updates: Partial<Output>) => {
      const next = schema.parse({ ...params, ...updates })
      const query = serializeQuery(next, defaults).toString()
      return query ? `?${query}` : ''
    },
    [params, schema, defaults],
  )

  return [params, setParams, buildSearch] as const
}
