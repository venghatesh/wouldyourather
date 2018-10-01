import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// Authorisation work flow example : https://reacttraining.com/react-router/web/example/auth-workflow

function PrivateRoute({ component: Component, ...rest }) {
  const { authUser} = rest;

  return (
    <Route
      {...rest}
      render={props => (
        authUser !== null
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
          />
      )}
    />
  );
}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
//  isLogged: PropTypes.object.isRequired,
};

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}
export default connect(mapStateToProps)(PrivateRoute);
