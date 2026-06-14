import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const IntroBox = styled.div`
  margin-bottom: 28px;
`;

export const IntroTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #2d2d2d;
  margin: 0 0 8px 0;
`;

export const IntroText = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

export const List = styled.div`
  width: 100%;
  border-top: 2px solid #dd7e6e;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 120px 120px 80px 80px;
  padding: 12px 15px;
  font-weight: bold;
  font-size: 14px;
  background: #fafafa;
  border-bottom: 1px solid #ddd;
  color: #555;
`;

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 120px 120px 80px 80px;
  padding: 14px 15px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background 0.15s;

  &:hover {
    background: #fff5f3;
  }
`;

export const No = styled.div`
  text-align: center;
  color: #999;
`;

export const Title = styled.div`
  padding-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Writer = styled.div`
  text-align: center;
  color: #666;
`;

export const PostDate = styled.div`
  text-align: center;
  color: #999;
`;

export const ViewCount = styled.div`
  text-align: center;
  color: #999;
`;

export const LikeCount = styled.div`
  text-align: center;
  color: #dd7e6e;
`;

// ... (기존에 있던 스타일 코드들은 그대로 두시고 맨 아래에 추가해 주세요) ...

// 상단 소개글과 글쓰기 버튼을 묶어주는 래퍼
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 28px;
`;

// 글쓰기 버튼
export const WriteBtn = styled.button`
  padding: 10px 20px;
  background: #dd7e6e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c66a5b;
  }
`;

// 페이징 버튼들을 가운데로 모아주는 래퍼
export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
`;

// 개별 페이지 번호 버튼 (현재 페이지면 주황색으로 변함)
export const PageBtn = styled.button`
  padding: 8px 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${(props) => (props.$active ? "#dd7e6e" : "white")};
  color: ${(props) => (props.$active ? "white" : "#555")};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${(props) => (props.$active ? "#dd7e6e" : "#f5f5f5")};
  }

  &:disabled {
    color: #ccc;
    background: #fafafa;
    cursor: not-allowed;
  }
`;