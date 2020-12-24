const getMinePositions = (x, y, numMines) => {
	let randomNums = [];
	while (randomNums.length < numMines) {
		let num = Math.floor(Math.random() * (x * y));
		if (randomNums.indexOf(num) === -1) randomNums.push(num);
	}
	return randomNums;
};
