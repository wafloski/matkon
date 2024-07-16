import styled, { css, keyframes } from 'styled-components';

import backgroundImage from '../../assets/intro_bg.jpg';

const typing = keyframes`
  from { width: 0 }
  to { width: '100%' }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #282c34 }
`;

interface TypingProps {
  typingLength: number;
}

const Intro = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #282c34;
  text-align: center;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat fixed center center/cover;
    opacity: 0.15;
  }
`;

const TypingContainer = styled.div<TypingProps>`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid #282c34;
  width: 577px;
  ${({ typingLength }) => css`
    animation:
      ${typing} 3s steps(${typingLength}, end),
      ${blink} 1s step-end infinite;
  `}
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 0;
  display: inline-block;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 300;
  margin: 10px 0 0 0;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export { Intro, Title, Subtitle, TypingContainer };
