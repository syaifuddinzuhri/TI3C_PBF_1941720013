import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footercomponent from "./FooterComponent";
import Navbarcomponent from "./NavbarComponent";

const Mainlayout = () => {
  return (
    <>
      <Navbarcomponent />
      <Container className="py-5" style={{ minHeight: "100vh" }}>
        <Outlet />
      </Container>
      <Footercomponent />
    </>
  );
};

export default Mainlayout;