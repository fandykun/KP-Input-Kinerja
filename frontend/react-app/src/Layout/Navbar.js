import React, { useState, useContext }from 'react';
import { UserContext } from '../Context';
import { AuthService } from '../Services';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { AppBar, Typography, Toolbar, Menu, MenuItem, IconButton} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: theme.palette.primary.main,
  },
  brand: {
    color: theme.text.white,
    flex: 1,
  },
  navlink: {
    color: '#ffffff',
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
          <Typography className={classes.brand} variant="h5">Input Kinerja</Typography>
          <Typography color="secondary" variant="subtitle1">Selamat Datang, { user.profile.username}</Typography>
          <div>
            <IconButton className={classes.navlink} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <AccountCircle color="secondary"/>
            </IconButton>
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
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export { Navbar }
