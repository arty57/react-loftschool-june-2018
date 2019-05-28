import React, { PureComponent } from 'react';
import CardNumberInput from './CardNumberInput';
class CardNumberHolder extends PureComponent {
  static displayName = 'Card Number';
  state = {
    cardNumber: ''
  };
  handleChange = value => {
    this.setState({ cardNumber: value });
  };
  render() {
    return (
      <CardNumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
      />
    );
  }
}

export default CardNumberHolder;
