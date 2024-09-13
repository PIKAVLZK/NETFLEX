/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./Page.module.scss";
import { Outlet } from 'react-router-dom';

function Page({children}) {
  
  return (
    <main className="pl-10 z-0 relative">
      {children}
    </main>
  )
}

export default Page;