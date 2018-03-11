import React, { Component } from 'react';
/*
  class for the brick class, it will know if the ball hit it or not
 */
class Brick extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: true,
        number: 1,
        posX: props.x,
        posY: props.y,
        
      }  
    }
  
    wasHit() {
      this.setState({show:true});
    }
  
    update() {
      this.updateWasHit();
    }
  
    updateWasHit() {
      this.wasHit();
    }
  
    componentDidMount() {
      this._updateInterval = window.setInterval(this.update.bind(this), 16);
    }
  
    componentWillUnmount() {
      window.clearInterval(this._updateInterval);
    }
  
  
  
    render() {
        var stylesObj = {
            top: this.state.posY,
            left: this.state.posX,
            height: global.brickHeight,
            width: global.brickWidth,
        }
      if (this.state.show) {
        return (
        <div className="brick" style={stylesObj}/>
          );
      }else{
        return null;
      }
    }
  }

  export default Brick;