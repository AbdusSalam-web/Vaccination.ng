import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/banner/Banner";
import Vaccin from "../components/vaccin/Vaccin";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Banner />
      <Vaccin />
    </>
  );
};

export default Layout;
