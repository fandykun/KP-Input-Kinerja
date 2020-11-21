import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthHeader } from 'Helper';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Fab, TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { AlertDialog } from 'Components';
import { ArrowBack } from '@material-ui/icons';

import SelectForm from './SelectForm'
import TextFieldForm from './TextFieldForm'
import CheckboxForm from './CheckboxForm'
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
  message: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  submit: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(3),
  },
  reset: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(3),
  },
  back: {
    marginLeft: theme.spacing(5),
  }
}));

let dropdownDepartemen = []

const dropdownTingkat = [
  {label: "Internasional", value: "Internasional"},
  {label: "Nasional", value: "Nasional"},
  {label: "Regional", value: "Regional"},
  {label: "Institut", value: "Institut"},
]

const dropdownTingkatOther = [
  {label: "Internasional Terakreditasi", value: "Internasional Terakreditasi"},
  {label: "Internasional", value: "Internasional"},
  {label: "Nasional Terakreditasi", value: "Nasional Terakreditasi"},
  {label: "Nasional", value: "Nasional"},
]


const dropdownCategory = [
  {label: "Scopus", value: "Scopus"},
]

const dropdownJenisTraining = [
  {label: "Dosen", value: "Dosen"},
  {label: "Karyawan", value: "Karyawan"},
]

const dropdownJenisPrestasi = [
  {label: "Dosen", value: "Dosen"},
  {label: "Karyawan", value: "Karyawan"},
  {label: "Mahasiswa", value: "Mahasiswa"},
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

const DetailKultam = ({classes, setFieldValue}) => {
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
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama Pemateri, jika majemuk pisahkan dengan (,)"
          name="pemateri"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          required
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
      <Grid item xs={12}>
        <TextField 
          variant="outlined" 
          type="file" 
          color="secondary" 
          autoComplete="off"
          label="Bukti"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.field}
          style={{marginTop: '12px'}}
          onChange={(event) => {
            setFieldValue("file", event.currentTarget.files[0]);
          }}
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
          label="Nama pelaku kegiatan, jika majemuk pisahkan dengan (,)"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          required
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
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Dipublish di"
          name="published_at"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="URL"
          name="url"
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
          name="tingkatOther"
          color="secondary"
          options={dropdownTingkatOther}
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
          label="Nama pelaku kegiatan, jika majemuk pisahkan dengan (,)"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          required
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
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Dipublish di"
          name="published_at"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="URL"
          name="url"
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
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Tempat"
          name="tempat"
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
          name="tingkatOther"
          color="secondary"
          options={dropdownTingkatOther}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldForm 
          required
          className={classes.field}
          variant="outlined"
          type="date"
          margin="normal"
          label="Tanggal Selesai Kegiatan"
          name="date_end"
          color="secondary"
          autoComplete="off"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
    </>
  )
}

const DetailPrestasi = ({classes, setFieldValue}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama pelaku kegiatan, jika majemuk pisahkan dengan (,)"
          name="source"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <SelectForm
          required
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
          required
          select
          className={classes.field}
          margin="normal"
          variant="outlined"
          label="Jenis"
          name="jenis"
          color="secondary"
          options={dropdownJenisPrestasi}
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
      <Grid item xs={12}>
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="URL"
          name="url"
          color="secondary"
          autoComplete="off"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          variant="outlined" 
          type="file" 
          color="secondary" 
          autoComplete="off"
          label="Bukti"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.field}
          style={{marginTop: '12px'}}
          onChange={(event) => {
            setFieldValue("file", event.currentTarget.files[0]);
          }}
        />
      </Grid>
    </>
  )
}

const DetailTraining = ({classes, setFieldValue}) => {
  return (
    <>
      <Grid item xs={12}>
        <SelectForm
          required
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
      <Grid item xs={12}>
        <SelectForm
          required
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
        <TextFieldForm 
          className={classes.bigField}
          required
          variant="outlined"
          margin="normal"
          label="Nama pelaku kegiatan, jika majemuk pisahkan dengan (,)"
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
        <TextFieldForm 
          required
          className={classes.field}
          variant="outlined"
          type="date"
          margin="normal"
          label="Tanggal Selesai Kegiatan"
          name="date_end"
          color="secondary"
          autoComplete="off"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          variant="outlined" 
          type="file" 
          color="secondary" 
          autoComplete="off"
          label="Bukti"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.field}
          style={{marginTop: '12px'}}
          onChange={(event) => {
            setFieldValue("file", event.currentTarget.files[0]);
          }}
        />
      </Grid>
    </>
  )
}

