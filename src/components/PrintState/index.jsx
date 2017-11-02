import React, { Component } from 'react';


class PrintState extends Component {

  getGameState = () => {
    let str = "";
    let counter = 0;
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
            counter++;
        } else {
            str += "__\t";
        }
    }
    if (counter === this.props.answer.length) {
        let won = true;

    }
    return str;
  }

  render() {
    return (
      <div>{this.getGameState()}</div>
    )
  }
}

export default PrintState;
