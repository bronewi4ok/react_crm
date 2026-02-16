export function serializeQuery<T extends Record<string, unknown>>(
  state: T,
  defaults: Partial<T>,
): URLSearchParams {
  const params = new URLSearchParams()

  ;(Object.keys(state) as Array<keyof T>).forEach((key) => {
    const value = state[key]
    const defaultValue = defaults[key]

    if (Object.is(value, defaultValue)) return

    if (Array.isArray(value)) {
      value.forEach((v) => params.append(String(key), String(v)))
    } else {
      params.set(String(key), String(value))
    }
  })

  return params
}
