import { authRoutes, mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Checkbox, Input } from '@/shared/ui/formUI'
import { FormItem } from '@/shared/ui/formUI/formItem'
import { type SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../model/useLogin'
import { useLoginRegister } from '../model/useLoginRegister'
import { type LoginFormTypes } from '../model/validation'

export function LoginForm() {
  const { login, isLoading, error } = useLogin()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useLoginRegister()

  const onSubmit: SubmitHandler<LoginFormTypes> = async (data) => {
    const result = await login(data)
    if (result.user) navigate(mainRoutes.home.navPath)
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

      <FormItem
        error={errors.rememberMe?.message}
        className="col-span-12"
        border={false}>
        <Checkbox
          title="Remember me"
          className="col-span-12"
          {...register('rememberMe')}
        />
      </FormItem>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        type="submit"
        disabled={isLoading || isSubmitting}>
        Sign in
      </Button>

      <Button
        to={authRoutes.signup.navPath}
        className="col-span-6 bg-primary-100 text-primary-500"
        disabled={isLoading || isSubmitting}>
        Sign Up
      </Button>

      {error && (
        <div className="col-span-12 text-danger-500">
          {'message' in error ? error.message : 'Невірний email або пароль'}
        </div>
      )}
    </form>
  )
}
