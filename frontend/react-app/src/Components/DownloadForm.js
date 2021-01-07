import React from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { AuthHeader } from 'Helper'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Fab, Hidden, Button, Paper, Grid } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

import SelectForm from './SelectForm'
import './index.css';

const useStyles = makeStyles((theme) => ({
  root : {
    width: '100%',
    paddingTop: theme.spacing(2),
    minHeight: 'calc(100vh - 64px)',
    backgroundImage: 'url(/static/images/bg-light.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
    paddingBottom: theme.spacing(2),
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    opacity: '90%',
  },
  field: {
    width: '90%',
  },
  submit: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const DownloadForm = ({departemen, year}) => {
  const history = useHistory();
  const classes = useStyles()

  const dropdownJenis = [
    {label: "Kuliah Tamu", value: "kuliah-tamu"},
    {label: "Jurnal", value: "jurnal"},
    {label: "Konferensi", value: "konferensi"},
    {label: "Prestasi Dosen", value: "prestasi/dosen"},
    {label: "Training", value: "training"},
    {label: "Sertifikasi", value: "sertifikasi"},
  ]

  const handleBackLink = () => {
    history.goBack()
  }
  
  const initialValues = {
    jenis: 'kuliah-tamu',
    departemen: 0,
    tahun: year[year.length - 1].value,
  }
  
  const submitHandler = async (value, action) => {
    const fetchAPI = () => {
      const {jenis, tahun} = value
      const departemenName = departemen[value.departemen].label.split(' ').join('_').toLowerCase()
      const jenisName = jenis.split('-').join('_')
      console.log(value)
      const filename = `${jenisName}_${departemenName}_${tahun}`
      let URL = `${process.env.REACT_APP_API_URL}${jenis}/export?tahun=${tahun}` 
      if (value.departemen !== 0)
        URL.concat(`&departemen=${value.departemen}`)
      return axios.get(URL, {headers: AuthHeader(), responseType: 'blob'})
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${filename}.xlsx`); //or any other extension
        link.click();
      })
      .catch(error => {
        console.log(error)
      })
    }
    return await fetchAPI()
  }

  const ValidationSchema = Yup.object().shape({
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
          <Grid container justify="space-around">
            <Grid item xs={4}>
              <SelectForm
                required
                select
                className={classes.field}
                margin="normal"
                variant="outlined"
                label="Jenis"
                name="jenis"
                color="secondary"
                options={dropdownJenis}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectForm
                required
                select
                className={classes.field}
                margin="normal"
                variant="outlined"
                label="Departemen"
                name="departemen"
                color="secondary"
                options={departemen}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectForm
                required
                select
                className={classes.field}
                margin="normal"
                variant="outlined"
                label="Tahun"
                name="tahun"
                color="secondary"
                options={year}
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
                  {props.isSubmitting ? <CircularProgress size="1.75rem" color="primary"/> : 'Download'}
              </Button>
            </Grid>
          </Grid>
          </Paper>
        </Grid>
      </Grid>
      </Form>
      </>
      )}
      </Formik>
    </div>
  )
}

export { DownloadForm }
