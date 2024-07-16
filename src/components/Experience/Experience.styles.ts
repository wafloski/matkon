import styled from 'styled-components';

const JobList = styled.div`
  padding: 0 40px;
`;

const JobItem = styled.div`
  margin-bottom: 60px;
`;

const Details = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const Company = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const Position = styled.p`
  font-size: 24px;
  font-family: 'Abel', sans-serif;
`;

const Logo = styled.img`
  height: 24px;
`;

const Date = styled.p`
  font-size: 20px;
`;

const Responsibilities = styled.div`
  ul {
    font-size: 16px;
    font-family: 'Abel', sans-serif;
    list-style-type: initial;
    padding-left: 24px;
    margin-top: 10px;
  }
`;

export {
  JobList,
  JobItem,
  Details,
  Company,
  Position,
  Logo,
  Date,
  Responsibilities,
};
