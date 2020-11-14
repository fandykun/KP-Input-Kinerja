import React  from 'react'
import { Typography, Button, Dialog, Fab, CircularProgress, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Clear, Check,  HourglassEmpty } from '@material-ui/icons';
import { green, red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  progress: {
    position: 'absolute',
    left: '50%', 
    top: '50%', 
    transform: 'translate(-50%, -11%)',
  },
  content: {
    left: '50%', 
    transform: 'translateX(-50%)',
  },
  fail: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
    left: '50%', 
    transform: 'translateX(-50%)',
  },
  success: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    left: '50%', 
    transform: 'translateX(-50%)',
  },
}));

const Title = ({classes, title, isSubmitting, submitStatus, failMessage, successMessage, submitMessage}) => {
  if (isSubmitting) {
    return (
    <>
      <Typography variant="h6" color="primary">
        {submitMessage}
      </Typography>
    </>
    )
  } else {
    if (submitStatus === 'fail') {
      return (
        <Typography variant="h6" color="primary">
          {failMessage}
        </Typography>
      )
    } else if (submitStatus === 'success') {
      return (
        <Typography variant="h6" color="primary">
          {successMessage}
        </Typography>
      )
    } else {
      return (
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
      )
    }
  }
}

const Content = ({classes, content, isSubmitting, submitStatus}) => {
  if (isSubmitting) {
    return (
    <>
      <Fab
        aria-label="save"
        color="primary"
        className={classes.content}
      >
          <HourglassEmpty />
      </Fab>
      <div className={classes.progress}>
        <CircularProgress size={69} />
      </div>
    </>
    )
  } else {
    if (submitStatus === 'fail') {
      return (
        <Fab
          color="primary"
          aria-label="fail"
          className={classes.fail}
        >
            <Clear />
        </Fab>
      )
    } else if (submitStatus === 'success') {
      return (
        <Fab
          color="primary"
          aria-label="success"
          className={classes.success}
        >
            <Check />
        </Fab>
      )
    } else {
      return (
        <>
          {content}
        </>
      )
    }
  }
}

const AlertDialog = (props) => {
  const classes = useStyles()
  return (
    <>
      <Dialog 
        open={props.open}
        onClose={props.closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Title classes={classes} title={props.title} isSubmitting={props.isSubmitting} submitStatus={props.submitStatus} submitMessage={props.submitMessage} failMessage={props.failMessage} successMessage={props.successMessage}/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Content classes={classes} content={props.content} isSubmitting={props.isSubmitting} submitStatus={props.submitStatus} />
          </DialogContentText>
        </DialogContent>
        {props.submitStatus === '' && !props.isSubmitting && 
          <DialogActions>
            <Button onClick={props.disagreeHandler} color="primary">
              {props.disagreeText}
            </Button>
            <Button onClick={props.agreeHandler} color="primary" autoFocus>
              {props.agreeText}
            </Button>
          </DialogActions>
        }
      </Dialog> 
    </>
  )
}

export { AlertDialog }
