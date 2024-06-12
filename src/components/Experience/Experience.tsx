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
                            <S.Company>{item.Company}</S.Company>
                            <S.Position>{item.Position}</S.Position>
                            <S.Date>{item.Start} - {item.End}</S.Date>
                        </div>
                        <div>
                            <a href={item.WorkURL}>
                                <S.Logo src={item.LogoURL} alt={item.Company}/>
                            </a>
                        </div>
                    </S.Details>
                    <S.Responsibilities>
                        {item.Responsibilities.map((item, index) => <li key={index}>{item.Duty}</li>)}
                    </S.Responsibilities>
                </S.JobItem>
            ))}
        </S.JobList>
    </>
);

export default Experience;