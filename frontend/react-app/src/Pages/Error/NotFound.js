import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Grid, Fab, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    backgroundImage: 'url(/static/images/bg-light.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
  },
  text: {
    marginTop: theme.spacing(12),
    fontWeight: "bold",
  },
  button: {
    marginTop: theme.spacing(5),
  }
}));

const NotFound = () => {
  const classes = useStyles()
  const [inText, setInText] = useState(false)
  const [inButton, setInButton] = useState(false)
  useEffect(() => {
    setInButton(false)
    setInText(false)
    setTimeout(() => {setInText(true)}, 500)
    setTimeout(() => {setInButton(true)}, 700)
  }, [])
  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <CSSTransition
          in={inText}
          timeout={1000}
          classNames="text"
          unmountOnExit
        >
        <Grid item>
          <Typography variant="h2" color="primary" className={classes.text}> 
            Halaman Tidak Ditemukan
          </Typography>
        </Grid>
        </CSSTransition>
        <CSSTransition
          in={inButton}
          timeout={1000}
          classNames="text"
          unmountOnExit
        >
        <Grid item>
          <Fab variant="extended" color="primary" component={Link} to='/dashboard' className={classes.button}>
            Dashboard
          </Fab>
        </Grid>
        </CSSTransition>
      </Grid>
    </div> 
  )
}

export { NotFound }
