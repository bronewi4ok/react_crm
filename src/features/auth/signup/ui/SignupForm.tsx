import { authRoutes, mainRoutes } from '@/shared/config/router'
import { Button } from '@/shared/ui/baseUI/button'
import { Checkbox, Input } from '@/shared/ui/formUI'
import { Form } from '@/shared/ui/formUI/form'
import { Controller, type SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useSignup } from '../model/useSignup'
import { useSignupRegister } from '../model/useSignupRegister'
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
    if (result.user) navigate(mainRoutes.home.navPath)
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
            <Input.Icon name="common-user" />
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
            <Input.Icon name="common-envelop" />
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
            <Input.Icon name="common-lock" />
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
            <Input.Icon name="common-lock" />
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
      <Button as={Link} to={authRoutes.login.navPath} className="col-span-6" variant="primary">
        Log in
      </Button>

      <Button className="col-span-6" disabled={isDisabled} variant="success" type="submit">
        Sign up
      </Button>

      {/* GLOBAL ERROR */}
      <Form.Error error={error} className="col-span-12" title="Сталася невідома помилка" />
    </Form>
  )
}

// import * as React from 'react'
// import { unstable_PasswordToggleField as PasswordToggleField } from 'radix-ui'
// import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'

// const PasswordToggleFieldDemo = () => (
//   <PasswordToggleField.Root>
//     <div className="bg-black-a2 flex h-[36px] flex-nowrap items-center justify-center gap-2 rounded-[4px] px-[0.75em] pr-[9px] text-white shadow-[0_0_0_1px_var(--black-a6)] focus-within:shadow-[0_0_0_2px_black] hover:shadow-[0_0_0_1px_black]">
//       <PasswordToggleField.Input className="all-[unset] selection:bg-blackA6 box-border h-[18px] text-[15px] leading-[1] text-inherit selection:text-white" />
//       <PasswordToggleField.Toggle className="all-[unset] focus-visible:outline-accent-9 box-border flex aspect-[1/1] h-[18px] items-center justify-center rounded-[0.5px] text-[15px] leading-[1] text-inherit focus-visible:outline-[2px] focus-visible:outline-offset-[2px]">
//         <PasswordToggleField.Icon visible={<EyeOpenIcon />} hidden={<EyeClosedIcon />} />
//       </PasswordToggleField.Toggle>
//     </div>
//   </PasswordToggleField.Root>
// )

// export default PasswordToggleFieldDemo
