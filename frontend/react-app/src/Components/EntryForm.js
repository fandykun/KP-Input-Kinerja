import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Button, Typography, Paper, Grid } from '@material-ui/core';

import SelectForm from './SelectForm'
import TextFieldForm from './TextFieldForm'
import CheckboxForm from './CheckboxForm'
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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  }
}));

const dropdownDepartemen = [
  {label: "Teknik Elektro", value: "Teknik Elektro"},
  {label: "Teknik Informatika", value: "Teknik Informatika"},
  {label: "Sistem Informasi", value: "Teknik Informasi"},
  {label: "Teknik Komputer", value: "Teknik Komputer"},
  {label: "Teknik Biomedik", value: "Teknik Biomedik"},
  {label: "Teknologi Informasi", value: "Teknologi Informasi"},
]

const dropdownTingkat = [
  {label: "Internasional", value: "Internasional"},
  {label: "Nasional", value: "Nasional"},
  {label: "Provinsi", value: "Provinsi"},
  {label: "Kota", value: "Kota"},
  {label: "Lokal", value: "Lokal"},
]

const dropdownCategory = [
  {label: "Pi", value: "Pi"},
  {label: "Pn", value: "Pn"},
  {label: "Scopus", value: "Scopus"},
]

const dropdownJenisTraining = [
  {label: "Dosen", value: "Dosen"},
  {label: "Karyawan", value: "Karyawan"},
]

const RenderCheckbox = (props) => {
  const {options, ...rest} = props
  return (
    <>
    { options.map((option) => (
        <CheckboxForm
          {...rest}
          type="checkbox"
          name="category"
          value={option.value}
          label={option.label}
          key={option.value}
        />
      ))
    }
    </>
  )
}

const DetailControl = (props) => {
  const {type} = props
  switch (type) {
    case "Kultam":
      return <DetailKultam {...props} />
    case "Jurnal":
      return <DetailJurnal {...props} />
    case "Konferensi":
      return <DetailKonferensi {...props} />
    case "Prestasi":
      return <DetailPrestasi {...props} />
    case "Training":
      return <DetailTraining {...props} />
    default:
      return null
  }
}

const DetailKultam = ({classes}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama Instansi"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Departemen"
          name="departemen"
          color="secondary"
          options={dropdownDepartemen}
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Tingkat"
          name="tingkat"
          color="secondary"
          options={dropdownTingkat}
        />
      </Grid>
    </>
  )
}

const DetailJurnal = ({classes}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama yang melakukan kegiatan"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm
          required
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Volume"
          name="vol"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm
          required
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Nomor"
          name="no"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <RenderCheckbox className={classes.field} options={dropdownCategory}/>
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Tingkat"
          name="tingkat"
          color="secondary"
          options={dropdownTingkat}
        />
      </Grid>
    </>
  )
}

const DetailKonferensi = ({classes}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama yang melakukan kegiatan"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm
          required
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Konf Hal"
          name="konfhal"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <RenderCheckbox className={classes.field} options={dropdownCategory}/>
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Tingkat"
          name="tingkat"
          color="secondary"
          options={dropdownTingkat}
        />
      </Grid>
    </>
  )
}

const DetailPrestasi = ({classes}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama yang melakukan kegiatan"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm
          required
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Peringkat"
          name="rank"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Tingkat"
          name="tingkat"
          color="secondary"
          options={dropdownTingkat}
        />
      </Grid>
    </>
  )
}

const DetailTraining = ({classes}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama yang melakukan kegiatan"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm
          required
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Tempat"
          name="tempat"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Jenis"
          name="jenis"
          color="secondary"
          options={dropdownJenisTraining}
        />
      </Grid>
    </>
  )
}

const EntryForm = () => {
  const [type, setType] = useState('Kultam')

  const dropdownJenis = [
    {label: "Kuliah Tamu", value: "Kultam"},
    {label: "Jurnal", value: "Jurnal"},
    {label: "Konferensi", value: "Konferensi"},
    {label: "Prestasi", value: "Prestasi"},
    {label: "Training", value: "Training"},
  ]


  const dropdownHandler = (name, e) => {
    const {value} = e.target
    let dropdown;
    switch (name) {
      case "Jenis":
        dropdown = dropdownJenis
        break
      default:
        break;
    }
    for (let idx in dropdown) {
      if (dropdown[idx].value === value) 
        setType(value)
    }
  }
  const submitHandler = (value) => {
    console.log(value)
  }
  const initialValues = {
    type: 'Kultam',
    name: '',
    source: '',
    vol: '',
    no: '',
    konfhal: '',
    rank: '',
    jenis: 'Dosen',
    tempat: '',
    tingkat: 'Internasional',
    departemen: 'Teknik Informatika',
    category: [],
  }
  const ValidationSchema = Yup.object().shape({
    type: Yup.string()
    .required('Jenis Tidak boleh kosong'),
    name: Yup.string()
    .required('Judul Kegiatan tidak boleh kosong'),
  })
const classes = useStyles()
  return (
    <div className={classes.root} >
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={submitHandler}
      >
      {props => (
        <Form>
          <Grid container justify="flex-start">
            <Grid item xs={4}>
              <Paper className={classes.paper} elevation={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <SelectForm
                      select
                      className={classes.field}
                      margin="normal"
                      variant="outlined"
                      label="Jenis"
                      name="type"
                      color="secondary"
                      options={dropdownJenis}
                      onClick={(e) => dropdownHandler("Jenis", e)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldForm 
                      required
                      className={classes.bigField}
                      variant="outlined"
                      margin="normal"
                      label="Judul Kegiatan"
                      name="name"
                      color="secondary"
                      autoComplete="off"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldForm 
                      required
                      className={classes.field}
                      variant="outlined"
                      type="date"
                      margin="normal"
                      label="Tanggal Kegiatan"
                      name="date"
                      color="secondary"
                      autoComplete="off"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={type}
                  timeout={500}
                  classNames="form"
                  appear
                >
                  <div>
                    <Paper className={classes.paper} elevation={6}>
                      <Typography color="primary" variant="h5" className={classes.title}>
                        Detail Kegiatan
                      </Typography>
                      <DetailControl type={type} classes={classes} />
                      <Button
                        disabled={props.isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                          {props.isSubmitting ? <CircularProgress size="1.5rem" color="primary"/> : 'Submit'}
                      </Button>
                    </Paper>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </Grid>
          </Grid>
       </Form>
      )}
      </Formik>
    </div>
  )
}

export { EntryForm }
