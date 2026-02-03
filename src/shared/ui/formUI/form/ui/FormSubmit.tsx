import { Button } from '@/shared/ui/baseUI/button'
import type { FormSubmitTypes } from '../model/types'

export function FormSubmit({ variant = 'success', ...rest }: FormSubmitTypes) {
  return <Button {...rest} variant={variant} type="submit" />
}
