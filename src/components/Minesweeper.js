import React from "react";

//Styled Components
import {
	StyledMinesweeper,
	StyledMinesweeperWrapper,
} from "./styles/StyledMinesweeper";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const STAGE_HEIGHT = 16;
const STAGE_WIDTH = 16;

const Minesweeper = () => {
	return (
		<StyledMinesweeperWrapper>
			<StyledMinesweeper>
				<Stage width={STAGE_WIDTH} height={STAGE_HEIGHT}>
					<top>
						<Display>Timer</Display>
						<Display>Mines Left</Display>

						<StartButton>Start Button</StartButton>
					</top>
				</Stage>
			</StyledMinesweeper>
		</StyledMinesweeperWrapper>
	);
};

export default Minesweeper;
