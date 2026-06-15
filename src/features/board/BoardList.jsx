import React, { useEffect, useState } from "react"; // useState 추가
import { useNavigate, Link } from "react-router-dom";
import {
  MainContainer,
  IntroBox,
  IntroTitle,
  IntroText,
  TopWrap,
  WriteBtn,
  List,
  ListHeader,
  ListRow,
  No,
  Title,
  Writer,
  PostDate,
  ViewCount,
  LikeCount,
  PaginationWrap, // 추가된 스타일
  PageBtn, // 추가된 스타일
} from "./styles/Board.styles";
import api from "../../api/api";

const BoardList = () => {
  const navi = useNavigate();
  const [loading, isLoading] = useState(true);
  const [boards, setBoards] = useState([]);
  // 🌟 페이징 처리를 위한 State
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .get("/boards", { params: { page: currentPage } })
      .then((result) => {
        setBoards([...result.data.data]);
      })
      .catch(() => {
        setBoards([]);
      })
      .finally(() => {
        isLoading(false);
      });
  }, [currentPage]);

  return (
    <MainContainer>
      <TopWrap>
        <IntroBox style={{ marginBottom: 0 }}>
          <IntroTitle>🍳익명게시판</IntroTitle>
          <IntroText>
            익명으로 레시피와 자취 꿀팁을 자유롭게 공유해보세요.
          </IntroText>
        </IntroBox>
        <WriteBtn onClick={() => navi("/boards/write")}>글쓰기</WriteBtn>
      </TopWrap>

      <List>
        <ListHeader>
          <No>번호</No>
          <Title>제목</Title>
          <Writer>작성자</Writer>
          <PostDate>작성일</PostDate>
          <ViewCount>조회수</ViewCount>
          <LikeCount>좋아요</LikeCount>
        </ListHeader>

        {/* 🌟 boards.map 이 아니라 잘라낸 currentPosts.map 을 돌립니다! */}
        {boards.map((b) => (
          <ListRow key={b.boardNo}>
            <No>{b.boardNo}</No>
            <Title>
              <Link
                to={`/boards/${b.boardNo}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {b.boardTitle}
              </Link>
            </Title>
            <Writer>{b.refUser}</Writer>
            <PostDate>{b.createDate.replace("T", " ").slice(0, 16)}</PostDate>
            <ViewCount>{b.views}</ViewCount>
            <LikeCount>{b.likes}</LikeCount>
          </ListRow>
        ))}
      </List>

      {/* 🌟 페이지네이션 버튼 영역 */}
      <PaginationWrap>
        {/* 이전 버튼: 1페이지일 때는 비활성화(disabled) */}
        <PageBtn
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; 이전
        </PageBtn>

        {/* 페이지 번호 버튼들 */}
        {/* {pageNumbers.map((num) => (
          <PageBtn
            key={num}
            $active={currentPage === num} // 현재 페이지면 색상 변경
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </PageBtn>
        ))} */}

        {/* 다음 버튼: 마지막 페이지일 때는 비활성화(disabled) */}
        <PageBtn
          onClick={() => setCurrentPage(currentPage + 1)}
          // disabled={currentPage === totalPages}
        >
          다음 &gt;
        </PageBtn>
      </PaginationWrap>
    </MainContainer>
  );
};

export default BoardList;
