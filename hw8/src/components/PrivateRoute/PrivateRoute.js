import React, { PureComponent } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthorized } from '../../ducks/auth';
class PrivateRoute extends PureComponent {
  render() {
    const { component: PrivatePage, isAuthorized, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <PrivatePage {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}
const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
