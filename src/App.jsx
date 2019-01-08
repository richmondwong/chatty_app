import React, {Component} from 'react';
import {ChatBar} from './Chatbar.jsx'
import {MessageList} from './MessageList.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Joe"},
      messages: [
      {
        username: "Mike",
        content: "Hello hello",
        id: "001"
      },
      {
        username: "Mary",
        content: "Whaddup whaddup",
        id: "002"
      },
      {
        username: "Pablo",
        content: "hi there",
        id: "003"
      }
      ]
    }
  }

  render() {
    return (
      <div>
        <ChatBar currentUser={this.state.currentUser} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
