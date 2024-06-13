import { ReactSVG } from 'react-svg';

import * as S from './AboutMe.styles';

import githubSVG from '../../assets/github.svg';
import linkedinSVG from '../../assets/linkedin.svg';

import { githubURL, linkedinURL } from '../../constants/constants.ts';

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
                <a href={githubURL} target='_blank'>
                    <ReactSVG src={githubSVG} style={{width: '30px', height: '30px', fill: '#fff'}}/>
                </a>
                <a href={linkedinURL} target='_blank'>
                    <ReactSVG src={linkedinSVG} style={{width: '30px', height: '30px', fill: '#fff'}}/>
                </a>
            </S.SocialsWrapper>
        </S.Bio>
    </S.AboutMeContainer>
);

export default AboutMe;