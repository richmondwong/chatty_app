import React, {Component} from 'react';

import {Message} from './Message.jsx'


export class MessageList extends Component {



  render(){
    return (
      <main className="messages">
        {this.props.messages.map((msg) =>
          <Message username={msg.username} content={msg.content} />
        )}

      </main>
    )
  }
}