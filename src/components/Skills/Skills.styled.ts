import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  padding: 0 40px;
  column-gap: 30px;
  row-gap: 15px;
  flex-wrap: wrap;
`;

const SkillItem = styled.span`
  font-size: 24px;
`;

export { SkillsContainer, SkillItem };
