import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import flag from './pics/flag-pic.png';
import resetIcon from './pics/reset-icon.jpg';

class Square extends React.Component {
  
  render() {
    return (
      <div 
        className="square" 
        onClick={() => this.props.onClick()}
      >
        
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: this.props.height,
      numCols: this.props.width,
      numMines: this.props.mines,
      grid: [],
    };
  }

  handleCLick(square) {

  }

  //creates an empty array to start with
  createArray(width, height) {

  }

  //plantes the mines randomly
  plantMines(mines) {

  }

  //checks surrounding squares to see if its a mine
  getSurrounding() {

  }

  //renders board grid using helper functions
  renderBoard() {

  }

  render() {
    return (
      <Square />
    );
  }
}

class Game extends React.Component {
  state = {
    height: 16,
    width: 16,
    mines: 40,
  }

  render() {
    return (
      <div>
        <Board height={this.height} width={this.width} mines={this.mines} />
      </div>
    )
  }
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);