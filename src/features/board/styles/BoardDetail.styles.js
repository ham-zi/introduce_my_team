import styled from "styled-components";

// 기존에 쓰시던 MainContainer 그대로 사용
export const MainContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// 상세보기 상단 헤더 영역 (제목, 작성자, 날짜 등)
export const DetailHeader = styled.div`
  border-top: 2px solid #dd7e6e; /* 목록 리스트의 상단 선과 통일 */
  border-bottom: 1px solid #ddd;
  padding: 24px 20px;
  background: #fafafa;
`;

export const DetailTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #2d2d2d;
  margin: 0 0 16px 0;
`;

// 작성자, 날짜, 조회수 등을 가로로 배치하기 위한 래퍼
export const MetaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #888;
`;

export const MetaLeft = styled.div`
  display: flex;
  gap: 16px; /* 항목 간 간격 */
`;

export const MetaRight = styled.div`
  display: flex;
  gap: 16px;
`;

// 실제 본문 내용이 들어갈 영역
export const ContentBox = styled.div`
  padding: 40px 20px;
  min-height: 400px; /* 본문이 짧아도 일정 높이를 유지하도록 */
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  border-bottom: 1px solid #eee;
`;

// 하단 버튼 영역 
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ListButton = styled.button`
  padding: 10px 30px;
  background: #dd7e6e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #c66a5b; /* 호버 시 조금 더 진한 색으로 */
  }
`;