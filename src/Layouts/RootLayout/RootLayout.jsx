/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import styles from "./RootLayout.module.scss";

function RootLayout({ currentUser }) {
  return (
    <div className="bg-black h-[100vw]">
      <Header currentUser={currentUser} />

      <Outlet />
    </div>
  );
}

export default RootLayout;
