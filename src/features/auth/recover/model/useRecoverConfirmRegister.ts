import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from './validation'

export type LoginFormTypes = {

  password: string
}
const defaultValues: LoginFormTypes = {
  email: '',
  password: '',
  rememberMe: false,
}

export const useLoginRegister = () => {
  return useForm<LoginFormTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues,
  })
}
