import React, { Component } from 'react';
import Hangman from '../Hangman';

class PrintHangman extends Component {
      constructor() {
          super();
          this.state = {
              displayHead: "none",
              displayBody: "none",
              displayLeftArm: "none",
              displayRightArm: "none",
              displayLeftLeg: "none",
              displayRightLeg: "none"
          }
      }

    render() {
        return (
            <div className='hangmanContainer'>
                <div className='base'></div>
                <div className='post'></div>
                <div className='bar'></div>
                <div className='rope'></div>
                <div style={{display:this.props.nWrong >=1 ? "block" : "none"}} className='head'></div>
                <div style={{display:this.props.nWrong >=2 ? "block" : "none"}} className='body'></div>
                <div style={{display:this.props.nWrong >=3 ? "block" : "none"}} className='leftArm'></div>
                <div style={{display:this.props.nWrong >=4 ? "block" : "none"}} className='rightArm'></div>
                <div style={{display:this.props.nWrong >=5 ? "block" : "none"}} className='leftLeg'></div>
                <div style={{display:this.props.nWrong >=6 ? "block" : "none"}} className='rightLeg'></div>
            </div>
            )
        }
}

export default PrintHangman;
