import React, {useContext} from 'react';
import { Route, Redirect} from 'react-router-dom';
import { UserContext } from 'Context';
import './index.css';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {user} = useContext(UserContext)
  return (
    <Route {...rest} render={
      props => {
        return(
          user.isAuthenticated ? (
              <React.Fragment> 
                <Component {...rest} {...props} />
              </React.Fragment>
          )
          : (<Redirect to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
          }} />
          )
        )
      }
    } />
  )
}

export {ProtectedRoute};

