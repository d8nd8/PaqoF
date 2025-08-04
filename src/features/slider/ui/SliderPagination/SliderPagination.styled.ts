import styled, { keyframes, css } from 'styled-components';

const fillAnimation = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
`;

export const Dot = styled.button`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;

interface ActiveDotProps {
  $isAnimating: boolean;
  $duration: number;
}

export const ActiveDot = styled.div<ActiveDotProps>`
  width: 35px;
  height: 7px;
  border-radius: 360px;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    border-radius: 360px;
    transform: scaleX(0);
    transform-origin: left;
    
    ${props => props.$isAnimating && css`
      animation: ${fillAnimation} ${props.$duration}ms linear;
    `}
  }
`;