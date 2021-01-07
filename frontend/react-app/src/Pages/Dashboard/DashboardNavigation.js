import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import { Typography, Paper, Grid, Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './index.css';

const useStyles = makeStyles((theme) => ({
  cards: {
    height: '250px', 
    display: 'flex',
  },
  navTitle: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLogo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.primary.main,
  },
  actionArea: {
    transition: 'background-color 0.3s ease',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    color: theme.palette.primary.main,
    '&:hover':{
      color: theme.palette.text.white,
      backgroundColor: theme.palette.secondary.main,
    }
  },
}))

const DashboardNavigation = ({item}) => {
  const {logo, title, href, delay} = item
  const [inProps, setInProps] = useState(false)
  const classes = useStyles()
  useEffect(() => {
    setInProps(false)
    setTimeout(() => {setInProps(true)}, delay)
  }, [delay])
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <CSSTransition
        in={inProps}
        timeout={1000}
        classNames="page"
        unmountOnExit
      >
      <div>
      <Grid component={Card} container className={classes.cards} elevation={6}>
        <Grid item className={classes.navTitle}  xs={8} >
          <CardActionArea component={Link} to={href} classes={{root:classes.actionArea}}>
            <Typography variant="h5" color="inherit">{title}</Typography>
          </CardActionArea>
        </Grid>
        <Grid item xs={4} component={Paper} className={classes.navLogo} elevation={6} square >
          {logo}
        </Grid>
      </Grid>
      </div>
      </CSSTransition>
    </Grid>
  )
}

export default DashboardNavigation
