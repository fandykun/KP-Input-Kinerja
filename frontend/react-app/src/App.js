import React, {useReducer, useMemo} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { LoginRoute, ProtectedRoute } from './Components';

import theme from 'theme'
import { ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { UserContext } from 'Context';

import { AuthService } from 'Services';

import { Dashboard, Login, Prestasi, Kultam, Jurnal, Training } from 'Pages';


const App = () => {
  const ACTION = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
  }

  const initialState = useMemo(() => (!AuthService.getSession() ? {
    isAuthenticated: false,
    profile: null,
    token: null,
  } : {
    isAuthenticated: true,
    ...AuthService.getSession(),
  }), [])

  const reducer = (state, action) => {
    switch(action.type) {
      case ACTION.LOGIN_SUCCESS:
        return {
          ...state, 
          isAuthenticated: true,
          profile: action.payload.profile,
          token: action.payload.token,
        }
      case ACTION.LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          profile: null,
          token: null,
        }
      default:
        return state
    }
  }

  const [user, dispatchUser] = useReducer(reducer, initialState);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Provider value={{user, dispatchUser}}>
        <Router>
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Redirect to="/dashboard" /> 
              </Route>
              <ProtectedRoute component={Dashboard} path="/dashboard" exact />
              <ProtectedRoute component={Kultam} path="/kultam" exact />
              <ProtectedRoute component={Jurnal} path="/jurnal" exact />
              <ProtectedRoute component={Prestasi} path="/prestasi" exact />
              <ProtectedRoute component={Training} path="/jurnal" exact />
              <LoginRoute component={Login} path="/login" exact />
              <Route path="/">
                {() => <h1>404 Page not Found</h1>}
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </ThemeProvider>
  )
}

export default App;
