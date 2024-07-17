import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  padding: 0 30px;
  column-gap: 16px;
  row-gap: 6px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding: 0 40px;
    column-gap: 30px;
    row-gap: 15px;
  }
`;

const SkillItem = styled.span`
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export { SkillsContainer, SkillItem };
