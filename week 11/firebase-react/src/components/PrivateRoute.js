import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => {
  return isVerifying ? (
    <div />
  ) : isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to={"/login"} />
  );
};

export default PrivateRoute;
