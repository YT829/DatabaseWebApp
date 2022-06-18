import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <div className="login-box">
          <img
            className="center"
            width="50%^"
            src="/goodies-logo.png"
            alt="goodies"
          />
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input
              type="email"
              placeholder="Input email"
              name="email"
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Input password"
              name="password"
              required
            />
            <input
              type="button"
              className="button"
              onclick="submitSignUp"
              defaultValue="Submit"
            />
          </form>
        </div>
        <p className="para-2">
          Not have an account? <a href="signup">Sign Up Here</a>
        </p>
      </div>
    );
  }
}

export default Login;
