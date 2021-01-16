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

let minePositions = getMinePositions(STAGE_WIDTH, STAGE_HEIGHT, MINES);

export const getMineCounts = () => {
	let surroundingCells = [];

	for (let minePos = 0; minePos < minePositions.length; minePos++) { // loop thru mine positions

		// [n-height-1][n-1][n+height-1]	[0][16][32]
		// [n-height  ][n  ][n+height  ]	[1][17][33]  <-- if height is 16
		// [n-height+1][n+1][n+height+1]	[2][18][34]

		// add values that come from algorithm above to new array

		//check if in top row
		if (minePos % STAGE_HEIGHT === 0) {

			//[n-height  ][n  ][n+height  ]
			//[n-height+1][n+1][n+height+1]

			//dont include first and last column
			if (!(minePos >= 0 && minePos <= STAGE_HEIGHT) 
				&& !(minePos >= ((STAGE_HEIGHT * STAGE_WIDTH) - STAGE_HEIGHT)
				&& minePos <= (STAGE_HEIGHT * STAGE_WIDTH))) {

				// [n-height]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT));
				// [n-height+1]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT + 1));
				// [n+1]
				surroundingCells.push((minePositions[minePos] + 1));
				// [n+height+1]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT + 1));
				// [n+height]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT));
			}
			
		} else if (minePos % STAGE_HEIGHT === (STAGE_HEIGHT - 1)) { //check if in bottom row

			//[n-height-1][n-1][n+height-1]
			//[n-height  ][n  ][n+height  ]

			//dont include first and last column
			if (!(minePos >= 0 && minePos <= STAGE_HEIGHT) 
				&& !(minePos >= ((STAGE_HEIGHT * STAGE_WIDTH) - STAGE_HEIGHT)
				&& minePos <= (STAGE_HEIGHT * STAGE_WIDTH))) {
				// n-height
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT));
				// n - height - 1
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT - 1));
				// n-1
				surroundingCells.push((minePositions[minePos] - 1)); 
				// n+height-1
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT - 1));
				//n+ height
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT));
			}
			
		} else if (minePos >= 0 && minePos <= STAGE_HEIGHT) { // check if in first column
			//check if in first column and first row
			if (minePos % STAGE_HEIGHT === 0) {
				//[n  ][n+height  ]
				//[n+1][n+height+1]

				// [n+1]
				surroundingCells.push((minePositions[minePos] + 1));
				// [n+height+1]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT + 1));
				// [n+height]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT));

			} else if (minePos % STAGE_HEIGHT === (STAGE_HEIGHT - 1)) { //check if in first column and last row
				// [n-1][n+height-1]
				// [n  ][n+height  ]

				// [n-1]
				surroundingCells.push((minePositions[minePos] - 1));
				// [n+height-1]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT - 1));
				// [n+height]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT));

			} else { //the rest of the cells in the first column
				//[n-1][n+height-1]
				//[n  ][n+height  ]
				//[n+1][n+height+1]

				// [n-1]
				surroundingCells.push((minePositions[minePos] - 1));
				// [n+height-1]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT - 1));
				// [n+height]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT));
				// [n+height+1]
				surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT + 1));
				// [n+1]
				surroundingCells.push((minePositions[minePos] + 1));

			}

		//check if in last column
		} else if (minePos >= ((STAGE_HEIGHT * STAGE_WIDTH) - STAGE_HEIGHT) && minePos <= (STAGE_HEIGHT * STAGE_WIDTH)) {
			//check if in last column and first row
			if (minePos % STAGE_HEIGHT === 0) {
				//[n-height  ][n  ]
				//[n-height+1][n+1]

				// [n-height]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT));
				// [n-height+1]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT + 1));
				// [n+1]
				surroundingCells.push((minePositions[minePos] + 1));

			} else if (minePos % STAGE_HEIGHT === (STAGE_HEIGHT - 1)) { //check if in last column and last row
				//[n-height-1][n-1]
				//[n-height  ][n  ]

				// [n-height-1]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT - 1));
				// [n-height]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT));
				// [n-1]
				surroundingCells.push((minePositions[minePos] - 1));

			} else { //the rest of blocks in last row
				//[n-height-1][n-1]
				//[n-height  ][n  ]
				//[n-height+1][n+1]

				//[n-1]
				surroundingCells.push((minePositions[minePos] - 1));
				//[n-height-1]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT - 1));
				//[n-height]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT));
				//[n-height+1]
				surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT + 1));
				//[n+1]
				surroundingCells.push((minePositions[minePos] + 1));

			}
		} else { //if in any other location:

			//[n-height-1][n-1][n+height-1]
			//[n-height  ][n  ][n+height  ]
			//[n-height+1][n+1][n+height+1]

			// [n-height-1]
			surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT - 1));
			// [n-1]
			surroundingCells.push((minePositions[minePos] - 1));
			// [n+height-1]
			surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT - 1));
			// [n+height]
			surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT));
			// [n+height+1]
			surroundingCells.push((minePositions[minePos] + STAGE_HEIGHT + 1));
			// [n+1]
			surroundingCells.push((minePositions[minePos] + 1));
			// [n-height+1]
			surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT + 1));
			// [n-height]
			surroundingCells.push((minePositions[minePos] - STAGE_HEIGHT));

		}
	}
	// loop thru new array and count every instance of each number (if none, number is null or blank)
	// store count and set that count to the number of mines surrounding the block with the same key
	// storing inside 2D array where [[cell key, number of mines surrounding], ...]
	let mineCounts = [];
	for (let num = 0; num < surroundingCells.length; num ++) { // loop thru new array

		//finding count of each number
		let count = 0;
		for(let i = 0; i < surroundingCells.length; ++i){
			if(surroundingCells[i] === num){
				count++;
			}
		}

		//create second array and push key num and num of surrounding mines
		let mineCount = [];
		mineCount.push(surroundingCells[num]);
		mineCount.push(count);
		mineCounts.push(mineCount);

	}
	console.log(minePositions);
	console.log(surroundingCells);
	console.log(mineCounts);
	return mineCounts;
};

//create function that will return index of array inside mineCounts that has the right key
export const retIndx = () => {};

export const createStage = () => {
	let mineCounts = getMineCounts();
	let rows = [];
	for (let i = 0; i < STAGE_WIDTH; i++) {
		let squares = [];
		for (let j = 0; j < STAGE_HEIGHT; j++) {
			squares.push(
				<Cell
					key={16 * i + j}
					isMine={minePositions.indexOf(16 * i + j) === -1 ? false : true}
					//surroundingMines={minePositions.indexOf(16 * i + j) === -1 ? mineCounts[(16 * i + j)][1] : null}
				/>
			);
		}
		rows.push(<div>{squares}</div>); // board row
	}

	return rows;
};

export const checkIfMine = () => {};
