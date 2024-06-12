import styled from 'styled-components';

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 80px 0 100px;
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

export { FooterContainer, SocialsWrapper };