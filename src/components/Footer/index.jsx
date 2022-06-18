import React, { Component } from "react";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <div className="row">
              <hr className="solid" />
              <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download Our app for Android and IOS Mobile Phone</p>
                <div className="app-logo">
                  <img src="/playstore.jpg" alt="goodies" />
                  <img src="/appstore.jpg" alt="goodies" />
                </div>
              </div>
              <div className="footer-col-2">
                <img src="/goodies-logo.png" alt="goodies" />
                <ul className="list">
                  <li>About Us</li>
                  <li>News & Info</li>
                  <li>Customer Care</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="footer-col-3">
                <h3>Useful Links</h3>
                <ul className="list">
                  <li>Coupons</li>
                  <li>Blog Post</li>
                  <li>Return Policy</li>
                  <li>Join Affiliate</li>
                </ul>
              </div>
              <div className="footer-col-4">
                <h3>Follow Us</h3>
                <ul className="list">
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Youtube</li>
                </ul>
              </div>
            </div>
            <hr className="solid" />
            <p className="copyright">Copyright 2022 - Goodies Wholesale</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
