import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Form Login</h1>
        </div>
        <div className="card">
          <div className="card-header">
            <h1>Tugas Pertemuan Ketiga</h1>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Masukkan username" />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Masukkan password" />
              </div>
              <div class="buttons">
                <button class="btn-hover color-green">LOGIN</button>
              </div>
              <div className="form-control-cb">
                <input type="checkbox" />
                <label htmlFor="remember">Remember Me</label>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button type="button">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
