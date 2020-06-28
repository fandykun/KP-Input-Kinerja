import React, {useContext} from 'react';
import { Route, Redirect} from 'react-router-dom';
import { UserContext } from '../Context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {user} = useContext(UserContext)
  return (
    <Route {...rest} render={
      props => {
        return(
          user.is_authenticated ? (<Component {...rest} {...props} />)
          : (<Redirect to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
          }} />)
        )
      }
    } />
  )
}

export {ProtectedRoute};

