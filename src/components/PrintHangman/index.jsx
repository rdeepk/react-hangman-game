import React, { Component } from 'react';

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

      ComponentWillMount() {
        switch(this.props.nWrong) {
            case 1:
                this.setState({
                    displayHead: "block"
                })
            break;
            case 2:
                this.setState({
                    displayBody: "block"
                })
            break;
            case 3:
                this.setState({
                    displayLeftArm: "block"
                })
            break;
            case 4:
                this.setState({
                    displayRightArm: "block"
                })
            break;
            case 5:
                this.setState({
                    displayLeftLeg: "block"
                })
            break;
            case 6:
                this.setState({
                    displayRightLeg: "block"
                })
            break;
            default:
                this.setState({
                    displayHead: "none",
                    displayBody: "none",
                    displayLeftArm: "none",
                    displayRightArm: "none",
                    displayLeftLeg: "none",
                    displayRightLeg: "none"
                })
            break;
        }
      }

    render() {
        return (
            <div className='hangmanContainer'>
                <div className='base'></div>
                <div className='post'></div>
                <div className='bar'></div>
                <div className='rope'></div>
                <div style={{display:this.state.displayHead}} className='head'></div>
                <div style={{display:this.state.displayBody}} className='body'></div>
                <div style={{display:this.state.displayLeftArm}} className='leftArm'></div>
                <div style={{display:this.state.displayRightArm}} className='rightArm'></div>
                <div style={{display:this.state.displayLeftLeg}} className='leftLeg'></div>
                <div style={{display:this.state.displayRightLeg}} className='rightLeg'></div>
            </div>
            )
        }
}

export default PrintHangman;
