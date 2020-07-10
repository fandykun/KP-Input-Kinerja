import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Badge, Grid, Typography } from '@material-ui/core';
import { Business, Event } from '@material-ui/icons';

import PageListToolbar from './PageListToolbar';
import PageListHead from './PageListHead';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 64px)',
    paddingTop: theme.spacing(2),
    backgroundImage: 'url(/static/images/bg-light.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableContainer: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tableRow: {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: "rgba(255, 196, 21, 0.3) !important",
    }
  }
}));

const StyledName = ({ name, company, date }) => {
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]
  const days = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ]
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth()
  const numDate = d.getDate()
  const day = d.getDay()
  const fullDate = `${days[day]}, ${numDate} ${months[month]}`
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Badge badgeContent={year} max={999999} color="secondary" component="div"/>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="primary">
            { name }
          </Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center">
          <Grid item container lg={3} xs={5}>
            <Grid item>
              <Event />
            </Grid>
            <Grid item>
              <Typography variant="caption" component="div" style={{margin:'4px'}}>
                { fullDate }
              </Typography>
            </Grid>
          </Grid>
          <Grid item container lg={9} xs={7}>
            <Grid item>
              <Business />
            </Grid>
            <Grid item>
              <Typography variant="caption" component="div" style={{margin:'4px'}}>
                { company }
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

const PageList = ({title, rows, headCells}) => {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('')
  const rowsPerPage = 5

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filterSearch = (data) => {
    return data.filter(item => {
      if (search === null || search === '')
        return true;
      else {
        for (const value of Object.entries(item)) {
          if (value.toString().toLowerCase().includes(search.toString().toLowerCase()))
            return true;
        }
        return false;
      }
    })
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={8} >
          <PageListToolbar title={title} search={search} handleSearchChange={handleSearchChange}/>
          <Paper className={classes.paper} elevation={5}>
            <TableContainer className={classes.tableContainer} >
              <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
              >
                <PageListHead
                  headCells={headCells}
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(filterSearch(rows), getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {

                      return (
                        <TableRow
                          classes={{hover: classes.tableRow, root:classes.tableRowHover}}
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                          component={Link}
                          to={row.link}
                        >
                          <TableCell scope="row">
                            <StyledName name={row.name} company={row.company} date={row.date} />
                          </TableCell>
                          <TableCell align="left">{row.departemen}</TableCell>
                          <TableCell align="left">{row.tingkat}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export { PageList }
