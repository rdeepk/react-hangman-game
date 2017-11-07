import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Display the counts of lost and won games.
 */
class Stats extends React.Component {
    render() {

        //use stats from local storage if exists
        let storageStats = JSON.parse(localStorage.getItem("hangmanStats"));
        return(
            <div className="app">
                <div className="row header">
                    <div className="col-sm-12">
                    <h1>HANGMAN</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 stats">
                        <h1>Your games statistics are: </h1>
                        <p>Played: { storageStats ? storageStats.wonCount + storageStats.lostCount : 
                                                    this.props.won + this.props.lost}</p>
                        <p>Lost:  { storageStats ? storageStats.lostCount : this.props.lost}</p>
                        <p>Won: { storageStats ? storageStats.wonCount : this.props.won}</p>
                        <p>Best Score with tries: {this.props.highestScore}</p> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 link">
                        <Link className="stats-btn" to="/">Back</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;