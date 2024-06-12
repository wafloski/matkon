import * as S from './Footer.styles';

interface FooterProps {
    content: string;
}

import githubLink from '../../assets/github.svg';
import linkedinLink from '../../assets/linkedin.svg';
import { ReactSVG } from 'react-svg';

const Footer = ({ content }: FooterProps) => (
    <S.FooterContainer>
        <S.SocialsWrapper>
            <a href='https://github.com/wafloski' target='_blank'>
                <ReactSVG src={githubLink} style={{width: '24px', height: '24px', fill: '#fff'}}/>
            </a>
            <a href='https://www.linkedin.com/in/mateusz-konopka-waflosky/' target='_blank'>
                <ReactSVG src={linkedinLink} style={{width: '24px', height: '24px', fill: '#fff'}}/>
            </a>
        </S.SocialsWrapper>
        {content}
    </S.FooterContainer>
);

export default Footer;