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

const Minesweeper = () => {
	return (
		<StyledMinesweeperWrapper>
			<StyledMinesweeper>
				<Stage>
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
