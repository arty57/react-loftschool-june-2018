import React, { PureComponent } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import UserPage from '../UserPage';
import Login from '../Login';
import PrivateRoute from '../PrivateRoute';
import './approuter.css';
import { logout } from '../../ducks/auth';
import { getIsNetworkErrorPresent, getNetworkError } from '../../ducks/network';
import { connect } from 'react-redux';
class AppRouter extends PureComponent {
  render() {
    const { logout, isNetworkError, networkError } = this.props;
    return (
      <div className="App">
        {isNetworkError && (
          <div className="alert">{networkError.toString()}</div>
        )}
        <div className="header">
          <button onClick={logout}>Logout</button>
        </div>
        <Switch>
          <PrivateRoute path="/user/:id" component={UserPage} />
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/user/me" />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isNetworkError: getIsNetworkErrorPresent(state),
  networkError: getNetworkError(state)
});
const mapDispatchToProps = {
  logout
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppRouter)
);
