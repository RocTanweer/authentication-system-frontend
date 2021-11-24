import styled, { keyframes } from "styled-components";

const offset = 187;
const duration = 1.4;

const rotator = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% {
       transform: rotate(270deg); 
    }
`;

export const StyledLoading = styled.svg`
  animation: ${rotator} ${duration}s linear infinite;
`;

const dash = keyframes`
    0% { 
        stroke-dashoffset: ${offset}; 
    }   

    50% {
        stroke-dashoffset: ${offset / 4};
        transform:rotate(135deg);
    }

    100% {
        stroke-dashoffset: ${offset};
        transform:rotate(450deg);
    }
`;

const spinnerAnimation = (color) => keyframes`
    0% { stroke: ${color} }
    100% { stroke: ${color} }
`;

export const StyledCircle = styled.circle`
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} ${duration}s ease-in-out infinite,
    ${({ color }) => spinnerAnimation(color)} ${duration * 4}s ease-in-out
      infinite;
`;
