import React, { Component } from 'react';
import Brick from './Brick.js';
import BallObj from './BallObj';

global.boardTop = 100;
global.boardLeft = 100;
global.boardWidth = 400;
global.ballDiameter = 30;
global.boardHeight = 500;
global.brickWidth = 80;
global.brickHeight = 30;

const originalLocations = [];

var row;
var col;
for(row=0; row<3; row++){
  for(col=0; col<5; col++)  {
    originalLocations.push({x:global.boardLeft+col*global.brickWidth,y:global.boardTop+row*global.brickHeight});
  }
}
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      bricks : originalLocations.map(ele =>{
        return <Brick x={ele.x} y={ele.y}/>
      }),
      ball : <BallObj/>
    }
  }
  checkForCollisions = (ballPos) => {
    // Pass callback to ball obj 
    // check that the ball is not colliding with any of the bricks
    this.state.bricks.forEach(element => {
      const x = element.getPosX();
      const y  = element.getPosY();

      if(this.state.ball.getPosY() < 10){// check the ball position verses the bricks posit){
        element.wasHit();   
      }
    });

  }
  render() {
    const styleObj = {
      top: global.boardTop,
      left: global.boardLeft,
      height: global.boardHeight,
      width: global.boardWidth,
    }
    return (
      
      <div class="GameBoard" style={styleObj}>
        {this.state.bricks}
        <BallObj check={this.checkForCollisions}/>
      </div>
      
    );
  }
}

export default GameBoard;
