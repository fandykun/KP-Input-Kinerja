import React from 'react'
import { useField } from 'formik'
import { KeyboardDatePicker } from '@material-ui/pickers'

const DatePickerForm = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <KeyboardDatePicker {...props} {...field} helperText={errorText} error={!!errorText} />
  )
}

export default DatePickerForm
