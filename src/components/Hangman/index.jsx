import React, { Component } from 'react';
import PrintHangman from '../PrintHangman';
import PrintState from '../PrintState';

class Hangman extends Component {

    constructor(props) {
        super(props);
        const index = Math.floor(Math.random() * this.props.words.length);
        this.state = {
            guess: "",
            randomWord: props.words[index],
            answer:props.words[index].split(''),
            nWrong:0,
            pastGuesses : [],
            won: false,
            gameOver: false,
            lost: false,
            message: ""
        }
    }

    displayKeypad = (keys) => {
        let keysJSX = keys.map((key, i) => {
            return <span><a key={i} href={key} onClick={(e) => {this.setInput(e)}}>{key}</a>
                    <span> </span></span>
        })
        return keysJSX;
    }

    setInput = (e) => {
        e.preventDefault();
        if(!this.state.gameOver) {
            this.setState({
                guess: e.target.href.substr(-1).toLowerCase()
            },() => {
                let match = false;
                //check if it is in pastguesses else add to it
                if (this.state.pastGuesses.indexOf(this.state.guess) !== -1) {
                    console.log('The letter is already guessed ', this.state.guess);
                    match = true;
                }
            
                if (!match) {
                    this.state.pastGuesses[this.state.pastGuesses.length] = this.state.guess;
                    this.setState(this.state.pastGuesses);
                    console.log(this.state.pastGuesses);
                    let found;
                    console.log("answer", this.state.answer);
                    if (this.state.answer.indexOf(this.state.guess) !== -1) {
                        found = true;
                        console.log("You found a relevant number");
                    }
            
                    if (!found) {
                        console.log("Oops! Incorrect Choice. Please try again");
                        this.setState({
                            nWrong: this.state.nWrong+1
                        }, () => {
                            this.props.updateHangman(this.state.nWrong);
                        })
                    }
                }
            })
        }
    }

    setWon = () => {
        console.log("setting won");
        this.setState({
            won: true,
            gameOver: true,
            message: "You Won"
        })
    }   

    setupGame = () => {
        const index = Math.floor(Math.random() * this.props.words.length);
        this.setState({
            randomWord: this.props.words[index],
            answer: this.props.words[index].split(''),
            nWrong:0,
            pastGuesses:[],
            won: false,
            gameOver: false,
            lost: false,
            message: ""
        })
    }

    render() {
        return (
            <div>
                <div className="keypad">{this.displayKeypad(this.props.keys)}</div>
                <PrintState pastGuesses={this.state.pastGuesses} answer={this.state.answer} setWon={this.setWon} />
                <div className='gameContainer'>
                    <h1>{this.state.message}</h1>
                    <h1>Currently Selected Guess is: {this.state.guess}</h1>
                    <h1>Your word is: {this.state.randomWord}</h1>
                    <h2>Your current guesses are: {this.state.pastGuesses.join(' ')}</h2>
                    <p> Wrongs: {this.state.nWrong}</p>
                </div>
                <div><a href="" onClick={this.setupGame}>Start New Game</a></div>
            </div>
        )
    }
}

export default Hangman