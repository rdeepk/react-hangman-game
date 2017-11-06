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

    componentDidMount() {
      localStorage.setItem("hangmanStats", JSON.stringify({
        wonCount: 0,
        lostCount: 0
      }))
    }
    
    setWonStats = (won) => {
      let storageStats = JSON.parse(localStorage.getItem("hangmanStats"));
      if(won) {
        if(storageStats) {
          localStorage.setItem("hangmanStats", JSON.stringify({
            wonCount: storageStats.wonCount + 1,
            lostCount: storageStats.lostCount
          }))
        } else {
          localStorage.setItem("hangmanStats", JSON.stringify({
            wonCount: this.state.won + 1,
            lostCount: this.state.lost
          }))
        }
        this.setState({
          won: this.state.won + 1
        })
      } else {
        if(storageStats) {
          localStorage.setItem("hangmanStats", JSON.stringify({
            wonCount: storageStats.wonCount,
            lostCount: storageStats.lostCount+ 1
          }))
        } else {
          localStorage.setItem("hangmanStats", JSON.stringify({
            wonCount: this.state.won,
            lostCount: this.state.lost + 1
          }))
        }
        this.setState({
          lost: this.state.lost + 1
        })
      }
      console.log(localStorage.getItem("hangmanStats"));
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
