import styled from "styled-components";

export const StyledCell = styled.div`
	background-color: ${props => (props.isMine === true ? 'rgba(255, 10, 10, 0.8)' : 'rgba(219, 217, 217, 0.8)')};
	width: 25px;
	height: 25px;
	border: 4px solid;
	border-bottom-color: rgba(219, 217, 217, 0.1);
  	border-right-color: rgba(219, 217, 217, 1);
  	border-top-color: rgba(219, 217, 217, 1);
  	border-left-color: rgba(219, 217, 217, 0.3);
	margin: 2px;

	:hover {
		background-color: grey;
	}
`;
