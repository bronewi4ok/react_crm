import { InputControl } from './ui/InputControl'
import { InputIcon } from './ui/InputIcon'
import { InputLabel } from './ui/InputLabel'

import { InputRoot as Root } from './ui/InputRoot'
import { InputWrap } from './ui/InputWrap'

export const Input = Object.assign(Root, {
  Control: InputControl,
  Wrap: InputWrap,
  Icon: InputIcon,
  Label: InputLabel,
})
