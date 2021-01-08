import Cell from "./components/Cell";

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

export const getMineCounts = () => {
	let minePositions = getMinePositions(STAGE_WIDTH, STAGE_HEIGHT, MINES);

	for (let minePos = 0; minePos < minePositions.length; minePos++) {
		// loop thru mine positions
		// add values that come from algorithm above to new array
		// loop thru new array and count every instance of each number ( if none number is null or blank)
		// store count and set that count to the number of mines surrounding the block with the corresponding key
		// [n-width-1][n-width][n-width+1]
		// [n-1      ][n      ][n+1      ]
		// [n+width-1][n+width][n+width+1]
	}
};

export const createStage = () => {
	let minePositions = getMinePositions(STAGE_WIDTH, STAGE_HEIGHT, MINES);
	let rows = [];
	for (let i = 0; i < STAGE_WIDTH; i++) {
		let squares = [];
		for (let j = 0; j < STAGE_HEIGHT; j++) {
			squares.push(
				<Cell
					key={16 * i + j}
					isMine={minePositions.indexOf(16 * i + j) === -1 ? false : true}
				/>
			);
		}
		rows.push(<div>{squares}</div>); // board row
	}

	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[i].length; j++) {
			if (rows.indexOf(i) === 0) {
				// if its the top row
				if (rows.indexOf(j) === 0) {
					//if its the top left
					//first check if current square is a mine, if it is go to the next
					//check east square rows[i][j+1]
					//check southeast square rows[i+1][j+1]
					//check south square[]
					//push a cell onto the square with a value stating if its a mine or not, if not,
					// push with value representing the number of mines around it.
				} else if (rows.indexOf(j) === STAGE_WIDTH - 1) {
					// top right
					//check west
					//check southwest
					//check south
				} else {
					// other blocks in top row
					//check west
					//check southwest
					//check south
					//check southeast
					//check east
				}
			} else if (rows.indexOf(i) === STAGE_HEIGHT - 1) {
				// bottom row
				if (rows.indexOf(j) === 0) {
					// bottom left
				} else if (rows.indexOf(j) === STAGE_WIDTH - 1) {
					// bottom right
				} else {
					// other blocks in bottom row
				}
			} else {
				// the rest of the blocks
			}
		}
	}

	return rows;
};

export const checkIfMine = () => {};
