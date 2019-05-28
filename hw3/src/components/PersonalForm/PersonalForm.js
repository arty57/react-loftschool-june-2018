import React, { PureComponent, Fragment } from 'react';
import Title from '../Title';
import './PersonalForm.css';

class PersonalForm extends PureComponent {
  state = {};

  handleChangeForm = event => {
    this.props.onChangeForm(event.target.name, event.target.value);
  };
  render() {
    return (
      <Fragment>
        <Title title={this.props.formTitle} />
        <div className="personal-form">
          <input
            type="text"
            name="firstName"
            value={this.props.firstName}
            onChange={this.handleChangeForm}
            placeholder="First name"
          />
          <input
            type="text"
            name="lastName"
            value={this.props.lastName}
            onChange={this.handleChangeForm}
            placeholder="Last name"
          />
          <input
            type="email"
            name="email"
            value={this.props.email}
            onChange={this.handleChangeForm}
            placeholder="E-mail"
          />
        </div>
      </Fragment>
    );
  }
}

export default PersonalForm;
