import React, {useContext} from 'react';
import { Route, Redirect} from 'react-router-dom';
import { UserContext } from 'Context';

const LoginRoute = ({ component: Component, ...rest }) => {
  const {user} = useContext(UserContext)
  return (
    <Route {...rest} render={
      props => {
        return(
          !user.isAuthenticated ? (
            <React.Fragment>
              <Component {...rest} {...props} />
            </React.Fragment>
          )
          : (<Redirect to={{
              pathname: '/dashboard',
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

export {LoginRoute};
