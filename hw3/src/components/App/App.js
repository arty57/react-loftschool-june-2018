import React, { Component } from 'react';
import PersonalForm from '../PersonalForm';
import CardForm from '../CardForm';
import Step from '../Step';
import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleTabClick = newStep => {
    console.log(newStep);
    this.setState({ step: newStep });
  };
  handleChangeForm = (name, value) => {
    this.setState({ [name]: value });
  };
  handleClickNextForm = () => {
    this.setState(prevState => {
      return { step: prevState.step + 1 };
    });
  };
  handleChangeTimeOver = () => {};
  isFormCommitable = () => {
    switch (this.state.step) {
      case 1:
        return (
          this.state.firstName !== '' &&
          this.state.lastName !== '' &&
          this.state.email.includes('@')
        );
      case 2:
        return this.state.cardNumber.length === 16;
      default:
        return false;
    }
  };

  renderForm = () => {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
            formTitle="Персональная информация"
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
            onChangeTimeOver={this.handleChangeTimeOver}
            formTitle="Информация о карте"
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return false;
    }
  };
  render() {
    return (
      <div className="container">
        <div className="tab-panel">
          <Step
            onClick={this.handleTabClick}
            number={1}
            isSelected={this.state.step === 1}
            isClickable={this.state.step > 1}
          >
            Personal Information
          </Step>
          <Step
            onClick={this.handleTabClick}
            number={2}
            isSelected={this.state.step === 2}
            isClickable={this.state.step > 2}
          >
            Card Information
          </Step>
          <Step
            onClick={this.handleTabClick}
            number={3}
            isSelected={this.state.step === 3}
            isClickable={this.state.step > 3}
          >
            Finish
          </Step>
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
