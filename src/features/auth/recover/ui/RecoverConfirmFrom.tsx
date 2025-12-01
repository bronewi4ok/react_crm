import { mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Input } from '@/shared/ui/formUI'
import { FormItem } from '@/shared/ui/formUI/formItem'
import { type SubmitHandler } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useRecoverConfirm } from '../model/useRecoverConfirm'
import { useRecoverConfirmRegister } from '../model/useRecoverConfirmRegister'
import type { RecoverConfirmFormTypes } from '../model/validation'

export function RecoverConfirmForm() {
  const { recoverConfirm, isLoading, error } = useRecoverConfirm()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRecoverConfirmRegister()

  const onSubmit: SubmitHandler<RecoverConfirmFormTypes> = async (data) => {
    if (!token) return

    const payload = {
      token,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword,
    }

    const result = await recoverConfirm(payload)
    if (result.success) navigate(mainRoutes.home.navPath)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 gap-4">
      <FormItem
        error={errors.newPassword?.message}
        className="col-span-12"
        title="Password">
        <Input
          type="password"
          placeholder="Start typing…"
          icon="common-lock"
          error={errors.newPassword?.message}
          {...register('newPassword')}
        />
      </FormItem>

      <FormItem
        error={errors.confirmNewPassword?.message}
        className="col-span-12"
        title="Password">
        <Input
          type="password"
          placeholder="Start typing…"
          icon="common-lock"
          error={errors.confirmNewPassword?.message}
          {...register('confirmNewPassword')}
        />
      </FormItem>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        type="submit"
        disabled={isLoading || isSubmitting}>
        Confirm
      </Button>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        to={mainRoutes.home.navPath}
        disabled={isLoading || isSubmitting}>
        Home
      </Button>

      {error && (
        <div className="col-span-12 text-danger-500">
          {'message' in error ? error.message : 'Невірний email або пароль'}
        </div>
      )}
    </form>
  )
}
