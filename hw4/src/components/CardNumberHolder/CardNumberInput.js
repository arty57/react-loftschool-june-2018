import React, { Component } from 'react';

class CardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.format(this.props.cardNumber)
    };
  }
  format = value => {
    return value
      ? value
          .toString()
          .replace(/(\d{4})/g, '$1 ')
          .trim()
      : '';
  };
  normalize = value => {
    return value ? value.replace(/ /g, '').trim() : '';
  };

  componentWillReceiveProps = newProps => {
    if (newProps.cardNumber !== this.props.cardNumber) {
      this.setState({
        ...this.state,
        number: this.format(newProps.cardNumber)
      });
    }
  };
  onChangeHandle = event => {
    const { value } = event.target;
    this.props.onChange(this.normalize(value));
  };
  render() {
    return (
      <input
        type="text"
        value={this.state.number}
        onChange={this.onChangeHandle}
        placeholder="0000000000000000"
      />
    );
  }
}

export default CardNumberInput;
