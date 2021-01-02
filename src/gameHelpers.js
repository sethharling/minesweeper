import Cell from './components/Cell';

export const STAGE_WIDTH = 16;
export const STAGE_HEIGHT = 16;
export const MINES = 40;

export const getMinePositions = (x, y, numMines) => {
	let randomNums = [];
	while (randomNums.length < numMines) {
		let num = Math.floor(Math.random() * (x * y));
		if (randomNums.indexOf(num) === -1) randomNums.push(num);
	}
	return randomNums;
};

export const createStage = () => {
	let minePositions = getMinePositions(STAGE_WIDTH, STAGE_HEIGHT, MINES);
	let rows = [];
	for(var i = 0; i < STAGE_WIDTH; i++){
	  let squares = [];
	  for(var j = 0; j < STAGE_HEIGHT; j++){
		squares.push(<Cell key={16 * i + j} isMine={minePositions.indexOf(16 * i + j) === -1 ? false : true } />);
	  }
	  rows.push(<div>{squares}</div>); // board row
	}
	return rows;
}

export const checkIfMine = () => {

}