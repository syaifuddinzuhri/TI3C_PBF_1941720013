import React from "react";
import Helmet from "react-helmet";
import Login from "../../components/Sections/Login";

const Loginlayout = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Login />
    </>
  );
};

export default Loginlayout;
