import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Fab, Hidden, TextField, Button, Paper, Grid } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),
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
}));

const deleteHandler = () => {
  console.log("Deleted")
}

const Field = ({classes, data}) => {
  return (
  <Grid container>
    { 
      data.map((field) => {
      if (field.label !== 'media') {
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
      } else {
        return (
          <Grid item xs={12} key={field.label}>
            <img className={classes.media} src={`${process.env.REACT_APP_MEDIA_URL}${field.value}`} alt="media"/>
          </Grid>
        )
      }
      })
    }
      <Grid item xs={12}>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  )
}

const ViewDetail = ({data, type}) => {
  const classes = useStyles()
  const backLink = type === 'konferensi' ? 'jurnal' : type;
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={7}>
          <>
            <Hidden mdDown>
              <Grid item>
                <Fab variant="extended" color="secondary" component={Link} to={`/${backLink}`} >
                  <ArrowBack />
                    Kembali
                </Fab>
              </Grid>
            </Hidden>
            <Hidden lgUp>
              <Grid item>
                <Fab color="secondary" component={Link} to={`/${backLink}`} >
                  <ArrowBack />
                </Fab>
              </Grid>
            </Hidden>
          </>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper} elevation={6}>
            <Field classes={classes} data={data}/> 
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export { ViewDetail }
