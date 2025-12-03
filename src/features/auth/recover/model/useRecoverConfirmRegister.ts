import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  recoverConfirmSchema,
  type RecoverConfirmFormTypes,
} from './validation'

const defaultValues: RecoverConfirmFormTypes = {
  newPassword: '',
  confirmNewPassword: '',
}

export const useRecoverConfirmRegister = () => {
  return useForm<RecoverConfirmFormTypes>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(recoverConfirmSchema),
    defaultValues,
  })
}
