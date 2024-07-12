import { SectionTitle } from '../Common/Common.ts';

import * as S from './Skills.styled';
import { Skill } from '../../types/types.ts';

interface SkillsProps {
    content: Skill[];
}

const Skills = ({ content }: SkillsProps) => (
    <>
        <SectionTitle>Key Skills</SectionTitle>
        <S.SkillsContainer>
            {content?.map(({ title}, index) => <S.SkillItem key={index}>{title} </S.SkillItem>)}
        </S.SkillsContainer>
    </>
);

export default Skills;