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


  addMessage = content => {
    var originalMessages = this.state.messages;
    var originalUsers = this.state.messages.username;
    var newMessages = [
      ...originalMessages,
      { username: "Placeholder", content, id: "tempID" }
    ];
    this.setState({ messages: newMessages });

    var newestMessage = { username: "Placeholder", content, id: "tempID" }
    this.socket.send(JSON.stringify(newestMessage))
  };

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001')

    this.socket.onopen = () => {
      console.log('Connected to WebSocket')
    }

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);


  //    _sendContent = e => {
  //   e.preventDefault();
  //   const { content } = this.state;

  //   const objectToSend = {
  //     type: 'text-message',
  //     content
  //   };

  //   this.socket.send(JSON.stringify(objectToSend));

  //   this.setState({ content: '' });
  // };


    // this.socket.send("Hello")

  //   wss.on('connection', function connection(ws) {
  // ws.on('message', function incoming(message) {
  //   console.log('received: %s', message);
  // });

  // ws.send('something');


  }

  render() {
    // more code here..
  }

  render() {
    return (
      <div>
        <ChatBar currentUser={this.state.currentUser} addMessage={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
