import { useSearchParams } from 'react-router-dom'

export type TaskFilterParams<TSortKey extends string = string> = {
  status?: TSortKey
  page?: number
  per?: number
  q?: string
}

export function useTaskFilter<TSortKey extends string = string>(
  defaultPer: number = 20,
) {
  const [searchParams, setSearchParams] = useSearchParams()
  const status = (searchParams.get('status') as TSortKey) || undefined
  const page = Number(searchParams.get('page') || '1')
  const per = Number(searchParams.get('per') || String(defaultPer))
  const q = searchParams.get('q') || undefined

  const taskFilterParams: TaskFilterParams<TSortKey> = { status, page, per, q }

  // Функція оновлення параметрів
  const setTaskFilterParams = (
    newParams: Partial<TaskFilterParams<TSortKey>>,
  ) => {
    const params = new URLSearchParams(searchParams)

    Object.entries(newParams).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        params.delete(key)
      } else {
        params.set(key, String(value))
      }
    })

    setSearchParams(params)
  }

  return { taskFilterParams, setTaskFilterParams }
}

export function TasksFilter() {
  return (
    <div>
      <h1>filter</h1>
    </div>
  )
}
