import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signupSchema, type SignupFormTypes } from './validation'

const defaultValues: SignupFormTypes = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
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
