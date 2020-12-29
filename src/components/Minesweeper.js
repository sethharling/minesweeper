import React from "react";
import { createStage } from '../gameHelpers';

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Minesweeper = () => {


	const startGame = () => {};

	return (
		<div>
			<Stage stage={createStage()} >
				<top>
					<div>
						<Display label="Time" text=" " />
						<Display label="Mines" text="000" />
					</div>
					<StartButton />
				</top>
			</Stage>
		</div>
	);
};

export default Minesweeper;
