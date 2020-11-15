import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Hidden, Fab, Grid, TextField } from '@material-ui/core';
import { Loop, ArrowBack, Search } from '@material-ui/icons';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
  flip: {
    marginLeft: theme.spacing(2),
  },
}));

const FlipButton = ({type, classes}) => {
  switch (type) {
    case 'Konferensi':
      return (
      <>
        <Fab variant="extended" color="secondary" component={Link} to='/jurnal' className={classes.flip}>
          <Loop />
          Jurnal
        </Fab>
      </>
      )
    case 'Jurnal':
      return (
      <>
        <Fab variant="extended" color="secondary" component={Link} to='/konferensi' className={classes.flip}>
          <Loop />
          Konferensi
        </Fab>
      </>
      )
    default:
      return null
  }
}

const FlipIcon = ({type, classes}) => {
  switch (type) {
    case 'Konferensi':
      return (
      <>
        <Fab color="secondary" component={Link} to='/jurnal' className={classes.flip}>
          <Loop />
        </Fab>
      </>
      )
    case 'Jurnal':
      return (
      <>
        <Fab color="secondary" component={Link} to='/konferensi' className={classes.flip}>
          <Loop />
        </Fab>
      </>
      )
    default:
      return null
  }
}

const PageListToolbar = (props) => {
  const classes = useToolbarStyles();
  const { title, search, handleSearchChange } = props;

  return (
    <Toolbar
      className={classes.root}
    >
      <Grid container alignItems="flex-end">
        <Grid item container xs={6} spacing={2} justify="flex-start" alignItems="center">
          <Hidden mdDown>
            <Grid item>
              <Fab variant="extended" color="primary" component={Link} to='/dashboard'>
                <ArrowBack />
                Dashboard
              </Fab>
              <FlipButton type={title} classes={classes}/>
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item>
              <Fab color="primary" component={Link} to='/dashboard'>
                <ArrowBack />
              </Fab>
              <FlipIcon type={title} classes={classes}/>
            </Grid>
          </Hidden>
        </Grid>
        <Grid item container xs={6} justify="flex-end" alignItems="flex-end">
          <Grid item>
            <TextField label="Cari" value={search} onChange={handleSearchChange} />
          </Grid>
          <Hidden mdDown>
            <Grid item>
              <Search />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default PageListToolbar;
