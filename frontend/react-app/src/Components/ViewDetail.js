import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { AuthHeader } from 'Helper';
import { makeStyles } from '@material-ui/core/styles';
import { FormControlLabel, Checkbox, Fab, Hidden, TextField, Button, Paper, Grid } from '@material-ui/core';
import { CheckCircle, Delete, ArrowBack } from '@material-ui/icons';
import { AlertDialog } from 'Components'

import './index.css';

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    paddingTop: theme.spacing(2),
    minHeight: 'calc(100vh - 64px)',
    backgroundImage: 'url(/static/images/bg.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
    paddingBottom: theme.spacing(2),
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
    maxWidth : '600px',
    maxHeight : '300px',
    marginTop: theme.spacing(3),
    marginLeft: "auto",
    marginRight: "auto",
  }, 
  checkbox: {
    marginTop: theme.spacing(2),
    width: '75%',
    marginLeft: theme.spacing(2),
  },
  form: {
    maxHeight: '100px',
  },
}));

const Field = ({classes, data, isAdmin, isValidated, openHandlerValidate, openHandlerDelete}) => {
  return (
  <Grid container>
    { 
      data.map((field) => {
      switch(field.form) {
        case 'text':
          return (
            <Grid item xs={6} key={field.label}>
              <TextField
                margin="normal"
                label={field.label}
                value={field.value}
                color="secondary"
                className={classes.field}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
          )
        case 'media':
          return (
            <Grid item xs={12} key={field.label}>
              { field.value !== null && field.value !== 'null' &&
                <img className={classes.media} src={`${process.env.REACT_APP_MEDIA_URL}${field.value}`} alt="media"/>
              }
            </Grid>
          )
        case 'checkbox':
          return (
            <Grid item xs={6} key={field.label}>
              <FormControlLabel className={classes.checkbox}
                control={
                <Checkbox
                  checked={field.value}
                  InputProps={{
                    readOnly: true,
                  }}
                  color="secondary"
                />
                }
                label={field.label}
              />
            </Grid>
          )
        default:
          return null
        }
      })
    }
    { isAdmin && 
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={openHandlerDelete}
        >
          <Delete/>
          Hapus
        </Button>
        { !isValidated &&
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={openHandlerValidate}
        >
          <CheckCircle/>
          Validasi
        </Button>
        }
      </Grid>
    }
    </Grid>
  )
}

const ViewDetail = ({data, type, id, isAdmin, isValidated, setIsValidated}) => {
  const history = useHistory();
  const [openValidate, setOpenValidate] = useState(false)
  const [isSubmittingValidate, setIsSubmittingValidate] = useState(false)
  const [submitStatusValidate, setSubmitStatusValidate] = useState('')
  const [openDelete, setOpenDelete] = useState(false)
  const [isSubmittingDelete, setIsSubmittingDelete] = useState(false)
  const [submitStatusDelete, setSubmitStatusDelete] = useState('')
  const classes = useStyles()
  const openHandlerValidate = () => {
    setOpenValidate(true)
  }

  const openHandlerDelete = () => {
    setOpenDelete(true)
  }

  const closeHandlerValidate = async () => {
    await setOpenValidate(false)
    await new Promise(r => setTimeout(r, 500));
    setSubmitStatusValidate('')
  }

  const closeHandlerDelete = async () => {
    await setOpenDelete(false)
    await new Promise(r => setTimeout(r, 500));
    setSubmitStatusDelete('')
  }

  const agreeValidateHandler = async () => {
    setIsSubmittingValidate(true)
    try {
      const apiType = type === 'kultam' ? 'kuliah-tamu' : type === 'prestasi' ? 'prestasi/dosen' : type;
      await axios.post(`${process.env.REACT_APP_API_URL}${apiType}/${id}/validate`, {}, {
        headers: AuthHeader()
      })
      setIsValidated(true)
      setIsSubmittingValidate(false)
      setSubmitStatusValidate('success')
    } catch (error) {
      setIsSubmittingValidate(false)
      setSubmitStatusValidate('fail')
    }
    await new Promise(r => setTimeout(r, 1000));
    closeHandlerValidate()
  }

  const agreeDeleteHandler = async () => {
    setIsSubmittingDelete(true)
    try {
      const apiType = type === 'kultam' ? 'kuliah-tamu' : type === 'prestasi' ? 'prestasi/dosen' : type;
      await axios.delete(`${process.env.REACT_APP_API_URL}${apiType}/${id}`, {
        headers: AuthHeader()
      })
      await setIsSubmittingDelete(false)
      await setSubmitStatusDelete('success')
      await new Promise(r => setTimeout(r, 1000));
      history.goBack()

    } catch (error) {
      setIsSubmittingDelete(false)
      setSubmitStatusDelete('fail')
      await new Promise(r => setTimeout(r, 1000));
    }
    closeHandlerDelete()
  }

  const disagreeValidateHandler = () => {
    closeHandlerValidate()
  }

  const disagreeDeleteHandler = () => {
    closeHandlerDelete()
  }

  const handleBackLink = () => {
    history.goBack()
  }

  return (
    <div className={classes.root}>
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
              isAdmin={isAdmin} 
              isValidated={isValidated} 
              openHandlerValidate={openHandlerValidate}
              openHandlerDelete={openHandlerDelete}
            /> 
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <AlertDialog 
            title="Apakah anda yakin?"
            content="Silakan periksa kembali data yang anda ajukan jika belum yakin"
            agreeText="Ya"
            disagreeText="Tidak"
            successMessage="Data Berhasil di Validasi"
            failMessage="Data Gagal di Validasi"
            submitMessage="Sedang Melakukan Validasi Data"
            open={openValidate} 
            openHandler={openHandlerValidate} 
            closeHandler={closeHandlerValidate} 
            agreeHandler={agreeValidateHandler} 
            disagreeHandler={disagreeValidateHandler}
            isSubmitting={isSubmittingValidate}
            submitStatus={submitStatusValidate}
          />
          <AlertDialog 
            title="Apakah anda yakin?"
            content="Silakan periksa kembali data yang anda ajukan jika belum yakin"
            agreeText="Ya"
            disagreeText="Tidak"
            successMessage="Data Berhasil di Hapus"
            failMessage="Data Gagal di Hapus"
            submitMessage="Sedang Melakukan Peghapusan Data"
            open={openDelete} 
            openHandler={openHandlerDelete} 
            closeHandler={closeHandlerDelete} 
            agreeHandler={agreeDeleteHandler} 
            disagreeHandler={disagreeDeleteHandler}
            isSubmitting={isSubmittingDelete}
            submitStatus={submitStatusDelete}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export { ViewDetail }
