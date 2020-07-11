import React, {useState, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import {Typography, Paper} from '@material-ui/core';
import './index.css';

const WelcomeMessage = ({user}) => {
  const [inWelcome, setInWelcome] = useState(false)
  const [inUser, setInUser] = useState(false)
  useEffect(() => {
    setInWelcome(false)
    setInUser(false)
    setTimeout(() => {setInWelcome(true)}, 500)
    setTimeout(() => {setInUser(true)}, 1000)
  }, [])
  return (
    <Paper elevation={0} style={{minHeight: "128px"}}>
      <div className="bounding-box">
        <CSSTransition
          in={inWelcome}
          classNames="welcome-message"
          timeout={800} 
          mountOnEnter
        >
          <Typography variant="h2" color="primary">
            Selamat Datang
          </Typography>
        </CSSTransition>
      </div>
      <div className="bounding-box">
        <CSSTransition
          in={inUser}
          classNames="welcome-message"
          timeout={800} 
          mountOnEnter
        >
          <Typography variant="h3" color="primary">
            <strong>{user}</strong>
          </Typography>
        </CSSTransition>
      </div>
    </Paper>
  )
}

export default WelcomeMessage
