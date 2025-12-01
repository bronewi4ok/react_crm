import { authRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Input } from '@/shared/ui/formUI'
import { FormItem } from '@/shared/ui/formUI/formItem'
import { type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecover } from '../model/useRecover'
import { useRecoverRegister } from '../model/useRecoverRegister'
import type { RecoverFormTypes } from '../model/validation'
import { mainRoutes } from '@/shared/config/router'

export function RecoverForm() {
  const { recover, isLoading, error } = useRecover()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRecoverRegister()

  const onSubmit: SubmitHandler<RecoverFormTypes> = async (data) => {
    const result = await recover(data)
    if (result.success) navigate(authRoutes.recoverSent.navPath)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 gap-4">
      <FormItem
        error={errors.email?.message}
        className="col-span-12"
        title="Email">
        <Input
          type="email"
          placeholder="Start typing…"
          icon="common-envelop"
          error={errors.email?.message}
          {...register('email')}
        />
      </FormItem>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        type="submit"
        disabled={isLoading || isSubmitting}>
        Recover
      </Button>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        to={mainRoutes.home.navPath}
        disabled={isLoading || isSubmitting}>
        Home
      </Button>

      {error && (
        <div className="col-span-12 text-danger-500">
          {'message' in error ? error.message : 'email is wrong'}
        </div>
      )}
    </form>
  )
}
