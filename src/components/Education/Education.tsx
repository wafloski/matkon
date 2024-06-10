import {SectionTitle} from '../Common/Common.ts';
import * as S from './Education.styles';

interface School {
    id: number;
    Course: string;
    School: string;
    Years: string;
}

interface EducationProps {
    content: School[]
}

const Education = ({ content }: EducationProps) => (
    <>
        <SectionTitle>My Education</SectionTitle>
        <S.SchoolList>
            {content.map((item) => <S.SchoolItem key={item.id}>{item.Years} - {item.School} - {item.Course}</S.SchoolItem>)}
        </S.SchoolList>
    </>
);

export default Education;