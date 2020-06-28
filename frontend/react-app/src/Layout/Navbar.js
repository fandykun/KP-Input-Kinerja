import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Typography, Toolbar} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  navbar: {
    background: theme.gradientBG,
  },
  brand: {
    color: theme.text.white,
    flex: 1,
  },
  navlink: {
    color: '#ffffff',
  }
}));

const Navbar = () => {
  const classes = useStyles()
  return (
    <div>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography className={classes.brand} variant="h5">Input Kinerja</Typography>
          <Button className={classes.navlink} component={Link} to="/login">Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export { Navbar }
