/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Page from "../../components/page/Page";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function LoginPage(props) {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleClickLogin = () => {
    logIn({ id, password });
    navigate("/");
  };

  return (
    <Page>
      <div className="text-black">
        <h1>로그인</h1>

        <input type="text" value={id} onClick={(e) => setId(e.target.value)} />
        <input
          type="password"
          value={password}
          onClick={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleClickLogin} className="text-white">
          로그인
        </button>
      </div>
    </Page>
  );
}

export default LoginPage;
