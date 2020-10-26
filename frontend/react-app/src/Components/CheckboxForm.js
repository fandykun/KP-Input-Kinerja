import React from 'react'
import { useField } from 'formik'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

const CheckboxForm = (props) => {
  const [field] = useField(props);
  const {label, ...rest} = props
  return (
      <FormGroup>
        <FormControlLabel control={<Checkbox {...rest} {...field} /> } label={label}/>
      </FormGroup>
  )
}

export default CheckboxForm
