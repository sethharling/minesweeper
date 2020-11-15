import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      numRows: 16,
      numCols: 16,
    };
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