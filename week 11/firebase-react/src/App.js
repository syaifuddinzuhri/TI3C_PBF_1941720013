import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { connect } from "react-redux";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <>
      <Routes>
        <Route
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              isVerifying={isVerifying}
            />
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}
export default connect(mapStateToProps)(App);
