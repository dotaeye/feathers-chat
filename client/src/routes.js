import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {App, Home, Login} from './containers';

export default store => {
  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props =>
        false
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
                state: {from: props.location},
              }}
            />}
    />
  );
  return (
    <App>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </App>
  );
};
