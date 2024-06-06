import { SectionTitle } from "../Common/Common.ts";

import * as S from './Skills.styled';

interface Skill {
    id: number;
    Skill: string;
}

interface SkillsProps {
    content: Skill[];
}

const Skills = ({ content }: SkillsProps) => (
    <>
        <SectionTitle>My Skills</SectionTitle>
        <S.SkillsContainer>
            {content.map((item) => <S.SkillItem key={item.id}>{item.Skill} </S.SkillItem>)}
        </S.SkillsContainer>
    </>
);

export default Skills;