import React, { Component } from 'react';
import './App.css';
import VideoPlayer from '../VideoPlayer';
import CardNumberHolder from '../CardNumberHolder';
import ModalButton from '../ModalButton';
import Switcher from '../Switcher';

class App extends Component {
  render() {
    return (
      <Switcher>
        <VideoPlayer />
        <CardNumberHolder />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
