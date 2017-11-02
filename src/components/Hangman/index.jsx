import React, { Component } from 'react';
import PrintHangman from '../PrintHangman';
import PrintState from '../PrintState';

class Hangman extends Component {

    constructor() {
        super();
        this.state = {
            guess: "",
            randomWord:"",
            answer:"",
            nWrong:0,
            pastGuesses : []
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
                    })
                    
                }
            }
        })
        
    }

    componentDidMount() {
        this.setupGame();
    }

    setupGame = () => {
        const index = Math.floor(Math.random() * this.props.words.length);
        this.setState({
            randomWord: this.props.words[index],
            answer: this.props.words[index].split(''),
            nWrong:0,
            pastGuesses:[]
        })
    }

    render() {
        return (
            <div>
                <div className="keypad">{this.displayKeypad(this.props.keys)}</div>
                <PrintState pastGuesses={this.state.pastGuesses} answer={this.state.answer} />
                <div className='gameContainer'>
                    <h1>Currently Selected Guess is: {this.state.guess}</h1>
                    <h1>Your word is: {this.state.randomWord}</h1>
                    <h2>Your current guesses are: </h2>
                </div>
            </div>
        )
    }
}

export default Hangman