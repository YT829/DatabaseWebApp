import React, { Component } from "react";
import "./index.css";

class Signup extends Component {
  render() {
    return (
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <div className="signup-box">
          <img
            className="center"
            width="50%^"
            src="goodies-logo.png"
            alt="goodies"
          />
          <h1>Sign Up</h1>
          <form>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              name="first-name"
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="last-name"
              required
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Input email"
              name="email"
              required
            />
            <label>Phone Number</label>
            <input
              type="phone-number"
              placeholder="Phone Number"
              name="phone-number"
              required
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Input password"
              name="password"
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Repeat password"
              name="repeat-password"
              required
            />
            <input
              type="button"
              className="button"
              onclick="submitSignUp"
              defaultValue="Submit"
            />
          </form>
          <p>
            By clicking the Sign Up button, you agree to our <br />
            Terms and Condition and Policy Privacy
          </p>
        </div>
        <p className="para-2">
          Already have an account? <a href="login">Login here</a>
        </p>
      </div>
    );
  }
}

export default Signup;
