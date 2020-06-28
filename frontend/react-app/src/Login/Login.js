import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../Context';
import {useField, Form, Formik} from 'formik';
import * as Yup from 'yup';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Loader } from '../Layout';
import { AuthService } from '../Services';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  blank: {
    background: theme.gradientBG,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    background: theme.gradientBG,
    color: theme.text.white,
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  
  const {dispatchUser} = useContext(UserContext)

  const initialValue = {
    username: "",
    password:"",
  }

  const [goHome, setGoHome] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAPI = async () => {
      await new Promise(r => setTimeout(r, 2000));
      setLoading(false)
    }
    fetchAPI()
  }, [])

  const loginSchema = Yup.object().shape({
    username: Yup.string()
    .required('Username tidak boleh kosong'),
    password: Yup.string()
    .required('Password tidak boleh kosong')
  })

  const submitHandler = async ({ username, password} ) => {
    const payload = AuthService.login(username, password)
    await new Promise(r => setTimeout(r, 2000));
    dispatchUser({
      type: 'LOGIN_SUCCESS', 
      payload: payload,
    })
    setGoHome(true)
  }

  const MyTextField = (props) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
      <TextField {...props} {...field} helperText={errorText} error={!!errorText} />
    )
  }

  return (
    <React.Fragment>
      {goHome && <Redirect to='/' />}
      {isLoading ? <Loader />
        : (<Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.blank} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Formik
                initialValues={initialValue}
                onSubmit={submitHandler}
                validationSchema={loginSchema}  
                >
                {props => (
                <Form>
                  <MyTextField 
                    required
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Username"
                    name="username"
                    autoComplete="off"
                    autoFocus
                  />
                  <MyTextField
                    required
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="off"
                  />
                  <Button
                    disabled={!props.dirty || !props.isValid || props.isSubmitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                      {props.isSubmitting ? <CircularProgress size="1.75rem" color="primary"/> : 'Sign In'}
                  </Button>
                </Form>
                )}
              </Formik>
            </div>
          </Grid>
        </Grid>)
      }        
    </React.Fragment>
  );
}

export { Login };
