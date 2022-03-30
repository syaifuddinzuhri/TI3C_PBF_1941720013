import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/auth/useAuth";

const Guest = () => {
  const { auth, setAuth, user } = useAuth();
  const location = useLocation();

  return user ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default Guest;
