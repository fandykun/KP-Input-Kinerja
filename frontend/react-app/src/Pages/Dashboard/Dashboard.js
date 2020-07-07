import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FolderSharedOutlined, FitnessCenterOutlined, EmojiEventsOutlined, CastForEducation } from '@material-ui/icons';
import DashboardNavigation from './DashboardNavigation';

const largeIcon = {
  transform: 'scale(4)',
  color: "white"
}

const Nav = [
  {
    title: "Kuliah Tamu",
    logo: <CastForEducation style={largeIcon}/>,
    href: '/kultam',
    delay: '0.3s',
  },
  {
    title: "Konferensi / Jurnal",
    logo: <FolderSharedOutlined style={largeIcon}/>,
    href: '/jurnal',
    delay: '0.5s',
  },
  {
    title: "Prestasi",
    logo: <EmojiEventsOutlined style={largeIcon}/>,
    href: '/prestasi',
    delay: '0.7s',
  },
  {
    title: "Training",
    logo: <FitnessCenterOutlined style={largeIcon}/>,
    href: '/kultam',
    delay: '0.9s',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100vh - 70px)',
    backgroundImage: 'url(/static/images/bg-light.jpg)',
    background: '#fff',
    backgroundSize: 'cover',
  },
}));

const Dashboard = () => {
  const classes = useStyles()
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
