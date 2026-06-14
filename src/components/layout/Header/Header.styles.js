import { theme } from "../../../styles/theme";
import styled from "styled-components";

export const Bar = styled.header`
  display: flex;
  width: 100%;
  height: 65px;
  background-color: #e76f51;
`;

export const Logo = styled.a`
  display: flex;
  font-size: 24px;
  font-weight: "bold";
  color: ${theme.color.text};
`;
export const Title = styled.h1`
  align-item: center;
  font-size: 30px;
  color: ${theme.color.text};
`;

export const Nav = styled.nav`
  display: flex;
  align-item: center;
  gap: 8px;
  color: ${theme.color.sub};
`;

export const NavLink = styled.a`
 textDecoration: 'none',
  color: '#555555',
  fontWeight: 400,
  fontSize: '15px',
`;
