import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, click the button for a crash.
        </p>
        <button onClick={() => { throw new Error('This is an example error!') }}>
          Throw an error
        </button>
      </div>
    );
  }
}

export default App;
