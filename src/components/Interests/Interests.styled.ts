import styled from 'styled-components';

const InterestsContainer = styled.div`
    display: flex;
    padding: 0 40px;
    column-gap: 30px;
    row-gap: 15px;
    flex-wrap: wrap;
`;

const InterestItem = styled.span`
    font-size: 24px;
`;

export { InterestsContainer, InterestItem };