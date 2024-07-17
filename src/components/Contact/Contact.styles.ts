import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  padding: 0 30px;
  justify-content: space-between;
  row-gap: 20px;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    padding: 40px;
    flex-direction: row;
  }
`;

const ContactColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export { ContactContainer, ContactColumn };
