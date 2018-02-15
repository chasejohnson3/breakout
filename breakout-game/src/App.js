import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (     
        <div className="GameBoard"
        ref={(el) => { this.domNode = el }}>

        <Ball 
          x={this.state.ballX}
          y={this.state.ballY}/>
        
          <div className= "ball">
          </div>
          <ballObj>tes</ballObj>
          
        </div>      
    );
  }
}

class ballObj extends Component{
  constructor(props){
    super(props);
    this.state = {
      posX: 15,
      posY: 50,
    }
  }
  render(){    
    var stylesObj ={
      width: 30,
      height: 30,
      border: 1,
      // border-radius: 15,
      // background-color: black,
      // position: relative,
      top: 50,
      left: 50,
      // position: fixed,
      // left: 300,
      // top: 300,
    }     
    return(
      <div class="ball" style={this.props.stylesObj}/>
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

    }))
  }
}

export default App;
