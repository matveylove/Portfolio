import React from "react";
import { Outlet } from "react-router-dom";

// import components
import MyHeader from "./MyHeader/MyHeader";

const Layout = () => {
  return (
    <>
      <MyHeader />
      <Outlet />
    </>
  );
};

export default Layout;
