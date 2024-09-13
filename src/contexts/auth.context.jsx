/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";

const initialValue = {
  signUp: () => {},
  logIn: () => {},
  currentUser: null,
};

// AuthContext 생성
const AuthContext = createContext(initialValue);

// 사용자 인증 훅
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // 로그인
  const [users, setUsers] = useState([]); // 회원가입

  // 회원가입
  const signUp = (newUser) => {
    // 유저 데이터 배열에 넣기
    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  // 로그인
  const logIn = ({ id, password }) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
      return alert("존재하지 않는 ID입니다.");
    }

    if (user.password !== password) {
      return alert("잘못된 비밀번호입니다.");
    }

    alert("로그인 되었습니다.");
    setCurrentUser(user);
  };

  const value = {
    signUp,
    logIn,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
