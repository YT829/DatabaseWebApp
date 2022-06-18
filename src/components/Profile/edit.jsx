import React, { Component } from "react";
import "./index.css";
import { LinkContainer } from "react-router-bootstrap";

class Edit extends Component {
  render() {
    return (
      <div className="container-profile">
        <div className="left">
          <img src="user.png" className="image" alt="" />
          <h1>Davidson</h1>
          <hr />
          <ul className="ul-profile">
            <li className="li-profile">
              <a href="/">Home</a>
            </li>
            <li className="li-profile">
              <a href="/shopping">My Order</a>
            </li>
            <li className="li-profile">
              <a href>Log Out</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="content">
            <div className="content-tittle">User Name</div>
            <div className="content-inside">
              <input
                type="text"
                placeholder="New Username"
                name="username-update"
              />
            </div>
            <hr />
            <div className="content-tittle">Email</div>
            <div className="content-inside">
              <input
                type="email"
                placeholder="New Email"
                name="email-update"
                required
              />
            </div>
            <hr />
            <div className="content-tittle">Phone Number</div>
            <div className="content-inside">
              <input
                type="number"
                placeholder="New Phone Number"
                name="phone-number-update"
                required
              />
            </div>
            <hr />
            <div className="content-tittle">Address</div>
            <div className="content-inside">
              <input
                type="text"
                placeholder="New Address"
                name="address-update"
                required
              />
            </div>
            <br />
            <div className="button">
              <LinkContainer to="/profile">
                <button className="button-save" href="profile">
                  Save
                </button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
