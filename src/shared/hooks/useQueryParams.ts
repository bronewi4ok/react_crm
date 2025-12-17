import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

export function useQueryParams<Shape extends z.ZodRawShape, T extends z.ZodObject<Shape>>(
  schema: T,
) {
  const [searchParams, setSearchParams] = useSearchParams()
  type Output = z.output<T>
  type Input = z.input<T>

  // 1. Дефолтні значення зі schema
  const defaultParams = useMemo<Output>(() => {
    const result = schema.safeParse({})
    return result.success ? result.data : ({} as Output)
  }, [schema])

  // 2. Парсинг URL (Read)
  const params = useMemo<Output>(() => {
    const obj = Object.fromEntries(
      Array.from(new Set(searchParams.keys())).map((key) => {
        const vals = searchParams.getAll(key)
        return [key, vals.length > 1 ? vals : vals[0]]
      }),
    )

    const res = schema.safeParse(obj as Input)
    return res.success ? res.data : defaultParams
  }, [searchParams, schema, defaultParams])

  // 3. Оновлення URL (Write)
  const setParams = useCallback(
    (updates: Partial<Output> | ((prev: Output) => Partial<Output>)) => {
      const patch = typeof updates === 'function' ? updates(params) : updates
      const nextState = { ...params, ...patch }
      const validated = schema.parse(nextState)

      setSearchParams(
        () => {
          const newParams = new URLSearchParams()

          Object.entries(validated).forEach(([key, param]) => {
            const defaultParam = defaultParams[key as keyof Output]
            if (JSON.stringify(param) === JSON.stringify(defaultParam)) return
            if (Array.isArray(param)) param.forEach((v) => newParams.append(key, String(v)))
            else newParams.set(key, String(param))
          })

          return newParams
        },
        { replace: true },
      )
    },
    [params, setSearchParams, schema, defaultParams],
  )

  return [params, setParams] as const
}
