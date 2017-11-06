import React, { Component } from 'react';
import PrintHangman from '../PrintHangman';
import Hangman from '../Hangman';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        nWrong: 0
      }
    }

  updateNWrongs = (nWrong) => {
    this.setState({
      nWrong: nWrong
    })
  }

  render() {
    return (
      <div className="app">
        <div className="row header">
            <div className="col-sm-12">
              <h1>HANGMAN</h1>
            </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <PrintHangman keys={this.props.keys} words={this.props.words} nWrong={this.state.nWrong} />
          </div>
          <div className="col-sm-6">
            <Hangman keys={this.props.keys} words={this.props.words} updateNWrongs={this.updateNWrongs} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
