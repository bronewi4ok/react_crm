import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { recoverSchema } from './validation'

export type RecoverFormTypes = { email: string }
const defaultValues: RecoverFormTypes = { email: '' }

export const useRecoverRegister = () => {
  return useForm<RecoverFormTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(recoverSchema),
    defaultValues,
  })
}
