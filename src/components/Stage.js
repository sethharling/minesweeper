import React from "react";

import { StyledStage } from './styles/StyledStage';

import { createStage } from '../gameHelpers';

const Stage = ({ stage }) => (
	<StyledStage>
		{createStage()}
	</StyledStage>
);

export default Stage;
