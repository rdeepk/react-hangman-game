import React, { Component } from 'react';


class PrintState extends Component {
    constructor() {
        super();
        this.state = {
            won: false
        }
    }

    counter = 0;
  setGameState = () => {
      this.counter = 0;
    let str = "";
    // for each letter in the target word
    for (let i = 0; i < this.props.answer.length; i++) {
        let found = false;
        // loop through the pastGuesses
        for (let j = 0; j < this.props.pastGuesses.length; j++) {
            // and check each element of past guesses to see if it matches the
            if (this.props.answer[i] === this.props.pastGuesses[j]) {
                found = true;
            }
        }
        if (found) {
            str += this.props.answer[i];
            str += "\t";
            this.counter++;
        } else {
            str += "__\t";
        }
    }
    return str;
  }

  render() {
    return (
      <div>{this.setGameState()}</div>
    )
  }
}

export default PrintState;
