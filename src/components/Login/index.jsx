import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

const baseURL = "http://localhost:3000/user";

const Login = () => {
  const [post, setPost] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    password: "invalid password",
  };

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const renderErrorMessage = (name) => {
    name === errorMessage.name && (
      <div className="error">{errorMessage.message}</div>
    );
  };

  const handleSubmitEvent = (e) => {
    // e.preventDefault();

    const userData = post.filter((user) => user.username === post.username);

    if (userData) {
      if (userData.password !== post.password) {
        setErrorMessage({ name: "password", message: errors.password });
      } else {
        setErrorMessage({ name: "uname", message: errors.uname });
      }
    }
  };
  const renderForm = (
    <div>
      <div className="login-box">
        <img
          className="center"
          width="50%^"
          src="/goodies-logo.png"
          alt="goodies"
        />
        <h1>Login</h1>

        <form onSubmit={handleSubmitEvent}>
          <div>
            <label>Email or Username</label>
            <input
              type="text"
              placeholder="Input email or username"
              name="uname"
              required
            />
            {renderErrorMessage("uname")}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Input password"
              name="password"
              required
            />
            {renderErrorMessage("password")}
          </div>
          <LinkContainer to="/">
            <input type="submit" />
          </LinkContainer>
        </form>
      </div>
      <p className="para-2">
        Not have an account? <a href="signup">Sign Up Here</a>
      </p>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
