import React, { useState, useContext }from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { PageContext, UserContext } from 'Context';
import { AuthService } from 'Services';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';
import { Grid, Link, AppBar, Typography, Toolbar, Menu, MenuItem, IconButton} from '@material-ui/core';
import './index.css';

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
  logoWrapper: {
    marginTop: -theme.spacing(1),
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const { user, dispatchUser } = useContext(UserContext)
  const history = useHistory()
  const {page} = useContext(PageContext)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmission = () => {
    history.push('/submission')
    setAnchorEl(null);
  }

  const handleAccount = () => {
    console.log("clicked")
    history.push('/account')
    setAnchorEl(null);
  }

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
          <Grid container>
            <Grid item xs={6} container justify="flex-start" alignItems="center">
              <div className={classes.logoWrapper} >
                <Link className={classes.brand} component={RouterLink} to="/dashboard">
                  <img className={classes.logo} src="/static/images/logoITS-white.png" alt="Brand Logo" />
                </Link>
              </div>
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={page.title}
                  timeout={500}
                  classNames="title"
                  appear
                >
                  <Typography color="inherit" variant="h6">
                    { page.title }
                  </Typography>
                </CSSTransition>
              </SwitchTransition>
            </Grid>
            <Grid item container xs={6} justify="flex-end" alignItems="center" className={classes.supportingContent} >
              <Typography align="right" color="secondary" variant="subtitle1">{ user.profile.nama}</Typography>
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
                <MenuItem onClick={handleAccount}>My account</MenuItem>
                { user.isAdmin &&
                  <MenuItem onClick={handleSubmission}>Submission</MenuItem>
                }
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export { Navbar }
