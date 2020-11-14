import React, {useReducer, useMemo} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterContainer } from 'Components';

import theme from 'theme'
import { ThemeProvider} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { UserContext, PageContext } from 'Context';

import { AuthService } from 'Services';

const App = () => {
  const ACTION = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    STACK_REPLACE: 'STACK_REPLACE',
  }

  const initialUserState = useMemo(() => (!AuthService.getSession() ? {
    isAuthenticated: false,
    isAdmin: false,
    profile: null,
    token: null,
  } : {
    isAuthenticated: true,
    ...AuthService.getSession(),
  }), [])

  const initialPageState = {
    prevTitle: '',
    title: '',
    routeStack: [],
  }

  const userReducer = (state, action) => {
    switch(action.type) {
      case ACTION.LOGIN_SUCCESS:
        return {
          ...state, 
          isAuthenticated: true,
          isAdmin: action.payload.is_admin,
          profile: action.payload.profile,
          token: action.payload.token,
        }
      case ACTION.LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          isAdmin: false,
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
          prevTitle: state.title,
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
              <RouterContainer />
            </div>
          </Router>
        </UserContext.Provider>
      </PageContext.Provider>
    </ThemeProvider>
  )
}

export default App;
