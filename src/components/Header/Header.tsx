import * as S from './Header.styles.ts';
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <S.Header>
            <S.Logo>MyLogo</S.Logo>
            <S.MenuButton onClick={toggleMenu}>
                &#9776;
            </S.MenuButton>
            <S.Nav>
                <S.Menu isOpen={isOpen}>
                    <S.MenuItem><S.MenuLink href="#home">Home</S.MenuLink></S.MenuItem>
                    <S.MenuItem><S.MenuLink href="#about">About Me</S.MenuLink></S.MenuItem>
                    <S.MenuItem><S.MenuLink href="#services">Services</S.MenuLink></S.MenuItem>
                    <S.MenuItem><S.MenuLink href="#contact">Resume</S.MenuLink></S.MenuItem>
                    <S.MenuItem><S.MenuLink href="#contact">Contact</S.MenuLink></S.MenuItem>
                </S.Menu>
            </S.Nav>
        </S.Header>
    );
}

export default Header;