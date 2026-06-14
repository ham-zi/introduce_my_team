// import { NavLink } from "react-router-dom";
import { Bar, Logo, Nav, Title, NavLink } from "./Header.styles";

const Header = () => {
  return (
    <Bar>
      <Logo>I-SO</Logo>
      <Title>UnkownFoodRecipe</Title>
      <Nav>
        <NavLink>자유게시판</NavLink>
        <NavLink>레시피게시판</NavLink>
        <NavLink>꿀팁공유게시판</NavLink>
      </Nav>
    </Bar>
  );
};

export default Header;
