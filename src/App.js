import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import Log from './components/Log';

const chatData = chatMessages;

class App extends Component {
  render() {
    console.log(chatMessages);

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Chat between Vladimir & Estragon</h1>
      </header>
      <main className="App-main">
      <Log message = {chatData}/>
      </main>
      </div>
    );
  }
}

export default App;
