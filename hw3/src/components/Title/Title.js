import React, { PureComponent } from 'react';

class Title extends PureComponent {
  state = {};
  render() {
    return <h1 className="title">{this.props.title}</h1>;
  }
}

export default Title;
