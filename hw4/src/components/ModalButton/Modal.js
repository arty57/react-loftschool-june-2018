import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal__fog">
        <div className="modal__body">
          <h2>Модальное окно</h2>
          <button type="button" onClick={this.props.onClose}>
            Close
          </button>
        </div>
      </div>,
      this.props.container
    );
  }
}

export default Modal;
