import React from "react";

import { StyledCell } from "./styles/StyledCell";

const Cell = ({ callback, isMine }) => (
    <StyledCell onClick={callback} isMine={isMine} />
);

export default Cell;
