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

  const defaultParams = useMemo<Output>(() => {
    const result = schema.safeParse({})
    return result.success ? result.data : ({} as Output)
  }, [schema])

  const params = useMemo<Output>(() => {
    const obj = Object.fromEntries(
      Array.from(new Set(searchParams.keys())).map((key) => {
        const values = searchParams.getAll(key)
        return [key, values.length > 1 ? values : values[0]]
      }),
    )

    const result = schema.safeParse(obj as Input)
    return result.success ? result.data : defaultParams
  }, [searchParams, schema, defaultParams])

  const setParams = useCallback(
    (updates: Partial<Output> | ((prev: Output) => Partial<Output>)) => {
      const patch = typeof updates === 'function' ? updates(params) : updates
      const nextState = schema.parse({ ...params, ...patch })

      setSearchParams(serializeQuery(nextState, defaultParams), { replace: true })
    },
    [params, schema, defaultParams, setSearchParams],
  )

  // const buildSearch = useCallback(
  //   (updates: Partial<Output>) => {
  //     const nextState = schema.parse({ ...params, ...updates })
  //     const query = serializeQuery(nextState, defaultParams).toString()
  //     return query ? `?${query}` : ''
  //   },
  //   [params, schema, defaultParams],
  // )
  const buildSearch = (updates: Partial<Output>): string => {
    const nextState = schema.parse({ ...params, ...updates })
    const query = serializeQuery(nextState, defaultParams).toString()
    // return query ? `?${query}` : ''
    return `${query}`
  }

  return [params, setParams, buildSearch] as const
}
