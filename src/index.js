import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Navbars from "./components/Navbar";
import Signup from "./components/Login/signup";
import Shopping from "./components/Shopping";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Edit from "./components/Profile/edit";
import Payment from "./components/Payment";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbars />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
