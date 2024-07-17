import styled from 'styled-components';

const JobList = styled.div`
  padding: 0 30px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }
`;

const JobItem = styled.div`
  margin-bottom: 60px;
`;

const Details = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Company = styled.p`
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Position = styled.p`
  font-size: 18px;
  font-family: 'Abel', sans-serif;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Logo = styled.img`
  height: 24px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

const Date = styled.p`
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Responsibilities = styled.div`
  ul {
    font-size: 14px;
    font-family: 'Abel', sans-serif;
    list-style-type: initial;
    padding-left: 24px;
    margin-top: 10px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export { JobList, JobItem, Details, Company, Position, Logo, Date, Responsibilities };
