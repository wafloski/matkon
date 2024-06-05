import * as S from './AboutMe.styles';

interface AboutMeProps {
    content: string;
    title: string;
}

const AboutMe = ({ content, title }: AboutMeProps) => {
    return (
        <S.AboutMeContainer>
            <div className='photo'></div>
            <div className='bio'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </S.AboutMeContainer>
    )
}

export default AboutMe;