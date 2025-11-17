import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signupSchema } from './validation'

export type SignupFormTypes = {
  name: string
  email: string
  password: string
  terms: boolean
}

const defaultValues: SignupFormTypes = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

export const useSignupRegister = () => {
  return useForm<SignupFormTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(signupSchema),
    defaultValues,
  })
}
