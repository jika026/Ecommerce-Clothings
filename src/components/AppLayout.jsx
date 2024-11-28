import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Qualities from "./Qualities";

const AppLayout = () => {
  return (
    <>
      <TopBar />
      <main>
        <Outlet />
      </main>
      <Qualities />
      <Footer />
    </>
  );
};

export default AppLayout;
