import React, { Component } from 'react';
import PrintHangman from '../PrintHangman';

class Hangman extends Component {

    constructor() {
        super();
        this.state = {
            currentGuess: "",
            randomWord:"",
            answer:"",
            nWrong:0
        }
    }

    displayKeypad = (keys) => {
        let keysJSX = keys.map((key, i) => {
            return <a key={i} href={key} onClick={(e) => {this.setInput(e)}}>{key}</a>
        })
        return keysJSX;
    }

    setInput = (e) => {
        e.preventDefault();
        this.setState({
            currentGuess: e.target.href.substr(-1)
        })
    }

    componentDidMount() {
        this.getRandomWord();
        //this.setupGame();
    }

    getRandomWord = () => {
        const index = Math.floor(Math.random() * this.props.words.length);
        this.setState({
            randomWord: this.props.words[index]
        })
    }

    setupGame = () => {
        // choose a new word
        this.setState({
            answer: this.getRandomWord().split(''),
            nWrong:0
        }) 
        // reset the total of wrong guesses
        let won = false;
        // empty our array of previously guessed letters
        let pastGuesses = [];
        //printHangMan();
    }

    render() {
        return (
            <div>
                <div className="keypad">{this.displayKeypad(this.props.keys)}</div>
                <PrintHangman nWrong={this.state.nWrong} />
                <div className='gameContainer'>
                    <h1>Currently Selected Guess is: {this.state.currentGuess}</h1>
                    <h1>Your word is: {this.state.randomWord}</h1>
                    <h2>Your current guesses are:</h2>
                </div>
            </div>
        )
    }
}

export default Hangman