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

const HomeNavigation = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
    <Grid item xs>
        <Grid component={Card} container alignItems="stretch" className={classes.cards}>
          <Grid item alignItems="center" className={classes.navTitle}  xs={8} >
            <CardActionArea component={Link} to="#" classes={{root:classes.actionArea}}>
              <Typography variant="h5" color="primary">{props.title}</Typography>
            </CardActionArea>
          </Grid>
          <Grid item alignItems="center" xs={4} component={Paper} className={classes.navLogo} elevation={6} square >
            {props.logo}
          </Grid>
        </Grid>
    </Grid>
    </React.Fragment>
  )
}

export default HomeNavigation
