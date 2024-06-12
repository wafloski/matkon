import * as S from './AboutMe.styles';

import { ReactSVG } from 'react-svg';
import githubLink from '../../assets/github.svg';
import linkedinLink from '../../assets/linkedin.svg';

interface AboutMeProps {
    content: string;
    title: string;
}

const AboutMe = ({ content, title }: AboutMeProps) => (
    <S.AboutMeContainer>
        <S.Photo />
        <S.Bio>
            <div>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <S.SocialsWrapper>
                <a href='https://github.com/wafloski' target='_blank'>
                    <ReactSVG src={githubLink} style={{width: '30px', height: '30px', fill: '#fff'}}/>
                </a>
                <a href='https://www.linkedin.com/in/mateusz-konopka-waflosky/' target='_blank'>
                    <ReactSVG src={linkedinLink} style={{width: '30px', height: '30px', fill: '#fff'}}/>
                </a>
            </S.SocialsWrapper>
        </S.Bio>
    </S.AboutMeContainer>
);

export default AboutMe;