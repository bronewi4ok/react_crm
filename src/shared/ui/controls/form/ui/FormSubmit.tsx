import { Button } from '@ui/base/button'
import type { FormSubmitTypes } from '../model/types'

export function FormSubmit(props: FormSubmitTypes) {
  const { variant = 'success', ...rest } = props

  return <Button {...rest} variant={variant} type="submit" />
}
