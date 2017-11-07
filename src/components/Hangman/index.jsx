import React, { Component } from 'react';
import PrintHangman from '../PrintHangman';
import HangmanResult from '../HangmanResult';

/**
 * Handles Hangman game.
 */
class Hangman extends Component {
  constructor() {
    super();
    this.state = {
      nWrong: 0
    }
  }

  /**
  * Callback function passed to child component to update number of worngs for printing updated hangman. 
  */
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
          <div className="col-md-6">
            <PrintHangman keys={this.props.keys} words={this.props.words} nWrong={this.state.nWrong} />
          </div>
          <div className="col-md-6">
            <HangmanResult keys={this.props.keys} words={this.props.words} updateNWrongs={this.updateNWrongs} setWonStats={this.props.setWonStats} setHighestScore={this.props.setHighestScore} />
          </div>
        </div>
      </div>
    )
  }
}

export default Hangman;
