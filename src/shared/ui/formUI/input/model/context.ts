import { createSafeContext } from '@/shared/hooks'
import type { InputStateTypes } from './types'

export const [useInputState, InputStateProvider] = createSafeContext<InputStateTypes>('Input')
