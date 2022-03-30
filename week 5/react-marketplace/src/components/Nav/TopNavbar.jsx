import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import OkeLogo from "../../assets/img/oke.png";

export default function TopNavbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={OkeLogo} width="30" alt="" />
            <h1 style={{ marginLeft: "5px" }} className="font20 extraBold">
              OkeLapak
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <NavLink to="/" style={{ padding: "10px 15px" }}>
                Home
              </NavLink>
            </li>
            <li className="semiBold font15 pointer">
              <NavLink to="/product" style={{ padding: "10px 15px" }}>
                Products
              </NavLink>
            </li>
            <li className="semiBold font15 pointer">
              <NavLink to="/cart" style={{ padding: "10px 15px" }}>
                Cart
              </NavLink>
            </li>
            <li className="semiBold font15 pointer">
              <NavLink to="/transaction" style={{ padding: "10px 15px" }}>
                Transaction
              </NavLink>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {user ? (
              <li className="semiBold font15 pointer">
                <span
                  onClick={handleLogout}
                  style={{ padding: "10px 30px 10px 0" }}
                >
                  Log Out
                </span>
              </li>
            ) : (
              <li className="semiBold font15 pointer">
                <NavLink to="/login" style={{ padding: "10px 30px 10px 0" }}>
                  Log in
                </NavLink>
              </li>
            )}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
