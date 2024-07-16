import styled from 'styled-components';

import backgroundImage from '../../assets/avatar.jpg';

const AboutMeContainer = styled.div`
  display: flex;
  position: relative;
  top: -40px;
`;

const Photo = styled.div`
  width: calc(50% + 20px);
  height: 580px;
  background: url(${backgroundImage}) no-repeat center center/cover;
  position: relative;
`;

const Bio = styled.div`
  position: absolute;
  width: calc(50% + 20px);
  background-color: #333;
  color: #fff;
  padding: 40px;
  font-size: 20px;
  right: 0;
  top: 40px;
  bottom: 40px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    position: relative;
    margin-bottom: 30px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      height: 2px;
      width: 100%;
      background: #666;
    }
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export { AboutMeContainer, Photo, Bio, SocialsWrapper };
