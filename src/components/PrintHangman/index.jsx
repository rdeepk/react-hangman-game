import React, { Component } from 'react';

/**
 * Prints Hangman figure.
 */
class PrintHangman extends Component {
    constructor() {
        super();
        this.state = {
            displayHead: 0,
            displayBody: 0,
            displayLeftArm: 0,
            displayRightArm: 0,
            displayLeftLeg: 0,
            displayRightLeg: 0
        }
    }

    render() {
        return (
            <div className='hangmanContainer'>
                <div className='base'></div>
                <div className='post'></div>
                <div className='bar'></div>
                <div className='rope'></div>
                <div style={{ opacity: this.props.nWrong >= 1 ? 1 : 0 }} className='head transition'></div>
                <div style={{ opacity: this.props.nWrong >= 2 ? 1 : 0 }} className='body transition'></div>
                <div style={{ opacity: this.props.nWrong >= 3 ? 1 : 0 }} className='leftArm transition'></div>
                <div style={{ opacity: this.props.nWrong >= 4 ? 1 : 0 }} className='rightArm transition'></div>
                <div style={{ opacity: this.props.nWrong >= 5 ? 1 : 0 }} className='leftLeg transition'></div>
                <div style={{ opacity: this.props.nWrong >= 6 ? 1 : 0 }} className='rightLeg transition'></div>
            </div>
        )
    }
}

export default PrintHangman;