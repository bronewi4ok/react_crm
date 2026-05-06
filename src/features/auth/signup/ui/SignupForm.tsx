import { FRONT_ROUTES } from '@shared/routes'
import { Button } from '@ui/base/button'
import { Checkbox } from '@ui/controls/checkbox'
import { Form } from '@ui/controls/form'
import { Input } from '@ui/controls/input'
import { Controller, type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useSignup } from '../model/use-signup'
import { useSignupRegister } from '../model/use-signup-register'
import type { SignupFormTypes } from '../model/validation'

export function SignupForm() {
  const { signup, isLoading, error } = useSignup()
  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useSignupRegister()

  const onSubmit: SubmitHandler<SignupFormTypes> = async (data) => {
    const result = await signup(data)
    if (result.user) navigate(FRONT_ROUTES.main.HomePage.navPath)
  }

  const isDisabled = isLoading || isSubmitting

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 gap-4">
      {/* NAME */}
      <Form.Field className="col-span-12">
        <Input error={errors.name?.message}>
          <Input.Label>Email</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('name')}
              type="text"
              placeholder="Start typing…"
              autoComplete="username"
            />
            <Input.Icon name="user" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.name?.message} />
      </Form.Field>

      {/* EMAIL */}
      <Form.Field className="col-span-12">
        <Input error={errors.email?.message}>
          <Input.Label>Email</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('email')}
              type="email"
              placeholder="Start typing…"
              autoComplete="email"
            />
            <Input.Icon name="envelop" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.email?.message} />
      </Form.Field>

      {/* PASSWORD */}
      <Form.Field className="col-span-12">
        <Input error={errors.password?.message}>
          <Input.Label>New password</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('password')}
              type="password"
              placeholder="Start typing…"
              autoComplete="new-password"
            />
            <Input.Icon name="lock" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.password?.message} />
      </Form.Field>

      {/* CONFIRM PASSWORD */}
      <Form.Field className="col-span-12">
        <Input error={errors.confirmPassword?.message}>
          <Input.Label>Confirm new password</Input.Label>

          <Input.Wrap>
            <Input.Control
              {...register('confirmPassword')}
              type="password"
              placeholder="Start typing…"
              autoComplete="new-password"
            />
            <Input.Icon name="lock" />
          </Input.Wrap>
        </Input>

        <Form.Message message={errors.confirmPassword?.message} />
      </Form.Field>

      {/* TERMS */}
      <Form.Field className="col-span-12">
        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              title="I agree with terms & conditions"
              className="col-span-12"
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          )}
        />

        <Form.Message message={errors.terms?.message} />
      </Form.Field>

      {/* SUBMIT */}
      <Button className="col-span-6" variant="primary" asChild>
        <Link to={FRONT_ROUTES.auth.LoginPage.navPath}>Log in</Link>
      </Button>

      <Button className="col-span-6" disabled={isDisabled} variant="success" type="submit">
        Sign up
      </Button>

      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </Form>
  )
}
