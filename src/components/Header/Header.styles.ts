import styled from 'styled-components';
import { Link } from 'react-scroll';

interface MenuProps {
  isOpen: boolean;
}

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    align-items: center;
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  display: block;
  height: 32px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    justify-content: center;
  }
`;

const Menu = styled.ul<MenuProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const MenuItem = styled.li`
  margin: 0;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

const MenuLink = styled(Link)`
  color: inherit;

  &.active {
    color: #0b9fe2;
  }
`;

const MenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  text-align: right;

  @media (min-width: 768px) {
    display: none;
  }
`;

export { Header, Logo, Nav, Menu, MenuItem, MenuLink, MenuButton };
