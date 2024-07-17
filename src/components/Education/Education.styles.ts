import styled from 'styled-components';

const SchoolList = styled.ul`
  list-style-type: none;
  padding: 0 30px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

const SchoolItem = styled.li`
  margin-bottom: 20px;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export { SchoolList, SchoolItem };
