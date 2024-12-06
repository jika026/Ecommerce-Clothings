import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Qualities from "./Qualities";

const AppLayout = () => {
  const ref = useRef();
  return (
    <>
      <TopBar ref={ref} />
      <main>
        <Outlet />
      </main>
      <Qualities />
      <Footer />
    </>
  );
};

export default AppLayout;
