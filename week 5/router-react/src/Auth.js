import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";

export default function Auth() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public page</Link>
          </li>
          <li>
            <Link to="/private">Private page</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/public" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/private" element={<PrivateRoute />}>
            <Route path="/private" element={<ProtectedPage />} />
          </Route>
        </Routes>
      </div>
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

function AuthButton() {
  let navigate = useNavigate();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={() => fakeAuth.signout(() => navigate("/"))}>
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in</p>
  );
}

const PrivateRoute = () => {
  return fakeAuth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected Page</h3>;
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/private" } };

  let login = () => {
    fakeAuth.authenticated(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}
