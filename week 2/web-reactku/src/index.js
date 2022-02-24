import React from "react";
import ReactDOM from "react-dom";
import Demo from "./components/Demo";
import "./styles/demo.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Hello = () => {
  return <p>Hello World</p>;
};

ReactDOM.render(<Demo />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
