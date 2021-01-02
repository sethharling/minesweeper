import styled from 'styled-components';

import flagIcon from '../../img/flag-pic.png';

export const StyledFlagButton = styled.div`
    width: 32px;
    height: 32px;
    background: url(${flagIcon});

    span {
    display: block;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: rgba(0,0,0,.5);
    -moz-transition: all 1s;
    -webkit-transition: all 1s;
    transition: all 1s;
    }

    :hover span {
    opacity: 1;
    }
`;