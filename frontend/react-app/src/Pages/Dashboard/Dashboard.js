import React, { useEffect, useContext } from 'react';
import { PageContext, UserContext } from 'Context';
import { Hidden, CssBaseline, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FolderSharedOutlined, FitnessCenterOutlined, EmojiEventsOutlined, CastForEducation } from '@material-ui/icons';
import DashboardNavigation from './DashboardNavigation';
import WelcomeMessage from './WelcomeMessage';
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
  const {user} = useContext(UserContext)
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
        <Grid justify="space-evenly" container style={{padding:"50px", maxWidth: "100%", maxHeight: "75%"}}>
          <Grid item xs={12} justify="center" spacing={5}>
            <Hidden mdDown>
              <WelcomeMessage user={user.profile.username} />
            </Hidden>
          </Grid>
          <Grid spacing={5} item container justify="space-between">
            {Nav.map((item, idx) => (<DashboardNavigation key={idx} item={item}/>))}
          </Grid>
        </Grid>
      </div>
  )
}

export { Dashboard };
