import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';


class App extends Component {
  render() {
    return (
      // <div className="GameBoard"
      // ref={(el) => { this.domNode = el }}>
      <div>
        <GameBoard />
      </div>
    );
  }
}



export default App;
