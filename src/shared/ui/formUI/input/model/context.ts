import { createSafeContext } from '@/shared/libs'
import type { InputStateTypes } from './types'

export const [useInputState, InputStateProvider] = createSafeContext<InputStateTypes>('Input')
