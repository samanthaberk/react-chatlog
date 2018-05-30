import React from 'react';
import Message from './Message';


class Log extends React.Component {
  render() {
    const logData = this.props.message;

    return (
      <main>
      {logData.map((chat) => {
          return (
            <Message sender={chat.sender} body={chat.body} timeStamp={chat.timeStamp} />
          );
        })}
      </main>
    );
  }
}

export default Log;
