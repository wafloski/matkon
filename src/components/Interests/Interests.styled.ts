import styled from 'styled-components';

const InterestsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    gap: 20px;
    flex-wrap: wrap;
`;

const InterestItem = styled.span`
    font-size: 24px;
`;

export { InterestsContainer, InterestItem };