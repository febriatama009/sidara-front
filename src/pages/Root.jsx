import React from "react";
import { Footer, NavBar } from "../components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
