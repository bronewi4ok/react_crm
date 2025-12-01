import { authRoutes, mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Checkbox, Input } from '@/shared/ui/formUI'
import { FormItem } from '@/shared/ui/formUI/formItem'
import type { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useSignUp } from '../model/useSignup'
import { useSignupRegister } from '../model/useSignupRegister'
import type { SignupFormTypes } from '../model/validation'

export function SignupForm() {
  const { signup, isLoading, error } = useSignUp()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useSignupRegister()

  const onSubmit: SubmitHandler<SignupFormTypes> = async (data) => {
    const result = await signup(data)
    if (result.user) navigate(mainRoutes.home.navPath)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-12 gap-4">
      <FormItem
        error={errors.name?.message}
        className="col-span-12"
        title="Name">
        <Input
          type="text"
          placeholder="Start typing…"
          icon="common-user"
          error={errors.name?.message}
          {...register('name')}
        />
      </FormItem>

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
        error={errors.terms?.message}
        className="col-span-12"
        border={false}>
        <Checkbox
          title="I agree with terms & conditions"
          className="col-span-12"
          {...register('terms')}
        />
      </FormItem>

      <Button
        className="col-span-6 bg-primary-500 text-white"
        type="submit"
        disabled={isLoading || isSubmitting || !isValid}>
        Sign up
      </Button>

      <Button
        to={authRoutes.login.navPath}
        className="col-span-6 bg-primary-100 text-primary-500"
        disabled={isLoading || isSubmitting}>
        Sign in
      </Button>

      {error && (
        <div className="col-span-12 text-danger-500">
          {'message' in error ? error.message : 'Помилка реєстрації'}
        </div>
      )}
    </form>
  )
}
