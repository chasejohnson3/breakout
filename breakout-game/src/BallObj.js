import React, { Component } from 'react';
import './GameBoard.js';
import boardTop from './GameBoard.js';
import boardRight from './GameBoard.js';
// import boardBottom from './GameBoard.js';
import boardLeft from './GameBoard.js';

class BallObj extends Component {
    constructor(props) {
      super(props);
      this.state = {
        posX: 110,
        posY: 100,
        ballSpeedX: 2,
        ballSpeedY: 6,
      };
    }
  
    getPosX() {
      return this.state.posX;
    }
  
    getPosY() {
      return this.state.posY;
    }
  
    setPosX(speedX) {
      this.setState({
        posX: this.state.posX + speedX
      });
    }
  
    setPosY(speedY) {
      
      this.setState({
        posY: this.state.posY + speedY
      });
    }
  
    render() {
      var stylesObj = {
        top: this.state.posY,
        left: this.state.posX,
        borderRadius: global.ballDiameter,
      }
      return (
  
        <div class="ball" style={stylesObj} />
  
      );
    }
  
    componentDidMount() {
      this._updateInterval = window.setInterval(this.update.bind(this), 16);
    }
  
    componentWillUnmount() {
      window.clearInterval(this._updateInterval);
    }
  
    updateBallPos() {
      this.setState((prevState, props) => ({
        posX: prevState.posX + prevState.ballSpeedX,
        posY: prevState.posY + prevState.ballSpeedY
      }));
    }
  
    updateBallDir() {
      if (this.state.posX > global.boardWidth-global.ballDiameter || this.state.posX < 0) {
        this.setState((prevState, props) => ({
          ballSpeedX: -1 * prevState.ballSpeedX,
          //posY: prevState.posY + prevState.ballSpeedY
        }));
      }
      if (this.state.posY > global.boardHeight-global.ballDiameter || this.state.posY < 0) {
        this.setState((prevState, props) => ({
          ballSpeedY: -1 * prevState.ballSpeedY,
  
          //posY: prevState.posY + prevState.ballSpeedY
        }));
      }
    }
  
    showballPos() {
      console.log(this.state.posX)
      //console.log(this.state.posY)
    }
  
    update() {
      this.updateBallPos();
      //this.showballPos();
      this.updateBallDir();
    }
  }

  export default BallObj;