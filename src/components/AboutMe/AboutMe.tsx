import * as S from './AboutMe.styles';

interface AboutMeProps {
    content: string;
    title: string;
}

const AboutMe = ({ content, title }: AboutMeProps) => (
    <S.AboutMeContainer>
        <S.Photo />
        <S.Bio>
            <h2>{title}</h2>
            <p>{content}</p>
        </S.Bio>
    </S.AboutMeContainer>
);

export default AboutMe;