import styled from "styled-components";

const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    gap: 20px;
    flex-wrap: wrap;
`;

const SkillItem = styled.span`
    font-size: 24px;
`;

export { SkillsContainer, SkillItem };