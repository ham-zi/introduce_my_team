import styled from "styled-components";
import { theme } from "../../../styles/theme";

// 기존 MainContainer 및 Intro 스타일 재사용
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

// 작성 폼 컨테이너
export const WriteContainer = styled.div`
  border-top: 2px solid #dd7e6e;
  padding-top: 20px;
`;

// 각 입력 항목 그룹 (라벨 + 입력창)
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #555;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #dd7e6e; /* 포커스 시 포인트 컬러 */
  }

  &::placeholder {
    color: #ccc;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  min-height: 300px;
  resize: vertical; /* 세로로만 조절 가능 */
  outline: none;
  line-height: 1.6;

  &:focus {
    border-color: #dd7e6e;
  }

  &::placeholder {
    color: #ccc;
  }
`;

// 하단 버튼 그룹
export const BtnGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
`;

export const CancelBtn = styled.button`
  padding: 12px 35px;
  background: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

export const SubmitBtn = styled.button`
  padding: 12px 35px;
  background: #dd7e6e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #c66a5b;
  }
`;

export const FileLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.color.text};
  background: ${theme.color.bg};
  border: 1px dashed ${theme.color.border};
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;

  &:hover {
    border-color: ${theme.color.indigo};
    color: ${theme.color.indigo};
  }
  input {
    display: none;
  }
`;
