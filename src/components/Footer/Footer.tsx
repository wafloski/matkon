import { ReactSVG } from 'react-svg';
import { Link } from 'react-scroll';

import * as S from './Footer.styles';

import githubSVG from '../../assets/github.svg';
import linkedinSVG from '../../assets/linkedin.svg';
import logoWhite from '../../assets/logo_white.png';

interface FooterProps {
  content: string;
}

const Footer = ({ content }: FooterProps) => (
  <S.FooterContainer>
    <S.SocialsWrapper>
      <a href="https://github.com/wafloski" target="_blank">
        <ReactSVG src={githubSVG} style={{ width: '24px', height: '24px', fill: '#fff' }} />
      </a>
      <a href="https://www.linkedin.com/in/mateusz-konopka-waflosky/" target="_blank">
        <ReactSVG src={linkedinSVG} style={{ width: '24px', height: '24px', fill: '#fff' }} />
      </a>
    </S.SocialsWrapper>
    {content}
    <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
      <S.Logo src={logoWhite} alt="Mateusz Konopka Software Engineer" />
    </Link>
  </S.FooterContainer>
);

export default Footer;
