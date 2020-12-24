import React from "react";

//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Minesweeper = () => {
	return (
		<div>
			<Stage>
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
