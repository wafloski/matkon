import { ReactSVG } from 'react-svg';

import * as S from './Footer.styles';

import githubSVG from '../../assets/github.svg';
import linkedinSVG from '../../assets/linkedin.svg';

interface FooterProps {
  content: string;
}

const Footer = ({ content }: FooterProps) => (
  <S.FooterContainer>
    <S.SocialsWrapper>
      <a href="https://github.com/wafloski" target="_blank">
        <ReactSVG
          src={githubSVG}
          style={{ width: '24px', height: '24px', fill: '#fff' }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/mateusz-konopka-waflosky/"
        target="_blank"
      >
        <ReactSVG
          src={linkedinSVG}
          style={{ width: '24px', height: '24px', fill: '#fff' }}
        />
      </a>
    </S.SocialsWrapper>
    {content}
  </S.FooterContainer>
);

export default Footer;
