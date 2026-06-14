import React, { useState } from "react"; // useState 추가
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
  PageBtn,        // 추가된 스타일
} from "./styles/Board.styles";

const BoardList = () => {
  const navi = useNavigate();

  // 🌟 페이징 처리를 위한 State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2; // 한 페이지에 보여줄 게시글 수 (테스트용으로 2개로 설정)

  // 가짜 데이터 (페이징 테스트를 위해 5개로 늘렸습니다)
  const boards = [
    { no: 5, title: "참치마요 덮밥 초간단 레시피", writer: "익명5", createDate: "06-13", readCount: 12, likeCount: 5 },
    { no: 4, title: "자취생 필수템 다이소 추천", writer: "익명4", createDate: "06-13", readCount: 55, likeCount: 12 },
    { no: 3, title: "전자레인지 계란찜 성공함", writer: "익명3", createDate: "06-11", readCount: 41, likeCount: 8 },
    { no: 2, title: "라면 맛있게 끓이는 방법", writer: "익명2", createDate: "06-12", readCount: 18, likeCount: 2 },
    { no: 1, title: "김치볶음밥 레시피 공유합니다", writer: "익명1", createDate: "06-12", readCount: 25, likeCount: 4 },
  ];

  // 🌟 페이징 계산 로직
  const indexOfLastPost = currentPage * postsPerPage;       // 현재 페이지의 마지막 글 인덱스
  const indexOfFirstPost = indexOfLastPost - postsPerPage;  // 현재 페이지의 첫 글 인덱스
  // 원본 배열에서 현재 페이지에 해당하는 부분만 잘라냅니다.
  const currentPosts = boards.slice(indexOfFirstPost, indexOfLastPost); 

  // 전체 페이지 수 계산 (예: 데이터 5개 / 한 페이지 2개 = 총 3페이지)
  const totalPages = Math.ceil(boards.length / postsPerPage);

  // 페이지 번호를 배열로 만들기 (예: [1, 2, 3])
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <MainContainer>
      <TopWrap>
        <IntroBox style={{ marginBottom: 0 }}>
          <IntroTitle>🍳익명게시판</IntroTitle>
          <IntroText>익명으로 레시피와 자취 꿀팁을 자유롭게 공유해보세요.</IntroText>
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
        {currentPosts.map((b) => (
          <ListRow key={b.no}>
            <No>{b.no}</No>
            <Title>
              <Link to={`/boards/${b.no}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {b.title}
              </Link>
            </Title>
            <Writer>{b.writer}</Writer>
            <PostDate>{b.createDate}</PostDate>
            <ViewCount>{b.readCount}</ViewCount>
            <LikeCount>{b.likeCount}</LikeCount>
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
        {pageNumbers.map((num) => (
          <PageBtn 
            key={num} 
            $active={currentPage === num} // 현재 페이지면 색상 변경
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </PageBtn>
        ))}

        {/* 다음 버튼: 마지막 페이지일 때는 비활성화(disabled) */}
        <PageBtn 
          onClick={() => setCurrentPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          다음 &gt;
        </PageBtn>
      </PaginationWrap>

    </MainContainer>
  );
};

export default BoardList;