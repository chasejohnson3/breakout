import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (     
        <div className="GameBoard"
        ref={(el) => { this.domNode = el }}>

        <BallObj/>
          
        </div>
    );
  }
}

class BallObj extends Component{
  constructor(props){
    super(props);
    this.state = {
      posX: 110,
      posY: 100,
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
      <div class="ball" style={stylesObj}/>
    )   ;
  }

  componentDidMount(){
    this._updateInterval = window.setInterval(this.update, 16);
  }

  componentWillUnmount(){
    window.clearInterval(this._updateInterval);
  }

  updateBallPos(){
    this.setState((prevState, props) => ({
      ballX: prevState.ballX + prevState.ballSpeedX,
      ballY: prevState.ballY + prevState.ballSpeedY
    }));
  }

  update(){
    updateBallPos();
  }
}

export default App;
