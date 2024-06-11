import * as S from './Footer.styles';

interface FooterProps {
    content: string;
}

const Footer = ({ content }: FooterProps) => (
    <S.FooterContainer>
        {content}
    </S.FooterContainer>
);

export default Footer;