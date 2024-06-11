import { SectionTitle } from '../Common/Common.ts';
import * as S from './Education.styles';
import { School } from '../../types/types.ts';

interface EducationProps {
    content: School[]
}

const Education = ({ content }: EducationProps) => (
    <>
        <SectionTitle>Education</SectionTitle>
        <S.SchoolList>
            {content.map((item) => <S.SchoolItem key={item.id}>{item.Years} - {item.School} - {item.Course}</S.SchoolItem>)}
        </S.SchoolList>
    </>
);

export default Education;