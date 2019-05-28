import React, { PureComponent } from 'react';
import { Switch, withRouter, Link, Route } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Login from '../Login';
import Public from '../Public';
import Private from '../Private';
import PrivateRoute from '../PrivateRoute';

export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <Link to="/">Главная</Link>
          <Link to="/login">Войти</Link>
          <Link to="/private">Секретная страница</Link>
          <Switch>
            <Route path="/" component={Public} exact />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
