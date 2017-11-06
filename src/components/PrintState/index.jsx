import React, { Component } from 'react';

/**
 * Prints the updated string after every user input.
 */
class PrintState extends Component {
    constructor() {
        super();
        this.state = {
            won: false
        }
    }

    /**
     * returns updated string by checking user input.
     */
    setGameState = () => {
        let counter = 0;
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
                counter++;
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