const EntryForm = ({departemen}) => {
  dropdownDepartemen = departemen
  const formRef = useRef()
  const [type, setType] = useState('Kultam')
  const [submitStatus, setSubmitStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    formRef.current.setSubmitting(false)
    setOpen(true)
  }

  const closeHandler = async () => {
    await setOpen(false)
    await new Promise(r => setTimeout(r, 500));
    setSubmitStatus('')
  }

  const disagreeHandler = () => {
    closeHandler()
  }

  const resetHandler = () => {
    const value = formRef.current.values
    formRef.current.resetForm({
      values: {
        ...initialValues,
        type: value.type,
      }
    })
  }

  const agreeHandler = async () => {
    const value = formRef.current.values
    setIsSubmitting(true)
    setSubmitStatus('')
    let data = new FormData();
    let year, scopus, pi;
    try {
      switch (value.type) {
        case "Kultam":
          data.append("topik", value.name)
          data.append("pemateri", value.pemateri)
          data.append("institusi", value.source)
          data.append("tingkat", value.tingkat)
          data.append("tanggal", value.date)
          data.append("departemen", value.departemen)
          if (value.file !== null)
            data.append("filepath", value.file)
          await axios.post(`${process.env.REACT_APP_API_URL}kuliah-tamu/`, data, {
            headers: AuthHeader({'Content-Type': 'multipart/form-data'})
          })
          setSubmitStatus('success')
          setIsSubmitting(false)
          formRef.current.resetForm({
            values: {
              ...initialValues,
              type: value.type,
            }
          })
          await new Promise(r => setTimeout(r, 1000));
          break
        case "Konferensi":
          year = parseInt(value.date)
          scopus = value.category.indexOf('Scopus') !== -1
          pi = value.tingkatOther.indexOf('Internasional') !== -1
          data.append("judul", value.name)
          data.append("departemen", value.departemen)
          data.append("author", value.source)
          data.append("published_at", value.published_at)
          data.append("url", value.url)
          data.append("tahun", year.toString())
          data.append("tingkat", value.tingkatOther)
          data.append("pi", pi)
          data.append("pn", !pi)
          data.append("scopus", scopus)
          data.append("konf_hal", value.konfhal)
          data.append("tempat", value.tempat)
          data.append("tanggal_mulai", value.date)
          data.append("tanggal_selesai", value.date_end)
          await axios.post(`${process.env.REACT_APP_API_URL}konferensi/`, data, {
            headers: AuthHeader({'Content-Type': 'multipart/form-data'})
          })
          setSubmitStatus('success')
          setIsSubmitting(false)
          formRef.current.resetForm({
            values: {
              ...initialValues,
              type: value.type,
            }
          })
          await new Promise(r => setTimeout(r, 1000));
          break
        case "Jurnal":
          year = parseInt(value.date)
          scopus = value.category.indexOf('Scopus') !== -1
          pi = value.tingkatOther.indexOf('Internasional') !== -1
          data.append("judul", value.name)
          data.append("departemen", value.departemen)
          data.append("author", value.source)
          data.append("published_at", value.published_at)
          data.append("url", value.url)
          data.append("tahun", year.toString())
          data.append("tingkat", value.tingkatOther)
          data.append("pi", pi)
          data.append("pn", !pi)
          data.append("scopus", scopus)
          data.append("jurnal_vol", value.vol)
          data.append("jurnal_no", value.no)
          await axios.post(`${process.env.REACT_APP_API_URL}jurnal/`, data, {
            headers: AuthHeader({'Content-Type': 'multipart/form-data'})
          })
          setSubmitStatus('success')
          setIsSubmitting(false)
          formRef.current.resetForm({
            values: {
              ...initialValues,
              type: value.type,
            }
          })
          await new Promise(r => setTimeout(r, 1000));
          break
        case "Prestasi":
          data.append("name", value.source)
          data.append("departemen", value.departemen)
          data.append("jenis", value.jenis)
          data.append("lomba", value.name)
          data.append("peringkat", value.rank)
          data.append("tingkat", value.tingkat)
          data.append("url", value.url)
          data.append("tanggal", value.date)
          if (value.file !== null)
            data.append("filepath", value.file)
          await axios.post(`${process.env.REACT_APP_API_URL}prestasi/`, data, {
            headers: AuthHeader({'Content-Type': 'multipart/form-data'})
          })
          setSubmitStatus('success')
          setIsSubmitting(false)
          formRef.current.resetForm({
            values: {
              ...initialValues,
              type: value.type,
            }
          })
          await new Promise(r => setTimeout(r, 1000));
          break
        case "Training":
          data.append("peserta", value.source)
          data.append("departemen", value.departemen)
          data.append("jenis", value.jenis)
          data.append("judul", value.name)
          data.append("tempat", value.tempat)
          data.append("date_start", value.date)
          data.append("date_end", value.date_end)
          if (value.file !== null)
            data.append("filepath", value.file)
          await axios.post(`${process.env.REACT_APP_API_URL}training/`, data, {
            headers: AuthHeader({'Content-Type': 'multipart/form-data'})
          })
          setSubmitStatus('success')
          setIsSubmitting(false)
          formRef.current.resetForm({
            values: {
              ...initialValues,
              type: value.type,
            }
          })
          await new Promise(r => setTimeout(r, 1000));
          break
        default:
          break
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitStatus('fail')
      await new Promise(r => setTimeout(r, 1000));
    }
    closeHandler()
  }

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
      if (dropdown[idx].value === value)  {
        const data = formRef.current.values
        formRef.current.resetForm({
          values: {
            ...initialValues,
            type: value,
            name: data.name,
            date: data.date,
          }
        })
        setType(value)
      }
    }
  }
  const initialValues = {
    type: 'Kultam',
    name: '',
    date: '',
    date_end: '',
    source: '',
    pemateri: '',
    vol: '',
    no: '',
    published_at: '', 
    url: '',
    konfhal: '',
    rank: '',
    jenis: 'Dosen',
    tempat: '',
    tingkat: 'Internasional',
    tingkatOther: 'Internasional Terakreditasi',
    departemen: 1,
    file: null,
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
      <div className={classes.back}>
        <Hidden mdDown>
          <Fab variant="extended" color="secondary" component={Link} to='/dashboard'>
            <ArrowBack />
            Dashboard
          </Fab>
        </Hidden>
        <Hidden lgUp>
          <Fab color="secondary" component={Link} to='/dashboard'>
            <ArrowBack />
          </Fab>
        </Hidden>
      </div>
      
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={openHandler}
      >
      {props => (
        <>
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
                      <DetailControl type={type} classes={classes} setFieldValue={props.setFieldValue} />
                      <Grid container justify="space-between">
                        <Grid item>
                          <Button
                            disabled={props.isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                          >
                              Submit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            disabled={props.isSubmitting}
                            variant="contained"
                            color="secondary"
                            className={classes.reset}
                            onClick={resetHandler}
                          >
                              Reset
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </div>
                </CSSTransition>
              </SwitchTransition>
            </Grid>
          </Grid>
       </Form>
      <AlertDialog 
        title="Apakah anda yakin?"
        content="Silakan periksa kembali data yang anda ajukan jika belum yakin"
        agreeText="Ya"
        disagreeText="Tidak"
        successMessage="Data Berhasil di Entry"
        failMessage="Data Gagal di Entry"
        submitMessage="Sedang Melakukan Entry Data"
        open={open} 
        openHandler={openHandler} 
        closeHandler={closeHandler} 
        agreeHandler={agreeHandler} 
        disagreeHandler={disagreeHandler}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
      />
      </>
      )}
      </Formik>
    </div>
  )
}

export { EntryForm }
