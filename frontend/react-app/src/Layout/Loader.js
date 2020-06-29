import React from 'react';
import { Avatar, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  brand: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  bottomCircle: {
    color: theme.palette.grey[200],
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
  <React.Fragment>
  <div className={classes.root}>
      <CircularProgress className={classes.bottomCircle} variant="determinate" size="10rem" thickness={5} value={100}/>
  </div> 
  <div className={classes.root}>
      <CircularProgress size="10rem" thickness={5}/>
  </div> 
  <div className={classes.root}>
      <Avatar className={classes.brand} alt="Lambang ITS" src="/static/images/lambangITS.png" />
  </div> 
  </React.Fragment>
)}

export { Loader }
