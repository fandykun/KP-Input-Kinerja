import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { AuthHeader } from 'Helper';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Hidden, TextField, Button, Paper, Grid } from '@material-ui/core';
import { Save, ArrowBack } from '@material-ui/icons';
import { AlertDialog } from 'Components'

import TextFieldForm from './TextFieldForm'
import './index.css';

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    height: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(2),
    backgroundImage: 'url(/static/images/bg.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    opacity: '90%',
  },
  field: {
    width: '75%',
    marginLeft: theme.spacing(3),
  },
  bigField: {
    width: '90%',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  title: {
    marginLeft: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  media: {
    display: "block",
    maxWidth : '800px',
    maxHeight : '400px',
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
  }, 
  checkbox: {
    marginTop: theme.spacing(2),
    width: '75%',
    marginLeft: theme.spacing(2),
  },
}));

const Field = ({classes, data, submitHandler, props}) => {
  console.log(data)
  return (
  <Grid container>
    <Grid item xs={7}>
      <TextField
        margin="normal"
        label="Nama"
        value={data.nama}
        color="secondary"
        className={classes.field}
        InputProps={{
          readOnly: true,
        }}
      />
    </Grid>
    <Grid item xs={7}>
      <TextField
        margin="normal"
        label="Departemen"
        value={data.departemen}
        color="secondary"
        className={classes.field}
        InputProps={{
          readOnly: true,
        }}
      />
    </Grid>
    <Grid item xs={7}>
      <TextFieldForm 
        className={classes.field}
        required
        type="password"
        margin="normal"
        label="Password Lama"
        name="passwordOld"
        color="secondary"
        autoComplete="off"
      />
    </Grid>
    <Grid item xs={7}>
      <TextFieldForm 
        className={classes.field}
        required
        type="password"
        margin="normal"
        label="Password Baru"
        name="passwordNew"
        color="secondary"
        autoComplete="off"
      />
    </Grid>
    <Grid item xs={7}>
      <TextFieldForm 
        className={classes.field}
        required
        type="password"
        margin="normal"
        label="Konfirmasi Password"
        name="passwordConfirm"
        color="secondary"
        autoComplete="off"
      />
    </Grid>
    <Grid item xs={12}>
      <Button
        disabled={props.isSubmitting}
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
          <Save />
          Simpan
      </Button>
    </Grid>
  </Grid>
  )
}

const AccountForm = ({data}) => {
  const history = useHistory();
  const [openSubmit, setOpenSubmit] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const classes = useStyles()
  const openHandler = () => {
    setOpenSubmit(true)
  }

  const closeHandler = async () => {
    await setOpenSubmit(false)
    await new Promise(r => setTimeout(r, 500));
    setSubmitStatus('')
  }

  const submitHandler = async (value, {resetForm}) => {
    openHandler()
    setIsSubmitting(true)
    const data = {
      'old_password': value.passwordOld,
      'new_password': value.passwordNew,
    }
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}account/change-password/`, data, {
        headers: AuthHeader()
      })
      setIsSubmitting(false)
      setSubmitStatus('success')
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('fail')
    }
    await new Promise(r => setTimeout(r, 1000));
    resetForm()
    closeHandler()
  }

  const handleBackLink = () => {
    history.goBack()
  }
  
  const initialValues = {
    passwordOld: '',
    passwordNew: '',
    passwordConfirm: '',
  }
  const ValidationSchema = Yup.object().shape({
    passwordOld: Yup.string()
    .required('Password Lama Tidak Boleh Kosong'),
    passwordNew: Yup.string()
    .required('Password Baru Tidak Boleh Kosong')
    .min(8, 'Panjang Password Minimal 8 Karakter'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('passwordNew'), null], 'Konfirmasi Password Tidak Cocok')
  })

  return (
    <div className={classes.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={submitHandler}
      >
      {props => (
        <>
        <Form>
      <Grid container justify="center">
        <Grid item xs={7}>
          <>
            <Hidden mdDown>
              <Grid item>
                <Fab variant="extended" color="secondary" onClick={handleBackLink} >
                  <ArrowBack />
                    Kembali
                </Fab>
              </Grid>
            </Hidden>
            <Hidden lgUp>
              <Grid item>
                <Fab color="secondary" onClick={handleBackLink} >
                  <ArrowBack />
                </Fab>
              </Grid>
            </Hidden>
          </>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper} elevation={6}>
            <Field 
              classes={classes} 
              data={data} 
              submitHandler={submitHandler}
              props={props}
            /> 
          </Paper>
        </Grid>
      </Grid>
      </Form>
      <AlertDialog 
        successMessage="Data Berhasil di Simpan"
        failMessage="Data Gagal di Simpan"
        submitMessage="Sedang Melakukan Penyimpanan Data"
        open={openSubmit} 
        openHandler={openHandler} 
        closeHandler={closeHandler} 
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
      />
      </>
      )}
      </Formik>
    </div>
  )
}

export { AccountForm }
