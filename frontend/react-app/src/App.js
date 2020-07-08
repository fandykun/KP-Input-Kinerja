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

import { UserContext, PageContext } from 'Context';

import { AuthService } from 'Services';

import { Dashboard, Login, Prestasi, Kultam, Jurnal, Training } from 'Pages';


const App = () => {
  const ACTION = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    STACK_REPLACE: 'STACK_REPLACE',
  }

  const initialUserState = useMemo(() => (!AuthService.getSession() ? {
    isAuthenticated: false,
    profile: null,
    token: null,
  } : {
    isAuthenticated: true,
    ...AuthService.getSession(),
  }), [])

  const initialPageState = {
    title: '',
    routeStack: [],
  }

  const userReducer = (state, action) => {
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

  const pageReducer = (state, action) => {
    switch(action.type) {
      case ACTION.STACK_REPLACE:
        document.title = action.data.title
        return {
          ...state,
          title: action.data.title,
          routeStack: action.data.routeStack,
        }
      default:
        return state
    }
  }

  const [user, dispatchUser] = useReducer(userReducer, initialUserState);
  const [page, dispatchPage] = useReducer(pageReducer, initialPageState);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageContext.Provider value={{page, dispatchPage}}>
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
                <Route path="*">
                  {() => <h1>404 Page not Found</h1>}
                </Route>
              </Switch>
            </div>
          </Router>
        </UserContext.Provider>
      </PageContext.Provider>
    </ThemeProvider>
  )
}

export default App;
