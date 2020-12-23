const STAGE_WIDTH = 16;
const STAGE_HEIGHT = 16;

export const createStage = () => {
    Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([]));
}

export const getMinePositions = (STAGE_WIDTH, STAGE_HEIGHT) => {
    let randomNums = [];
    while (randomNums.length < 40) {
        let num = Math.floor(Math.random() * (STAGE_WIDTH * STAGE_HEIGHT));
        if (randomNums.indexOf(num) === -1) randomNums.push(num);
    }
    return randomNums;
}

export default STAGE_HEIGHT;
export default STAGE_WIDTH;