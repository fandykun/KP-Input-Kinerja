import React, { useState, useContext }from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../Context';
import { AuthService } from '../Services';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { Grid, Link, AppBar, Typography, Toolbar, Menu, MenuItem, IconButton} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: theme.palette.primary.main,
  },
  brand: {
    color: theme.text.white,
  },
  navlink: {
    color: '#ffffff',
  },
  logo: {
    maxHeight: '60px',
  },
  supportingContent: {
  },
}));

const Navbar = () => {
  const { user, dispatchUser } = useContext(UserContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    AuthService.logout()
    dispatchUser({
      type: 'LOGIN_FAILURE',
    })
  };

  const classes = useStyles()

  return (
    <div>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Link className={classes.brand} component={RouterLink} to="/">
            <img className={classes.logo} src="/static/images/logoITS-white.png" alt="Brand Logo" />
          </Link>
          <Grid container spacing={1} justify="flex-end" alignItems="center" className={classes.supportingContent} >
            <Grid item xs>
            </Grid>
            <Grid item xs={3} alignItems="flex-end">
              <Typography align="right" color="secondary" variant="subtitle1">Selamat Datang, { user.profile.username}</Typography>
            </Grid>
            <Grid item xs={0}>
              <IconButton className={classes.navlink} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircle color="secondary"/>
              </IconButton>
            </Grid>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export { Navbar }
