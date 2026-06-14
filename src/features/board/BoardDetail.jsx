import React from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import {
  MainContainer,
  DetailHeader,
  DetailTitle,
  MetaWrap,
  MetaLeft,
  MetaRight,
  ContentBox,
  ButtonWrap,
  ListButton,
} from "./styles/BoardDetail.styles";

const BoardDetail = () => {
  const navi = useNavigate();
  
  const { no } = useParams(); 

  const dummyBoards = [
    {
      no: 1,
      title: "김치볶음밥 레시피 공유합니다",
      content: "안녕하세요!\n자취 3년차가 보장하는 초간단 김치볶음밥 레시피입니다.\n\n1. 파기름을 낸다.\n2. 썰어둔 김치를 넣고 볶는다.\n3. 간장 1스푼을 태우듯이 넣는다.\n4. 밥을 넣고 볶다가 참기름으로 마무리!\n\n다들 맛있게 드세요~",
      writer: "익명１",
      createDate: "2024-06-12 14:30",
      readCount: 25,
      likeCount: 4,
    },
    {
      no: 2,
      title: "라면 맛있게 끓이는 방법",
      content: "물양 맞추는 게 제일 중요합니다! 종이컵 3컵 반(약 500ml) 딱 맞추세요.\n\n물이 끓기 전에 건더기와 분말 스프를 먼저 넣고 끓여줍니다.\n물이 팔팔 끓을 때 면을 넣고, 젓가락으로 들었다 놨다 하면서 공기와 마찰시켜주면 훨씬 쫄깃해져요.\n\n마지막에 파 썰어 넣고 계란은 풀지 말고 그대로 익히는 게 국물 맛이 깔끔합니다!",
      writer: "익명２",
      createDate: "2024-06-12 18:05",
      readCount: 18,
      likeCount: 2,
    },
    {
      no: 3,
      title: "전자레인지 계란찜 성공함",
      content: "드디어 식당에서 파는 푸딩 같은 계란찜 성공했습니다 ㅠㅠ\n\n1. 전자레인지용 그릇에 계란 2개, 물(또는 우유) 반 컵을 넣고 소금 한 꼬집 섞어줍니다.\n2. 알끈을 채망으로 한 번 걸러주는 게 🌟핵심 포인트🌟\n3. 랩을 씌우고 포크로 구멍 3~4개 뽕뽕 뚫어주세요.\n4. 전자레인지에 딱 3분 30초 돌리면 완성!\n\n진짜 부들부들하고 맛있어요 다들 해보세요ㅋㅋ",
      writer: "익명３",
      createDate: "2024-06-11 09:20",
      readCount: 41,
      likeCount: 8,
    }
  ];

  const targetBoard = dummyBoards.find((b) => b.no === Number(no));

  // 혹시라도 이상한 번호(/boards/999)로 들어왔을 때 에러가 나지 않도록 방지
  if (!targetBoard) {
    return (
      <MainContainer>
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          해당 게시글을 찾을 수 없습니다. 😢
        </div>
        <ButtonWrap>
          <ListButton onClick={() => navi("/boards")}>목록으로</ListButton>
        </ButtonWrap>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <DetailHeader>
        <DetailTitle>{targetBoard.title}</DetailTitle>
        <MetaWrap>
          <MetaLeft>
            <span>작성자: {targetBoard.writer}</span>
            <span>작성일: {targetBoard.createDate}</span>
          </MetaLeft>
          <MetaRight>
            <span>조회수 {targetBoard.readCount}</span>
            <span style={{ color: "#dd7e6e", fontWeight: "bold" }}>
              좋아요 {targetBoard.likeCount}
            </span>
          </MetaRight>
        </MetaWrap>
      </DetailHeader>

      <ContentBox>
        {targetBoard.content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </ContentBox>

      <ButtonWrap>
        <ListButton onClick={() => navi("/boards")}>목록으로</ListButton>
      </ButtonWrap>
    </MainContainer>
  );
};

export default BoardDetail;