import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header"
const Layout = () => {
  return ( 
    <>
      <Header />
      <Outlet />
      <footer>
        <span>Ⓒ 2022 #VANLIFE</span>
      </footer>
    </>
  );
}
export default Layout;