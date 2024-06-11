import { SectionTitle } from '../Common/Common.ts';

import * as S from './Experience.styles';
import { Job } from '../../types/types.ts';

interface ExperienceProps {
    content: Job[]
}

const Experience = ({ content }: ExperienceProps) => (
    <>
        <SectionTitle>Work Experience</SectionTitle>
        <S.JobList>
            {content?.map((item, index) => (
                <S.JobItem key={index}>
                    <S.Details style={{ display: 'flex' }}>
                        <div>
                            <S.Company>{item.company}</S.Company>
                            <S.Position>{item.position}</S.Position>
                            <S.Date>{item.start} - {item.end}</S.Date>
                        </div>
                        <div>
                            <S.Logo src={item.logo} alt={item.company}/>
                        </div>
                    </S.Details>
                    <S.Responsibilities>
                        {item.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                    </S.Responsibilities>
                </S.JobItem>
            ))}
        </S.JobList>
    </>
);

export default Experience;