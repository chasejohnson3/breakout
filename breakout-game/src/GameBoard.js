import React, { Component } from 'react';
import Brick from './Brick.js';
import BallObj from './BallObj';

const originalLocations = [{x:100,y:100},{x:120,y:100}]
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      bricks : originalLocations.map(function(ele, i){
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
    return (
      <div class="GameBoard">
        {this.state.bricks}
        <BallObj check={this.checkForCollisions}/>
      </div>
    );
  }
}

export default GameBoard;
