/* eslint-disable no-unused-vars */
import React, { Children, useEffect, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import RootLayout from "./Layouts/RootLayout/RootLayout";
import movieDetailPageLoader from "./pages/MovieDetailPage/MovieDetailPage.loader";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import useMyPageLoader from "./pages/MyPage/MyPage.loader";

// 어느 페이지에 들어가던지 헤더가 존재
// 회원가입 버튼 추가 -> 페이지 접속
// 홈페이지에서 영화 눌렀을 때 영화 상세 페이지 접속
// 동적 라우팅을 사용해 구현

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "sign-up",
        element: <SignUpPage />,
      },

      {
        path: "log-in",
        element: <LoginPage />,
      },

      {
        path: "my-page",
        element: <MyPage />,
      },

      {
        path: "movies/:movieId",
        element: <MovieDetailPage />,
        loader: movieDetailPageLoader,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
