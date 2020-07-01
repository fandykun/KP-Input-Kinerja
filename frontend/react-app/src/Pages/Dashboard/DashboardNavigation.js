import React from 'react';
import {Link} from 'react-router-dom';
import { Typography, Paper, Grid, Card, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cards: {
    height: '300px', 
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
    '&:hover':{
      color: theme.palette.text.white,
      backgroundColor: theme.palette.secondary.main,
    }
  },
}))

const DashboardNavigation = ({item}) => {
  const {logo, title, href} = item
  const classes = useStyles()
  return (
    <React.Fragment>
    <Grid item xs={12} sm={6} md={3}>
      <Grid component={Card} container  className={classes.cards} elevation={6}>
        <Grid item alignItems="center" className={classes.navTitle}  xs={8} >
          <CardActionArea component={Link} to={href} classes={{root:classes.actionArea}}>
            <Typography variant="h5" color="primary">{title}</Typography>
          </CardActionArea>
        </Grid>
        <Grid item alignItems="center" xs={4} component={Paper} className={classes.navLogo} elevation={6} square >
          {logo}
        </Grid>
      </Grid>
    </Grid>
    </React.Fragment>
  )
}

export default DashboardNavigation
