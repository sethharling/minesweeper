import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import flag from './pics/flag-pic.png';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBomb: false,
      flagged: false,
      numBombs: 0,
      squareNum: 0,
    };
  }

  render() {
    return (
      <button className="square">
        {}
      </button>
    );
  }
}

class Controls extends React.Component {
  render() {
    return (
      <div className="controls">
        <button className="reset-button"><img/></button>
        <button className="flag-button"><img src={flag} alt='flag'/></button>
        <div className="timer">000</div>
        <div className="mines-left">040</div>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      numRows: 16,
      numCols: 16,
    };
  }

  addNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == )
    }
  }

  componentDidMount() {
    const grid = [];
    for (let row = 0; row < this.state.numRows; row++) {
      const currentRow = [];
      for (let col = 0; col < this.state.numCols; col++) {
        currentRow.push([]);
      }
      grid.push(currentRow);
    }
    this.setState({grid});
  }

   render() {
    const {grid} = this.state;
    console.log(grid);
    return (
      <div className="grid">
         {grid.map((row, rowIdx) => {
           return (
             <div>
               {row.map((grid, gridIdx) => <Square></Square>)}
             </div>
           );
         })}
      </div>
    );
   }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-controls">
          <Controls/>
        </div>
        <div className="game-board">
          <Board/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);