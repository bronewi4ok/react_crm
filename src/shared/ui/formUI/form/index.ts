import { FormMessage } from './ui/FormMessage'
import { FormRoot as Root } from './ui/FormRoot'
import { FormSubmit } from './ui/FormSubmit'
import { FormField } from './ui/FromField'
import { FromGlobalError } from './ui/FromGlobalError'

export const Form = Object.assign(Root, {
  Field: FormField,
  Message: FormMessage,
  Submit: FormSubmit,
  Error: FromGlobalError,
})
