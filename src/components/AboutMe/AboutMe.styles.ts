import styled from 'styled-components';

import backgroundImage from '../../assets/avatar.jpg';

const AboutMeContainer = styled.div`
  position: relative;

  @media (min-width: 768px) {
    top: -40px;
    display: flex;
  }
`;

const Photo = styled.div`
  width: calc(40% + 20px);
  height: 360px;
  background: url(${backgroundImage}) no-repeat center center/cover;
  position: relative;

  @media (min-width: 768px) {
    height: 580px;
    width: calc(50% + 20px);
  }
`;

const Bio = styled.div`
  position: absolute;
  width: calc(50% + 20px);
  background-color: #333;
  color: #fff;
  padding: 14px;
  font-size: 15px;
  right: 0;
  top: -46px;
  height: 460px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    width: calc(50% + 20px);
    top: 40px;
    bottom: 40px;
    font-size: 20px;
    padding: 40px;
    height: 500px;
  }

  h2 {
    position: relative;
    margin-bottom: 12px;

    @media (min-width: 768px) {
      margin-bottom: 30px;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      height: 2px;
      width: 100%;
      background: #666;

      @media (min-width: 768px) {
        bottom: -10px;
      }
    }
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export { AboutMeContainer, Photo, Bio, SocialsWrapper };
