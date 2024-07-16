import { SectionTitle } from '../Common/Common.ts';

import parse from 'html-react-parser';

import * as S from './Experience.styles';
import { ExperienceEntry } from '../../types/types.ts';

interface ExperienceProps {
    content: ExperienceEntry[];
}

const Experience = ({ content }: ExperienceProps) => (
    <>
        <SectionTitle>Work Experience</SectionTitle>
        <S.JobList>
            {content?.map(({ experienceItem}, index) => (
                <S.JobItem key={index}>
                    <S.Details style={{ display: 'flex' }}>
                        <div>
                            <S.Company>{experienceItem?.company}</S.Company>
                            <S.Position>{experienceItem?.position}</S.Position>
                            <S.Date>{experienceItem?.startdate} - {experienceItem?.enddate}</S.Date>
                        </div>
                        <div>
                            <a href={experienceItem?.companyurl}>
                                <S.Logo src={experienceItem?.logourl} alt={experienceItem?.company}/>
                            </a>
                        </div>
                    </S.Details>
                    <S.Responsibilities>
                        {parse(experienceItem?.responsibility)}
                    </S.Responsibilities>
                </S.JobItem>
            ))}
        </S.JobList>
    </>
);

export default Experience;