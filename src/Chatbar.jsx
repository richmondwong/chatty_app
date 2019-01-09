import React, {Component} from 'react';

const DEFAULT_MESSAGE = { message: "" };

export class ChatBar extends Component {

  constructor(props){
    super(props)
    this.state = { message: "" }
  }



  onKeyUp = e => {
    if (e.keyCode === 13){
      this.props.addMessage(this.state.message)
      this.setState({ message: "" })
    }
  }

  onChange = e => {
    const inputText = e.target.value
    this.setState({message: inputText})
  }

  render(){
    return (

      <footer className="chatbar">

      {/*  <form onKeyUp={this.onKeyUp} >*/}
          <input className="chatbar-username" placeholder="Your Name (Optional)" />
          <input
            className="chatbar-message"
            value={this.state.message}
            name="messageInput"
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}
            placeholder="Type a message and hit ENTER"
          />
   {/*     </form>*/}

      </footer>
      )
  }
}