import React from 'react';
import {Link} from 'react-router-dom';

class Stats extends React.Component {
    render() {
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
                        <p>Played: {this.props.won + this.props.lost}</p>
                        <p>Lost: {this.props.lost}</p>
                        <p>Won: {this.props.won}</p>
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