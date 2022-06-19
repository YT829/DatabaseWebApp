import React, { Component } from "react";
import "./index.css";
import { LinkContainer } from "react-router-bootstrap";

class Profile extends Component {
  render() {
    return (
      <div className="container-profile">
        <div className="left">
          <img src="/user.png" className="image" alt="" />
          <h1 className="name">Davidson</h1>
          <ul className="ul-profile">
            <li className="li-profile">
              <a href="/">Home</a>
            </li>
            <li className="li-profile">
              <a href="shopping">My Order</a>
            </li>
            <li className="li-profile">
              <a href>Log Out</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="content">
            <div className="content-tittle">User Name</div>
            <div className="content-inside">Davidson</div>
            <hr />
            <div className="content-tittle">Email</div>
            <div className="content-inside">davidson@gmail.com</div>
            <hr />
            <div className="content-tittle">Phone Number</div>
            <div className="content-inside">0123 456 789</div>
            <hr />
            <div className="content-tittle">Address</div>
            <div className="content-inside">
              Taipei, 1 Street 1 Alley, No.1, 123
            </div>
            <br />
            <div className="button">
              <LinkContainer to="/edit" className="button-edit">
                <button>Edit Profile</button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
