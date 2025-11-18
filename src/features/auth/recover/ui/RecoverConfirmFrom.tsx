import { mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Input } from '@/shared/ui/formUI'
import { FormItem } from '@/shared/ui/formUI/formItem'
import { type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useRecoverConfirm } from '../model/useRecoverConfirm'
import { type LoginFormTypes } from '../model/validation'

export function LoginForm() {
  const { recoverConfirm, isLoading, error } = useRecoverConfirm()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRecoverConfirmRegister()

  const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
    const result = await recoverConfirm(data)
    if (result.user) navigate(mainRoutes.home.navPath)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 gap-4">
      <FormItem
        error={errors.password?.message}
        className="col-span-12"
        title="Password">
        <Input
          type="password"
          placeholder="Start typing…"
          icon="common-lock"
          error={errors.password?.message}
          {...register('password')}
        />
      </FormItem>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        type="submit"
        disabled={isLoading || isSubmitting}>
        Confirm
      </Button>

      {error && (
        <div className="col-span-12 text-danger-500">
          {'message' in error ? error.message : 'Невірний email або пароль'}
        </div>
      )}
    </form>
  )
}
