import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// Components
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import ReactJsAlert from "reactjs-alert";
import AuthContext from "../../context/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {auth, setAuth} = useContext(AuthContext);
  const [alert, setAlert] = useState({});
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    let formChange = { ...form };
    formChange[e.target.name] = e.target.value;
    setForm(formChange);
  };

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/user")
        .then((res) => res.json())
        .then((json) => {
          setUser(json);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const handleLogin = () => {
    if (form.username !== user.username || form.password !== user.password) {
      setAlert({
        type: "error",
        status: true,
        title: "Username or password wrong!",
      });
      return true;
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    setAuth(user);
    navigate("/");
  };

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <ReactJsAlert
        status={alert.status} // true or false
        type={alert.type} // success, warning, error, info
        title={alert.title}
        Close={() => setAlert({ status: false })}
      />
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Login</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <Form>
                <label className="font13">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="font20 extraBold"
                  defaultValue={form.username}
                  onChange={handleChange}
                />
                <label className="font13">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="font20 extraBold"
                  defaultValue={form.password}
                  onChange={handleChange}
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="LOGIN"
                  className="pointer animate radius8"
                  style={{ maxWidth: "220px" }}
                  onClick={handleLogin}
                />
              </SumbitWrapper>
            </div>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src="https://placeimg.com/426/607/tech"
            alt="office"
            style={{ zIndex: 9 }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  OkeLapak provides technology as a solution to empower millions
                  of sellers and consumers to participate in building the future
                  of commerce.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                - OkeLapak.com
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
