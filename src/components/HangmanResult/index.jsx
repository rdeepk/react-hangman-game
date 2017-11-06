import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PrintState from '../PrintState';

/**
 * Playing logic for hangman game.
 */
class HangmanResult extends Component {

    constructor(props) {
        super(props);
        const index = Math.floor(Math.random() * this.props.words.length);
        this.state = {
            guess: "",
            randomWord: props.words[index],
            answer: props.words[index].split(''),
            nWrong: 0,
            pastGuesses: [],
            won: false,
            gameOver: false,
            lost: false,
            message: "",
            incorrectMessage: "",
            disabledKeypad: false
        }
    }

    /**
     * Takes an array of letters and display the keypad for user input. 
    */
    displayKeypad = (keys) => {
        let keysJSX = keys.map((key, i) => {
            return <span><a key={i} style={this.state.disabledKeypad ? { pointerEvents: "none", background: "#ccc", color: "#ddd" } : null} href={key} onClick={(e) => { this.setInput(e) }}>{key}</a></span>
        })
        return keysJSX;
    }

    /**
    * Update the loacl storage with every state change. 
    */
    componentDidUpdate() {
        this.setLocalStorage();
    }

    /**
    * Sets the local storage from current state. 
    */
    setLocalStorage = () => {
        localStorage.setItem("currentGame", JSON.stringify({
            guess: this.state.guess,
            randomWord: this.state.randomWord,
            answer: this.state.answer,
            nWrong: this.state.nWrong,
            pastGuesses: this.state.pastGuesses,
            won: this.state.won,
            gameOver: this.state.gameOver,
            lost: this.state.lost,
            message: this.state.message,
            incorrectMessage: this.state.incorrectMessage,
            disabledKeypad: this.state.disabledKeypad
        }))
    }

    /**
    * Gets the previous state from local storage and update the component state. 
    */
    componentDidMount() {
        let currentGameData = JSON.parse(localStorage.getItem("currentGame"));
        if (currentGameData) {
            this.setState({
                guess: currentGameData.guess,
                randomWord: currentGameData.randomWord,
                answer: currentGameData.answer,
                nWrong: currentGameData.nWrong,
                pastGuesses: currentGameData.pastGuesses,
                won: currentGameData.won,
                gameOver: currentGameData.gameOver,
                lost: currentGameData.lost,
                message: currentGameData.message,
                incorrectMessage: currentGameData.incorrectMessage,
                disabledKeypad: currentGameData.disabledKeypad
            })
        }
    }

    /**
    * Input handler - validates the input for correct or incorrect guess.
    */
    setInput = (e) => {
        e.preventDefault();
        this.setState({
            guess: e.target.href.substr(-1).toLowerCase()
        }, () => {
            let match = false;
            //check if it is in pastguesses else add to it
            if (this.state.pastGuesses.indexOf(this.state.guess) !== -1) {
                this.setState({
                    incorrectMessage: "The letter is already guessed"
                })
                // console.log('The letter is already guessed ', this.state.guess);
                match = true;
            }

            if (!match) {
                this.setState({
                    incorrectMessage: ""
                })
                this.state.pastGuesses[this.state.pastGuesses.length] = this.state.guess;
                let found;
                console.log("answer", this.state.answer);
                if (this.state.answer.indexOf(this.state.guess) !== -1) {
                    found = true;
                    // console.log("You found a relevant number");
                }
                this.checkWonCondition();

                if (!found) {
                    // console.log("Oops! Incorrect Choice. Please try again");
                    this.setState({
                        nWrong: this.state.nWrong + 1
                    }, () => {
                        this.props.updateNWrongs(this.state.nWrong);
                        this.isGameOver();
                    })
                }
            }
        })
    }

    /**
    * Compare user guesses array with expected answer to check if user has won. 
    */
    checkWonCondition = () => {
        let counter = 0;
        let str = "";
        // for each letter in the target word
        for (let i = 0; i < this.state.answer.length; i++) {
            let found = false;
            // loop through the pastGuesses
            for (let j = 0; j < this.state.pastGuesses.length; j++) {
                // and check each element of past guesses to see if it matches the
                if (this.state.answer[i] === this.state.pastGuesses[j]) {
                    found = true;
                }
            }
            if (found) {
                str += this.state.answer[i];
                str += "\t";
                counter++;
            } else {
                str += "__\t";
            }
        }
        if (counter === this.state.answer.length) {
            this.setState({
                won: true,
                lost: false,
                gameOver: true,
                message: "Congratulations! You have Won",
                disabledKeypad: true
            })
            this.props.setWonStats(true)
        }
    }

    /**
    * Check if the game is over and set the state.
    */
    isGameOver = () => {
        if (this.state.nWrong >= 6) {
            this.setState({
                won: false,
                lost: true,
                gameOver: true,
                message: "You have been hanged! The answer is '" + this.state.randomWord + "'",
                disabledKeypad: true
            })
            this.props.setWonStats(false)
            return true;
        }
        if (this.state.won) {
            return true;
        }
        return false;
    }

    /**
    * Sets the state on the click of start new game. 
    */
    setupGame = (e) => {
        e.preventDefault();
        const index = Math.floor(Math.random() * this.props.words.length);
        this.setState({
            randomWord: this.props.words[index],
            answer: this.props.words[index].split(''),
            nWrong: 0,
            pastGuesses: [],
            won: false,
            gameOver: false,
            lost: false,
            message: "",
            disabledKeypad: false
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="keypad">{this.displayKeypad(this.props.keys)}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 game-state">
                        <PrintState pastGuesses={this.state.pastGuesses} answer={this.state.answer} setWon={this.setWon} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 messages">
                        <h3>{this.state.message}</h3>
                        <p>{this.state.incorrectMessage}</p>
                        <p>Your current guesses are: {this.state.pastGuesses.join(' ')}</p>
                        {/* <p>Word is: {this.state.randomWord}</p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 new-btn">
                        <a className="btn" href="" onClick={(e) => { this.setupGame(e) }}>Start New Game</a>
                    </div>
                    <div className="col-sm-6 view-stats">
                        <Link className="btn stats-btn" to="stats">View Stats</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default HangmanResult;