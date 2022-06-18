import React, { Component } from "react";
import "./index.css";

class Payment extends Component {
  render() {
    return (
      <div>
        <div className="container-payment">
          <form action>
            <div className="row">
              <div className="col">
                <h3 className="title">Billing Address</h3>
                <div className="inputBox">
                  <span>Full Name :</span>
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="inputBox">
                  <span>Email :</span>
                  <input type="email" placeholder="example@example.com" />
                </div>
                <div className="inputBox">
                  <span>Phone Number :</span>
                  <input type="email" placeholder="0123 456 789" />
                </div>
                <div className="inputBox">
                  <span>Address :</span>
                  <input type="text" placeholder="Address" />
                </div>
                <div className="inputBox">
                  <span>City :</span>
                  <input type="text" placeholder="City" />
                </div>
                <div className="inputBox">
                  <span>Coupon Code :</span>
                  <input type="text" placeholder="Coupon Code" />
                </div>
              </div>
              <div className="col">
                <h3 className="title">Payment</h3>
                <div className="inputBox">
                  <span>Cards Accepted :</span>
                  <img src="/card_img.png" alt="" />
                </div>
                <div className="inputBox">
                  <span>Name on Card :</span>
                  <input type="text" placeholder="Mr.Example" />
                </div>
                <div className="inputBox">
                  <span>Credit Card Number :</span>
                  <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div className="inputBox">
                  <span>Exp Month :</span>
                  <input type="text" placeholder="January" />
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>Exp Year :</span>
                    <input type="number" placeholder={2022} />
                  </div>
                  <div className="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder={1234} />
                  </div>
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>State :</span>
                    <input type="text" placeholder="Taiwan" />
                  </div>
                  <div className="inputBox">
                    <span>ZIP Code :</span>
                    <input type="text" placeholder={123456} />
                  </div>
                </div>
              </div>
            </div>
            <button className="submit-btn">Proceed To Checkout</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Payment;
