import { useInputState } from './context'

export const useInput = () => {
  const context = useInputState()

  return {
    isError: !!context.error,
    error: context.error,
    id: context.id,
  }
}
