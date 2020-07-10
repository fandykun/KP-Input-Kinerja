import React, { useEffect, useContext } from 'react';
import { PageContext } from 'Context';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FolderSharedOutlined, FitnessCenterOutlined, EmojiEventsOutlined, CastForEducation } from '@material-ui/icons';
import DashboardNavigation from './DashboardNavigation';
import './index.css';

const largeIcon = {
  transform: 'scale(4)',
  color: "white"
}

const Nav = [
  {
    title: "Kuliah Tamu",
    logo: <CastForEducation style={largeIcon}/>,
    href: '/kultam',
    delay: 300,
  },
  {
    title: "Konferensi / Jurnal",
    logo: <FolderSharedOutlined style={largeIcon}/>,
    href: '/jurnal',
    delay: 500,
  },
  {
    title: "Prestasi",
    logo: <EmojiEventsOutlined style={largeIcon}/>,
    href: '/prestasi',
    delay: 700,
  },
  {
    title: "Training",
    logo: <FitnessCenterOutlined style={largeIcon}/>,
    href: '/training',
    delay: 900,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100vh - 64px)',
    backgroundImage: 'url(/static/images/bg-light.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
  },
}));

const Dashboard = () => {
  const classes = useStyles()
  const {dispatchPage} = useContext(PageContext)
  useEffect(() => {
    const pageDetail = {
      title: "Dashboard",
      routeStack: [],
    }
    dispatchPage({type: 'STACK_REPLACE', data: pageDetail}) 
  }, [dispatchPage])
  return(
      <div className={classes.root}>
        <CssBaseline />
        <Grid container justify="center" spacing={5} style={{paddingTop:"50px", paddingLeft:"50px", maxWidth: "100%", maxHeight: "75%"}}>
          {Nav.map((item, idx) => (<DashboardNavigation key={idx} item={item}/>))}
        </Grid>
      </div>
  )
}

export { Dashboard };
