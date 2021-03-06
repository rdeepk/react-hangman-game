import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Hangman from '../Hangman';
import Stats from '../Stats';
import './App.css';

/**
 * Top level Parent component, handles the full application.
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      won: 0,
      lost: 0,
      highestScore: 0
    }
  }

  /**
  * Sets the local storage stats if do not already exist.
  */
  componentDidMount() {
    let storageStats = JSON.parse(localStorage.getItem("hangmanStats"));
    localStorage.setItem("hangmanStats", JSON.stringify({
      wonCount: storageStats ? storageStats.wonCount : 0,
      lostCount: storageStats ? storageStats.lostCount : 0
    }))
  }

  /**
  * Sets the won and lost game stats. It uses local storage if exists or otherwise use component state.
  */
  setWonStats = (won) => {
    let storageStats = JSON.parse(localStorage.getItem("hangmanStats"));
    if (won) {
      if (storageStats) {
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
      if (storageStats) {
        localStorage.setItem("hangmanStats", JSON.stringify({
          wonCount: storageStats.wonCount,
          lostCount: storageStats.lostCount + 1
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

  setHighestScore = (score) => {
    console.log("setting score");
    this.setState({
      highestScore: score
    })
  }

  
  render() {
    return (
      <Switch>
        {/* <Route path="/" exact render={(props) => (<Hangman keys={this.props.keys} words={this.props.words} setWonStats={this.setWonStats} />
       )} /> */}
        <Route path="/" exact render={() => {
          return <Hangman keys={this.props.keys} words={this.props.words} setWonStats={this.setWonStats} setHighestScore={this.setHighestScore} />
        }}
        />
        <Route path="/stats" render={(props) => (<Stats won={this.state.won} lost={this.state.lost} highestScore={this.state.highestScore} />
        )} />
      </Switch>
    )
  }
}

export default App;
