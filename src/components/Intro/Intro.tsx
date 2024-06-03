import * as S from './Intro.styles';

interface IntroProps {
    title: string;
    subtitle: string;
}

const Intro = ({ title, subtitle }: IntroProps) => {
    const introText = `I'm ${title}`;

    console.log(introText.length);

    return (
        <S.Intro>
            <S.TypingContainer typingLength={introText.length}>
                <S.Title>{introText}</S.Title>
            </S.TypingContainer>

            <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Intro>
    );
}

export default Intro;