import React from "react";

import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

const Stage = ({ height, width }) => {
	<StyledStage width={width} height ={height} >
		<Cell key={0} isMine={false} isFlagged={false}>cell</Cell>
	</StyledStage>
};

export default Stage;
