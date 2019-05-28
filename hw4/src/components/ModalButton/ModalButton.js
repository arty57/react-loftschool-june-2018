import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  static displayName = 'Modal Button';
  constructor(props) {
    super(props);
    this.state = {
      isModalShow: false
    };
    this.portalDiv = document.createElement('div');
    this.portalDiv.id = 'portal';

    document.body.appendChild(this.portalDiv);
  }

  componentWillUnmount() {
    document.body.removeChild(this.portalDiv);
  }

  hideModal = () => {
    this.setState({ isModalShow: false });
  };
  showModal = () => {
    this.setState({ isModalShow: true });
  };
  render() {
    const { isModalShow } = this.state;
    return (
      <div>
        <button onClick={this.showModal}>ShowModal</button>
        {isModalShow && (
          <Modal onClose={this.hideModal} container={this.portalDiv} />
        )}
      </div>
    );
  }
}

export default ModalButton;
