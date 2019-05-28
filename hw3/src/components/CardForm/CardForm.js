import React, { PureComponent, Fragment } from 'react';
import Title from '../Title';
import './CardForm.css';

class CardForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeForm = event => {
    const { name, value } = event.target;
    this.props.onChangeForm(name, value);
  };

  componentWillUnmount = () => {
    return true;
  };

  render() {
    return (
      <Fragment>
        <Title title={this.props.formTitle} />
        <div className="card-form">
          <input
            type="text"
            name="cardNumber"
            value={this.props.cardNumber}
            placeholder="0000000000000000"
            onChange={this.handleChangeForm}
          />
        </div>
      </Fragment>
    );
  }
}

export default CardForm;
