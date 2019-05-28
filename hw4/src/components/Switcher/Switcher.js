import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  handleChangeChild = event => {
    const id = event.target.getAttribute('data-id');
    console.log(id);
    this.setState({ selectedChild: id });
  };
  render() {
    const children = React.Children.toArray(this.props.children);
    const { selectedChild } = this.state;
    return (
      <div className="switcher">
        <div className="component-list">
          {children.map((value, index) => {
            return (
              <div
                className="component-list__name"
                data-id={index}
                key={index}
                onClick={this.handleChangeChild}
              >
                {value.type.displayName
                  ? value.type.displayName
                  : value.type.name}
              </div>
            );
          })}
        </div>
        <div className="component-wrapper">{children[selectedChild]}</div>
      </div>
    );
  }
}

export default Switcher;
