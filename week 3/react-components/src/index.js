import React from 'react';
import ReactDOM from 'react-dom';
// import HelloComponent from './components/HelloComponent';
// import './index.css';
// import App from './App';
// import Test from './components/Test';
import './css/login.css'
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';

// function HelloComponent() {
//   return HelloComponent;
// }

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>StateFullComponent</p>;
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
