import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/auth/useAuth";

const Authenticate = () => {
  const { auth, setAuth, user } = useAuth();
  const location = useLocation();
  
  return user? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Authenticate;
