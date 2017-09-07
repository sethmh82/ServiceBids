import React from 'react';
import { connect } from 'react-redux';
  const chatStyle = {
      backgroundcolor: 'blue',
      height: '90%',
      width: '90%'
  };

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      past: props.past
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
      return(
          <div>
            <div className="container" id="chatDisplay" style={chatStyle}>

            </div>
            <div>
                <form id="chatMessages" action="">
                    <input id="messages" autoComplete="off" /><button id="m-btn">Send</button>
                </form>
            </div>
          </div>
      )};
}

export default ChatContainer;