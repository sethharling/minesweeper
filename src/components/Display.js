import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, label, text }) => (
	<StyledDisplay>
		{label}
		{text}
	</StyledDisplay>
);

export default Display;
