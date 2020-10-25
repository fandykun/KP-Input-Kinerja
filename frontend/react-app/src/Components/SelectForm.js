import React from 'react'
import { useField } from 'formik'
import { MenuItem, TextField } from '@material-ui/core';

const SelectForm = (props) => {
  const [field, meta] = useField(props);
  const { options, ...rest } = props
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField {...rest} {...field} helperText={errorText} error={!!errorText}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default React.memo(SelectForm)
