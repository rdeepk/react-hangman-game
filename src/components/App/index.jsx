import React, { Component } from 'react';
import PrintHangman from '../PrintHangman';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navBar">
          <h1>HANGMAN</h1>
        </div>
        <PrintHangman keys={this.props.keys} words={this.props.words} />
      </div>
    );
  }
}

export default App;
