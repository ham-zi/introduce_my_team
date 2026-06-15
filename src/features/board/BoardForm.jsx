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
  FileLabel,
} from "./styles/BoardForm.styles";
import api from "../../api/api";

const BoardForm = () => {
  const navi = useNavigate();

  // 입력 상태 관리
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, isLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("모든 항목을 입력해주세요!");
      return;
    }

    isLoading(true);
    setStatus("");

    const fd = new FormData();
    fd.append("boardTitle", title);
    fd.append("boardContent", content);
    fd.append("refUser", JSON.parse(localStorage.getItem("myData")).data);
    fd.append("password", password);
    if (file) fd.append("files", file);
    // 여기서 작성된 데이터를 서버로 보냅니다.
    console.log(fd);
    await api.post("/boards", fd);
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
            value={JSON.parse(localStorage.getItem("myData")).data}
            disabled
          />
        </FormItem>

        <FormItem>
          <Label>비밀번호</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <FormItem>
          <Label>첨부파일</Label>
          <div>
            <FileLabel>
              파일 선택
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
              {file && (
                <div>
                  <p>선택한 파일 : {file.name}</p>
                  <button onClick={() => setFile(null)}>파일제거</button>
                </div>
              )}
            </FileLabel>
          </div>
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
