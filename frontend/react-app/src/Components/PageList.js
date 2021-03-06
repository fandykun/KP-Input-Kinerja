import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Hidden, Fab, Badge, Grid, Typography } from '@material-ui/core';
import { PostAdd, People, EmojiEvents, Create, Business, Event } from '@material-ui/icons';

import PageListToolbar from './PageListToolbar';
import PageListHead from './PageListHead';

function descendingComparator(a, b, orderBy) {
  if (orderBy === "detail")
    orderBy = "date"
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

const distinct = (value, index, self) => {
  return self.indexOf(value) === index
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    minHeight: 'calc(100vh - 64px)',
    backgroundImage: 'url(/static/images/bg-light.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
    paddingBottom: theme.spacing(2),
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
    maxHeight: "600px",
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
  },
  entry: {
    marginLeft: theme.spacing(2),
  },
}));

const styledJurnal = jurnal => {
  const { vol, no, category } = jurnal
  let data = "Vol. " + vol + ", No. " + no + ", ";
  if (category.length > 0)
    data = data + "(";
  for (let i = 0; i < category.length; i++) {
    if (i > 0)
      data = data + ", "
    data = data + category[i]
  }
  if (category.length > 0)
    data = data + ")"
  return data
}

const styledKonferensi = jurnal => {
  const { konfhal, tempat, category } = jurnal
  let data = "Konf hal. " + konfhal + ", " + tempat + ", ";
  if (category.length > 0)
    data = data + "(";
  for (let i = 0; i < category.length; i++) {
    if (i > 0)
      data = data + ", "
    data = data + category[i]
  }
  if (category.length > 0)
    data = data + ")"
  return data
}

const StyledName = ({row}) => {
  const { name, type, source, date } = row
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
  const renderSourceIcon = type => {
    switch(type) {
      case "Kultam":
        return <Business />
      case "Jurnal":
        return <Create />
      case "Konferensi":
        return <Create />
      case "Prestasi":
        return <EmojiEvents />
      case "Training":
        return <People />
      case "Sertifikasi":
        return <People />
      default:
        return null;
    }
  }
  return (
    <div>
      <Grid container direction="column">
        { type !== "Submission" &&
        <Grid item style={{marginLeft: "8px"}}>
          <Badge badgeContent={year} max={999999} color="secondary" component="div"/>
        </Grid>
        }
        <Grid item>
          <Typography variant="h6" color="primary">
            { name }
          </Typography>
        </Grid>
        { type !== "Submission" && 
        <Grid item container direction="row" alignItems="center">
          <Grid item container lg={5} xs={6}>
            <Grid item>
              <Event />
            </Grid>
            <Grid item>
              <Typography variant="caption" component="div" style={{margin:'4px'}}>
                { fullDate }
              </Typography>
            </Grid>
          </Grid>
          <Grid item container lg={7} xs={6}>
            <Grid item>
              { renderSourceIcon(type) }
            </Grid>
            <Grid item>
              <Typography variant="caption" component="div" style={{margin:'4px'}}>
                { source }
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        }
      </Grid>
    </div>
  )
}

const renderRow = (row) => {
  const second = type => {
    switch (type) {
      case "Kultam":
        return (
          <>
            <TableCell align="left">{row.departemen}</TableCell>
            <TableCell align="left">{row.tingkat}</TableCell>
          </>
        )
      case "Jurnal":
        return (
          <>
            <TableCell align="left">{styledJurnal(row.detail)}</TableCell>
            <TableCell align="left">{row.departemen}</TableCell>
            <TableCell align="left">{row.tingkat}</TableCell>
          </>
        )
      case "Konferensi":
        return (
          <>
            <TableCell align="left">{styledKonferensi(row.detail)}</TableCell>
            <TableCell align="left">{row.departemen}</TableCell>
            <TableCell align="left">{row.tingkat}</TableCell>
          </>
        )
      case "Prestasi":
        return (
          <>
            <TableCell align="left">{row.peringkat}</TableCell>
            <TableCell align="left">{row.departemen}</TableCell>
            <TableCell align="left">{row.tingkat}</TableCell>
          </>
        )
      case "Training":
        return (
          <>
            <TableCell align="left">{row.tempat}</TableCell>
            <TableCell align="left">{row.departemen}</TableCell>
            <TableCell align="left">{row.tingkat}</TableCell>
          </>
        )
      case "Sertifikasi":
        return (
          <>
            <TableCell align="left">{row.tempat}</TableCell>
            <TableCell align="left">{row.departemen}</TableCell>
          </>
        )
      case "Submission":
        return (
          <>
            <TableCell align="left">{row.source}</TableCell>
            <TableCell align="left">{row.departemen}</TableCell>
            <TableCell align="left">{row.tingkat}</TableCell>
          </>
        )
      default:
        return null;
    }
  }
  return (
    <>
    <TableCell>
      <StyledName row={row} />
    </TableCell>
    {second(row.type)}
    </>
  )
}

