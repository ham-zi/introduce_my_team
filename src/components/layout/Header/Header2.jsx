// import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {
  Bar,
  Logo,
  Nav,
  Title,
  NavLink,
  HeaderTop,
  SearchBox,
  SearchInput,
  BtnSearch,
  Inner,
  Dot,
  AdminBtn
} from "./Header2.styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navi = useNavigate();

  return (
    <Bar>
      <HeaderTop>
        <Logo onClick={() => navi("/")}>
          I-SO
          <Dot />
        </Logo>
        <Title onClick={() => navi("/")}>UnknownFoodRecipe</Title>
          <AdminBtn>
            <FaUserCircle />
          </AdminBtn>
      </HeaderTop>
      <Inner>
        <Nav>
          <NavLink onClick={() => navi("/")}>HOME</NavLink>
          <NavLink onClick={() => navi("/boards")}>익명게시판</NavLink>
        </Nav>
      </Inner>
      <SearchBox>
        <SearchInput placeholder="검색하실 키워드를 입력해주세요"></SearchInput>
        <BtnSearch></BtnSearch>
      </SearchBox>
    </Bar>
  );
};

export default Header;
