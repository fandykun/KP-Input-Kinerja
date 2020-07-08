import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Hidden, Fab, Grid, TextField } from '@material-ui/core';
import { ArrowBack, Search } from '@material-ui/icons';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));

const PageListToolbar = (props) => {
  const classes = useToolbarStyles();
  const { search, handleSearchChange } = props;

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
            </Grid>
          </Hidden>
          <Hidden lgUp>
            <Grid item>
              <Fab color="primary">
                <ArrowBack />
              </Fab>
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
