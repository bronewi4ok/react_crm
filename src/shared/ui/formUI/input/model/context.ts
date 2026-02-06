import { createSafeContext } from '@/shared/lib'
import type { InputStateTypes } from './types'

export const [useInputState, InputStateProvider] = createSafeContext<InputStateTypes>('Input')
