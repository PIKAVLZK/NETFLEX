/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function Header() {
  const { currentUser } = useAuth();
  return (
    <header className="p-10 mb-16 flex justify-between items-center">
      <Link to="/" className="m-0 inline-block font-bold text-red-500 text-4xl">
        NETFLEX
      </Link>

      <div className="flex items-center gap-x-4">
        {currentUser === null ? (
          <>
            <Link to={"/sign-up"} className="decoration-slice text-white">
              회원가입
            </Link>

            <Link to={"/log-in"} className="decoration-slice text-white">
              로그인
            </Link>
          </>
        ) : (
          <>
            <Link to={"/my-page"} className="decoration-slice text-white">
              MyPage
            </Link>
            <p>{currentUser.nickname}님, 환영합니다</p>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
