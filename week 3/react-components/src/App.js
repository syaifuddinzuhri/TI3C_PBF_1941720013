import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <h1>Component dari Class App</h1>
        </div>
        <List/>
        <Footer judul="Halaman Footer" nama="Mochammad Syaifuddin Zuhri" />
      </div>
    );
  }
}

export default App;
