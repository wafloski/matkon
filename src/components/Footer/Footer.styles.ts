import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  padding: 40px 0;
  color: #fff;
  flex-direction: column;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 24px;
`;

const Logo = styled.img`
  display: block;
  height: 32px;
  margin-top: 40px;
`;

export { FooterContainer, SocialsWrapper, Logo };
