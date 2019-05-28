import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    login: '',
    password: '',
    error: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: false });
  };

  handleSubmit = () => {
    const { login } = this.state;
    const { password } = this.state;
    const hasError = !this.props.authorizeUser(login, password);
    this.setState({ error: hasError });
  };

  render() {
    const { isAuthorized } = this.props;

    return isAuthorized ? (
      <Redirect to="/" />
    ) : (
      <div>
        <form>
          <input
            type="text"
            placeholder="Login"
            value={this.state.login}
            name="login"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleSubmit}>
            Sign In
          </button>
        </form>
        {this.state.error && <p>Wrong login or/and password</p>}
      </div>
    );
  }
}

export default AuthHOC(Login);
