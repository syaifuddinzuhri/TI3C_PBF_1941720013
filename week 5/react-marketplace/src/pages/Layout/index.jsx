import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/Nav/TopNavbar";
import Footer from "../../components/Sections/Footer"

const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default MainLayout;
