import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (     
        // <div className="GameBoard"
        // ref={(el) => { this.domNode = el }}>
        <div>
        <GameBoard/>
        <BallObj/>
        
        
          
        </div>
    );
  }
}

class GameBoard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class="GameBoard"/>
    );
  }
}

/*
  class for the brick class, it will know if the ball hit it or not
 */
class Brick extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      show: true,
      number:1,
    }
  }
  // render(){
  //   if (this.show){
  //     return(<Brick/>);
  //   }
  // }
}


class BallObj extends Component{
  constructor(props){
    super(props);
    this.state = {
      posX: 110,
      posY: 100,
      ballSpeedX:2,
      ballSpeedY: 6,
    };
  }  

  setPosX(speedX){
    this.setState({
      posX: this.state.posX + speedX
    });
  }

  setPosY(speedY){
    this.setState({
      posY: this.state.posY + speedY
    });
  }

  render(){    
    var stylesObj ={
      top: this.state.posY,
      left: this.state.posX,
    }     
    return(
      <div class="GameBoard">
        <div class="ball" style={stylesObj}/>
        <div class="brick"/>
      </div>
    )   ;
  }

  componentDidMount(){
    this._updateInterval = window.setInterval(this.update.bind(this), 16);
  }

  componentWillUnmount(){
    window.clearInterval(this._updateInterval);
  }

  updateBallPos(){
    this.setState((prevState, props) => ({
      posX: prevState.posX + prevState.ballSpeedX,
      posY: prevState.posY + prevState.ballSpeedY
    }));
  }

  updateBallDir()
  {
    if(this.state.posX > 385 || this.state.posX <15 ) {
      this.setState((prevState, props) => ({
        ballSpeedX: -1 * prevState.ballSpeedX,
        //posY: prevState.posY + prevState.ballSpeedY
      }));
    }
    if(this.state.posY> 485 || this.state.posY<45)
    {
      this.setState((prevState, props) => ({
        ballSpeedY: -1 * prevState.ballSpeedY,
        
        //posY: prevState.posY + prevState.ballSpeedY
      }));
    }
  }

  showballPos()
  {
    console.log(this.state.posX)
    //console.log(this.state.posY)
  }

  update(){
    this.updateBallPos();
    //this.showballPos();
    this.updateBallDir();
  }
}

export default App;
