import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

export type MyDatePickerTypes = {
  value?: Date
  onChange?: (date?: Date) => void
}

export function MyDatePicker({ value, onChange }: MyDatePickerTypes) {
  return <DayPicker animate mode="single" selected={value} onSelect={onChange} />
}
