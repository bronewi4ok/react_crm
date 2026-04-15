import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { recoverSchema, type RecoverFormTypes } from './validation'

const defaultValues: RecoverFormTypes = { email: '' }

export const useRecoverRegister = () => {
  return useForm<RecoverFormTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(recoverSchema),
    defaultValues,
  })
}
