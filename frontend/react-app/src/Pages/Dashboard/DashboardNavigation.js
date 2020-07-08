import React from 'react';
import {Link} from 'react-router-dom';
import { Typography, Paper, Grid, Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './index.css';

const useStyles = delay => makeStyles((theme) => ({
  cards: {
    height: '300px', 
    display: 'flex',
    animationDelay: delay,
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
  const classes = useStyles(delay)()
  return (
    <React.Fragment>
    <Grid item xs={12} sm={6} md={3}>
      <Grid component={Card} container className={`${classes.cards} slide-up-fade-in`} elevation={6}>
        <Grid item className={classes.navTitle}  xs={8} >
          <CardActionArea component={Link} to={href} classes={{root:classes.actionArea}}>
            <Typography variant="h5" color="inherit">{title}</Typography>
          </CardActionArea>
        </Grid>
        <Grid item xs={4} component={Paper} className={classes.navLogo} elevation={6} square >
          {logo}
        </Grid>
      </Grid>
    </Grid>
    </React.Fragment>
  )
}

export default DashboardNavigation
