
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Page from "../../components/page/Page";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function SignUpPage() {
  const navigate = useNavigate(); // 로그인 후 홈으로
  const { signUp } = useAuth(); // context 수정
  const [id, setId] = useState();
  const [pass, setPass] = useState();
  const [nickname, setNickname] = useState();

  const handleClickSignUpButton = () => {
    const newUser = {
      id,
      pass,
      nickname,
    };
    signUp(newUser);

    // handleClickSignUpButton 가 실행되면
    // 로그인 후 홈으로 보내기
    navigate("/"); // 브라우저 라우터 아래에서 사용해야한다
  };

  return (
    <Page>
      <h1>회원가입</h1>
      <hr />

      <div className="text-black">
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="text"
          placeholder="NickName"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <button
          className="text-white border-white border"
          onClick={handleClickSignUpButton}
        >
          회원가입하기
        </button>
      </div>
    </Page>
  );
}

export default SignUpPage;
