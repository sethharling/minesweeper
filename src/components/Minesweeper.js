import React from "react";
import { createStage } from '../gameHelpers';
import { StyledMinesweeper, StyledMinesweeperWrapper } from './styles/StyledMinesweeper';

//Components
import Stage from "./Stage";
import Controls from './Controls';

const Minesweeper = () => {
	let gameOver, flagEnabled = false;
	let time, mines = 0;

	const resetTime = () => {};
	
	const startGame = () => {
		gameOver = false;
	};

	return (
		<StyledMinesweeperWrapper>
			<StyledMinesweeper>
				
				<Controls time={time} mines={mines} gameOver={gameOver} flagEnabled={flagEnabled} />
				<Stage stage={createStage()} >
					
				</Stage>
			</StyledMinesweeper>
		</StyledMinesweeperWrapper>
	);
};

export default Minesweeper;
