import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 100px;
  padding: 0 15px;

  @media (max-width: 1200px) {
    max-width: 1000px;
  }

  @media (max-width: 992px) {
    max-width: 750px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 10px;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h3`
  text-align: center;
  color: #333;
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 80px;
  padding-bottom: 10px;
  position: relative;
  margin-bottom: 30px;
  letter-spacing: 2px;

  @media (min-width: 576px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    border-bottom: 1px solid #777;
    width: 100%;

    @media (min-width: 576px) {
      border-bottom: 2px solid #777;
    }
  }
`;

export { LoaderContainer, Loader, SectionContainer, SectionTitle };
