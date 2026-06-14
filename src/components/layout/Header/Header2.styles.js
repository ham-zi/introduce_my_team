import styled from "styled-components";
import { FaUserCircle } from 'react-icons/fa';

// ----------------------------------------------------
// 2. 전체 레이아웃
// ----------------------------------------------------
export const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

// ----------------------------------------------------
// 3. 헤더 레이아웃
// ----------------------------------------------------
export const Bar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const HeaderTop = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 70px;
  padding: 0 40px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Logo = styled.a`
  cursor: pointer;
  font-size: 25px;
  font-weight: 800;
  margin-top: 7px;
  margin-bottom: 5px;
  padding: 20px;
  color: #696969;
  text-decoration: none;
`;

export const Dot = styled.span`
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-left: 3px;
  border-radius: 50%;
  background: #dd7e6e;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #f4806c;
  margin-top: 18px;
  cursor: pointer;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 35px;
  margin-top: 18px;
   cursor: pointer;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #555555;
  font-weight: 400;
  font-size: 15px;
  margin: 0 auto;
  
  &:hover:not(:disabled) {
    color: #e0472e;
`;

// 1. 전체를 감싸는 박스 (이 녀석을 입력창처럼 꾸밉니다)
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 2.5px solid #f4806c; /* 기존 인풋에 있던 테두리를 여기로 가져옴 */
  border-radius: 10px;
  padding: 3px 12px; /* 전체 박스의 안쪽 여백 */
  margin: 20px auto;
  justify-content: center;
  background-color: #ffffff;
  width: 700px; /* 검색창 전체 너비 (원하는 대로 조절하세요) */
  height: 40px;
`;

// 2. 실제 글자를 입력하는 곳 (테두리와 배경을 싹 지웁니다)
export const SearchInput = styled.input`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  border: none; /* 테두리 제거 */
  outline: none; /* 클릭했을 때 나오는 굵은 테두리 제거 */
  background: transparent;
  padding: 4px 0;
  font-size: 15px;
`;

// 3. 순수 CSS 돋보기 버튼
export const BtnSearch = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 8px;

  /* 버튼의 클릭 영역이자 돋보기 전체 크기 */
  position: relative;
  width: 20px;
  height: 20px;

  /* [돋보기 렌즈 부분: 동그라미] */
  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 13px;
    height: 13px;
    border: 2px solid #f4806c; /* 돋보기 색상 (주황색) */
    border-radius: 50%;
    box-sizing: border-box;
  }

  /* [돋보기 손잡이 부분: 막대기] */
  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 2px;
    width: 2px;
    height: 7px;
    background-color: #f4806c; /* 돋보기 색상 (주황색) */
    transform: rotate(-45deg);
  }

  /* 마우스 올리면 살짝 커지는 효과 */
  &:hover {
    transform: scale(1.1);
  }
`;


export const AdminBtn = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none; /* 버튼의 기본 테두리 제거 */
  border-radius: 50%;
  cursor: pointer; /* 버튼이므로 마우스 커서 변경 */
  margin-left: auto;
  
  /* 아이콘을 정중앙에 배치하기 위한 Flex 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #717171; /* 아이콘의 기본 색상 (svg에 적용됨) */
  transition: color 0.2s ease; /* 호버 시 부드러운 색상 전환 */

  /* 내부 리액트 아이콘(svg) 크기 제어 */
  svg {
    width: 35px; /* 원하는 아이콘 크기로 조절하세요 */
    height: 35px;
  }

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`;
