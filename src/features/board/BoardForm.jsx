import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  IntroBox,
  IntroTitle,
  WriteContainer,
  FormItem,
  Label,
  Input,
  TextArea,
  BtnGroup,
  CancelBtn,
  SubmitBtn,
} from "./BoardForm.styles";

const BoardForm = () => {
  const navi = useNavigate();
  
  // 입력 상태 관리
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !writer || !content) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    
    // 여기서 작성된 데이터를 서버로 보냅니다.
    console.log({ title, writer, content });
    alert("게시글이 등록되었습니다.");
    navi("/boards"); // 등록 후 게시판 목록으로 이동
  };

  return (
    <MainContainer>
      <IntroBox>
        <IntroTitle>📝 레시피 작성하기</IntroTitle>
      </IntroBox>

      <WriteContainer>
        <FormItem>
          <Label>제목</Label>
          <Input 
            placeholder="제목을 입력해주세요" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormItem>

        <FormItem>
          <Label>작성자 (익명)</Label>
          <Input 
            placeholder="사용하실 닉네임을 입력해주세요" 
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </FormItem>

        <FormItem>
          <Label>내용</Label>
          <TextArea 
            placeholder="나만의 레시피나 자취 꿀팁을 자유롭게 작성해보세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormItem>

        <BtnGroup>
          <CancelBtn onClick={() => navi("/boards")}>취소</CancelBtn>
          <SubmitBtn onClick={handleSubmit}>등록하기</SubmitBtn>
        </BtnGroup>
      </WriteContainer>
    </MainContainer>
  );
};

export default BoardForm;