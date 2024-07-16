import * as S from './Header.styles.ts';
import { useState } from 'react';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'about',
    label: 'About Me',
  },
  {
    id: 'resume',
    label: 'Resume',
  },
  {
    id: 'contact',
    label: 'Contact',
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <S.Header>
      <S.Logo>MyLogo</S.Logo>
      <S.MenuButton onClick={toggleMenu}>&#9776;</S.MenuButton>
      <S.Nav>
        <S.Menu isOpen={isOpen}>
          {menuItems.map((item, index) => (
            <S.MenuItem key={index}>
              <S.MenuLink
                to={item.id}
                smooth={true}
                offset={-100}
                spy={true}
                duration={500}
                activeClass="active"
              >
                {item.label}
              </S.MenuLink>
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
