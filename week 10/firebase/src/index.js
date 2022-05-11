import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import routes from './routes.js';
import Header from './Header';
import './styles.css';
import firebase from 'firebase/compat/app';
import firebaseConfig from "./firebase.config.js";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            Is Logged In? {JSON.stringify(isLoggedIn)}
            <div className="App">
                <Router>
                    <Header />
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </Switch>
                </Router>
            </div>
        </AuthContext.Provider>
    )
}


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
