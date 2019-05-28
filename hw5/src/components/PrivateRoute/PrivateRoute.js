import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Route, Redirect } from 'react-router-dom';
class PrivateRoute extends PureComponent {
  render() {
    const PrivatePage = this.props.component;
    const { isAuthorized } = this.props;
    return (
      <Route
        render={() =>
          isAuthorized ? <PrivatePage /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default AuthHOC(PrivateRoute);
