import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import List from "./components/List";

export default function Main() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Jumbotron />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<PrivateRoute />}>
          <Route path="/products" element={<List />} />
        </Route>
      </Routes>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/products" } };

  fakeAuth.authenticated(() => {
    navigate(from, { replace: true });
  });
  return <Outlet />;
}

const PrivateRoute = () => {
  return fakeAuth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/products" } };

  let login = () => {
    fakeAuth.authenticated(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          Online Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {fakeAuth.isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link to="/products" className="nav-link active" href="#">
                    Products
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="navbar-nav">
            {fakeAuth.isAuthenticated ? (
              <li className="nav-item">
                <button
                  className="nav-link btn"
                  onClick={() => fakeAuth.signout(() => navigate("/"))}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn" onClick={login}>
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
