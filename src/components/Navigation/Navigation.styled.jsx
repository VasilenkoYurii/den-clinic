import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 130px;
`;

export const NavLink = styled.p`
  color: #133a4b;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  cursor: pointer;

  transition: all 500ms;

  &:hover {
    color: #39ade0;
  }
`;

export const NavList = styled.ul`
  width: 207px;
  height: 106px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: absolute;
`;

export const NavListItem = styled.li`
  color: #133a4b;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  cursor: pointer;

  transition: all 500ms;

  &:hover {
    color: #39ade0;
    text-decoration-line: underline;
  }
`;
