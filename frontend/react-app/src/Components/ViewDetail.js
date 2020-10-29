import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, CircularProgress, Button, Typography, Paper, Grid } from '@material-ui/core';

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

const Field = ({classes, data}) => {
  return (
  <Grid container>
    { 
      data.map((field) => (
      <Grid item xs={12} key={field.label}>
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
      ))
    }
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}

const ViewDetail = ({type, id}) => {
  const classes = useStyles()
  const data = [
    { label: "Jenis", value: "Kuliah Tamu" },
    { label: "Judul Kegiatan", value: "Main Dota" },
  ]
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={6}>
            <Field classes={classes} data={data}/> 
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export { ViewDetail }
