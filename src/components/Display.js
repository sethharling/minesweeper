import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ label, text }) => (
	<StyledDisplay>
		<div>{label}</div>
		<div>{text}</div>
	</StyledDisplay>
);

export default Display;
