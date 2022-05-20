import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 10px;

  margin-right: auto;
`;

export const MenuItem = styled.li`
  display: block;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const MenuNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &[aria-current] {
    color: yellow;
    text-decoration: underline;
  }
`;
