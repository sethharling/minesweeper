import React from 'react';
import { StyledControls } from './styles/StyledControls';

import Display from './Display';
import StartButton from './StartButton';
import FlagButton from './FlagButton';
import Difficulty from './Difficulty';

const Controls = ({ time, mines, gameOver, flagEnabled, difficulty }) => (
    <StyledControls>
        <Difficulty difficulty={difficulty} />
        <Display label="Time" text="000" />
		<StartButton />
		<Display label="Mines" text="000" />
		<FlagButton />
    </StyledControls>
);

export default Controls;