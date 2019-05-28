import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authorize, getIsAuthorized } from '../../ducks/auth';
import './login.css';
class Login extends Component {
  state = {
    inputText: ''
  };

  onInputChange = event => {
    const value = event.target.value;
    const key = event.key;
    if (key === 'Enter') {
      this.onFormSubmit();
    } else {
      this.setState({ inputText: value });
    }
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.authorize(this.state.inputText);
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="login-page">
        {}
        <p>
          Получить токен нужно на своей странице github, перейдите по
          <a href="https://github.com/settings/tokens">адресу</a> и создать себе
          токен. Запишите куда нибудь токен, так как после создания доступ к
          нему будет только один раз.
        </p>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Token"
            required="required"
            value={this.state.inputText}
            onChange={this.onInputChange}
            onKeyPress={this.onInputChange}
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});
const mapDispatchToProps = { authorize };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
