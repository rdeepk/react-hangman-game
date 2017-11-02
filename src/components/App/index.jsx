import React, { Component } from 'react';
import Hangman from '../Hangman';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <h1>HANGMAN</h1>
        </div>
        <Hangman keys={this.props.keys} words={this.props.words} />
      </div>
    );
  }
}

export default App;
