import React from 'react';
import { Grid } from '@material-ui/core';
import { FolderSharedOutlined, FitnessCenterOutlined, EmojiEventsOutlined, CastForEducation } from '@material-ui/icons';
import HomeNavigation from './HomeNavigation';

const largeIcon = {
  transform: 'scale(4)',
  color: "white"
}

const Nav = [
  {
    title: "Kuliah Tamu",
    logo: <CastForEducation style={largeIcon}/>
  },
  {
    title: "Konferensi / Jurnal",
    logo: <FolderSharedOutlined style={largeIcon}/>
  },
  {
    title: "Prestasi",
    logo: <EmojiEventsOutlined style={largeIcon}/>
  },
  {
    title: "Training",
    logo: <FitnessCenterOutlined style={largeIcon}/>
  },
]

const Home = () => {
  return(
    <div>
      <Grid container alignItems="center" spacing={3} style={{padding:"30px"}}>
        {Nav.map((item) => (<HomeNavigation title={item.title} logo={item.logo}/>))}
      </Grid>
    </div>
  )
}

export { Home };