const PageList = ({title, rows, headCells}) => {
  const classes = useStyles();
  const [yearOption, setYearOption] = useState([])
  const [departmentOption, setDepartmentOption] = useState([])
  const [year, setYear] = useState(0)
  const [department, setDepartment] = useState(0)
  const [order, setOrder] = useState('asc');
  const [count, setCount] = useState(rows.length)
  const [orderBy, setOrderBy] = useState('detail');
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(5)

  useEffect(() => {
    let y = [0]
    let dp = [0]
    for (let i = 0; i < rows.length; i++) {
      const d = new Date(rows[i].date)
      const year = d.getFullYear()
      y.push(year)
      dp.push(rows[i].departemen)
    }
    setYearOption(y.filter(distinct))
    setDepartmentOption(dp.filter(distinct))
  }, [rows])

  const handleYearChange = (event) => {
    setYear(event.target.value)
    setPage(0)
  }

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value)
    setPage(0)
  }

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
    const filteredData = filterSearch(rows)
    setCount(filteredData.length)
    setPage(0)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filterSearch = (data) => {
    const filteredData = data.filter(item => {
      if ((search === null || search === '') && (department === 0 && year === 0)) {
        return true;
      }
      else {
        const searchList = search.split("|")
        for (let i = 0; i < searchList.length; i++) {
          let found = false;
          for (const value of Object.entries(item)) {
            if (department !== 0 && value[0] === 'departemen') {
              if (department !== value[1]) {
                return false
              }
            }
            if (year !== 0 && value[0] === 'date') {
              const d = new Date(value[1])
              console.log(d.getFullYear())
              if (year !== d.getFullYear()) {
                return false
              }
            }
            if (value[0] === "name" || value[0] === "source") {
              if (value[1].toString().toLowerCase().includes(searchList[i].toString().trim().toLowerCase())) {
                found = true
              }
            } else {
              if (value[1].toString().includes(searchList[i].toString().trim())) {
                found = true
              }
            }
          }
          if (!found)
            return false;
        }
        return true;
      }
    })
    return filteredData
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={8} >
          <PageListToolbar title={title} search={search} handleSearchChange={handleSearchChange} year={year} handleYearChange={handleYearChange} department={department} handleDepartmentChange={handleDepartmentChange} yearOption={yearOption} departmentOption={departmentOption}/>
          <Paper className={classes.paper} elevation={5}>
            { rows.length !== 0 ? (
            <>
              <TableContainer className={classes.tableContainer} >
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  aria-label="enhanced table"
                  stickyHeader
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
                          {renderRow(row)}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={count}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </>
            ) : (
              <Typography color="primary" variant="h5" style={{fontWeight: "bold", height: "60px", textAlign: "center", paddingTop: "16px"}}>
                Tidak Ada Data
              </Typography>
            )
          }
          </Paper>
            <Hidden mdDown>
              <Grid item>
                <Fab variant="extended" color="secondary" component={Link} to='/entry' className={classes.entry}>
                  <PostAdd />
                  Tambah
                </Fab>
              </Grid>
            </Hidden>
            <Hidden lgUp>
              <Grid item>
                <Fab color="secondary" component={Link} to='/entry' className={classes.entry}>
                  <PostAdd />
                </Fab>
              </Grid>
            </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export { PageList }
