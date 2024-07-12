import * as S from './Intro.styles';

import { decode } from 'html-entities';

interface IntroProps {
    title: string;
    subtitle: string;
}

const Intro = ({ title, subtitle }: IntroProps) => {
    const introText = `I'm ${title}`;

    return (
        <S.Intro id='home'>
            <S.TypingContainer typingLength={introText.length}>
                <S.Title >{introText}</S.Title>
            </S.TypingContainer>
            <S.Subtitle>{decode(subtitle)}</S.Subtitle>
        </S.Intro>
    );
}

export default Intro;