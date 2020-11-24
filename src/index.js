import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import flag from './pics/flag-pic.png';
import resetIcon from './pics/reset-icon.jpg';

function getRandomNumbers() {
  let randomNumbers = [];
    while (randomNumbers.length < 40) {
      let num = Math.floor(Math.random() * 256) + 1;
      if (randomNumbers.indexOf(num) === -1) randomNumbers.push(num);
    }
    console.log(randomNumbers)
    return randomNumbers;
}

let bombNums = getRandomNumbers();

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBomb: false,
      flagged: false,
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
        <button className="reset-button"><img src={resetIcon} alt="reset"/></button>
        <button className="flag-button"><img src={flag} alt="flag"/></button>
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
      keyNum: 0,
      numBombs: 0,
    };
  }
  
  assignNumber() {
    this.state.keyNum ++;
    if (bombNums.indexOf(this.state.keyNum) === -1) {
      return this.state.keyNum;  
    } else {
      this.state.numBombs ++;
      return 'BOMB' + this.state.numBombs;
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
               {row.map((grid, gridIdx) => <Square
                  key={this.assignNumber()}
                  
                  >
                  
               </Square>)}
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
      <div>
        <div className="title">Minesweeper</div>
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