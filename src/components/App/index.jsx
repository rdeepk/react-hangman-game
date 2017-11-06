import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Hangman from '../Hangman';
import Stats from '../Stats';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        won: 0,
        lost: 0
      }
    }
    
    setWonStats = (won) => {
      if(won) {
        this.setState({
          won: this.state.won + 1
        })
      } else {
        this.setState({
          lost: this.state.lost + 1
        })
      }
    }

  render() {
    return (
      <Switch>
      <Route path="/" exact render={(props) => (<Hangman keys={this.props.keys} words={this.props.words} setWonStats={this.setWonStats} />
       )} />
      <Route path="/stats" render={(props) => (<Stats won={this.state.won} lost={this.state.lost} />
       )} />
    </Switch>
    )
  }
}

export default App;
