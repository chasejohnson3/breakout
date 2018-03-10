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
        posX: 1,
        posY: 1,
        top: props.y,
        left: props.x,
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
            top: 1,
            left: 1,
            show: true,
          }
      if (this.show) {
        return (
        <div className="Brick" style={stylesObj}>
  
        </div>);
      }else{
        return null;
      }
    }
  }

  export default Brick;