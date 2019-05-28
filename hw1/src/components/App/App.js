import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  };

  incCounter = event => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };
  render() {
    return (
      <div className="App">
        <p className="description">counter: {this.state.counter}</p>
        <button onClick={this.incCounter}>+</button>
      </div>
    );
  }
}
export default App;
