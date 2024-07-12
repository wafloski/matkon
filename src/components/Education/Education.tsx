import { SectionTitle } from '../Common/Common.ts';
import * as S from './Education.styles';
import { EducationEntry } from '../../types/types.ts';

interface EducationProps {
    content: EducationEntry[]
}

const Education = ({ content }: EducationProps) => (
    <>
        <SectionTitle>Education</SectionTitle>
        <S.SchoolList>
            {content?.map(({ educationItem: { years, school, course }}, index) => <S.SchoolItem key={index}>{years} - {school} - {course}</S.SchoolItem>)}
        </S.SchoolList>
    </>
);

export default Education;