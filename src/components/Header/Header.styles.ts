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

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
    }
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: white;
    
    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-end;
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
        color: #0B9FE2;
    }
`;

const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 24px;

    @media (max-width: 768px) {
        display: block;
        margin-left: auto;
    }
`;

export { Header, Logo, Nav, Menu, MenuItem, MenuLink, MenuButton };

