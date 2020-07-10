import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from 'Context';
import {useField, Form, Formik} from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, CircularProgress, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AuthService } from 'Services';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  blank: {
    backgroundImage: 'url(/static/images/bg.jpg)',
    background: theme.palette.primary.main,
    backgroundSize: 'cover',
  },
  paper: {
    margin: theme.spacing('25%', 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    background: theme.palette.secondary.main,
    color: theme.text.white,
    margin: theme.spacing(3, 0, 2),
  },
  media: {
    position: 'relative',
    top: '-10px',
    left: '12px',
    maxHeight: '30%',
    maxWidth: '30%',
  },
  loginGrid: {
    backgroundColor: theme.palette.secondary.main,
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
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    const fetchAPI = async () => {
      await new Promise(r => setTimeout(r, 2000));
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
    const payload = await AuthService.login(username, password)
    if (payload) {
      dispatchUser({
        type: 'LOGIN_SUCCESS', 
        payload: payload,
      })
      setGoHome(true)
    } else {
      setAuthError('Login Gagal, Silakan Coba Lagi.')
    }
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
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.blank} />
        <Grid className={classes.loginGrid} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Card raised={true} elevation={20}>
              <CardMedia
                component="img"
                className={classes.media}
                alt="Logo ITS"
                image="/static/images/logoITS.png"
                title="Logo ITS"
              />
              <CardContent>
                {!!authError && <Typography color="primary" variant="h6">{authError}</Typography>}
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
                      color="secondary"
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
                      color="secondary"
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
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export { Login };
