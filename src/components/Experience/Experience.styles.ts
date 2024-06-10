import styled from 'styled-components';

const JobList = styled.ul`
    list-style-type: none;
    padding: 0 40px;
`;

const JobItem  = styled.li`
    margin-bottom: 40px;
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
    font-family: "Abel", sans-serif;
`;

const Logo = styled.img`
    width: 100px;
`;

const Date = styled.p`
    font-size: 20px;
`;

const Responsibilities = styled.ul`
    font-size: 16px;
    font-family: "Abel", sans-serif;
`;

export { JobList, JobItem, Details, Company, Position, Logo, Date, Responsibilities };