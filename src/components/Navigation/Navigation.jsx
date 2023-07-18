import { useState } from 'react';
import { Nav, NavLink, NavList, NavListItem } from './Navigation.styled';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <NavLink>Про клініку</NavLink>

      <div onMouseEnter={openMenu} onMouseLeave={closeMenu}>
        <NavLink style={isMenuOpen ? { color: '#39ade0' } : {}}>
          Наші послуги
        </NavLink>
        {isMenuOpen && (
          <NavList>
            <NavListItem>Послуга 1</NavListItem>
            <NavListItem>Послуга 2</NavListItem>
            <NavListItem>Послуга 3</NavListItem>
          </NavList>
        )}
      </div>

      <NavLink>Прайс</NavLink>
      <NavLink>Наші лікарі</NavLink>
      <NavLink>Акції</NavLink>
    </Nav>
  );
};
