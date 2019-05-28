import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: '',
      messages: []
    };
  }
  changeInputMessage = event => {
    // let msg = event.target.value;
    // this.setState(state => ({
    //   messageInput: msg
    // }));
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(state => ({
        messages: [...state.messages, { text: this.state.messageInput }],
        messageInput: ''
      }));
    }
  };

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => (
              <Message text={message.text} key={index} />
            ))}
          </div>
        </div>

        <input
          type="text"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          className="input-message"
          value={this.state.messageInput}
        />
      </div>
    );
  }
}

export default Chat;
