import React from 'react';
import Timestamp from './Timestamp'

class Message extends React.Component {
  render() {
    const timestamp = <Timestamp time = { this.props.timeStamp }/>;
    let alignment;
    if (this.props.sender === 'Vladimir') {
      alignment = 'local'
    } else if (this.props.sender === 'Estragon') {
      alignment = 'remote'
    }
    return (
      <section className={'chat-entry ' + alignment}>
      <div className='entry-bubble'>
        <h2 className='entry-name'>{this.props.sender}</h2>
        <h2 className='entry-body'>{this.props.body}</h2>
        <h2 className='entry-time'>{timestamp}</h2>
        </div>
      </section>
    );
  }
}

export default Message;
