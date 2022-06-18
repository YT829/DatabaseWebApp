import React, { Component } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Shopping extends Component {
  render() {
    return (
      <div className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="images/logo.jpg" alt="goodies" />
                  <div>
                    <p>Goodies Wholesale</p>
                    <small>Price: $50.00</small>
                    <br />
                    <a className="remove" href>
                      Remove
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="images/logo.jpg" alt="goodies" />
                  <div>
                    <p>Goodies Wholesale</p>
                    <small>Price: $50.00</small>
                    <br />
                    <a className="remove" href>
                      Remove
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>
                <div className="cart-info">
                  <img src="images/logo.jpg" alt="goodies" />
                  <div>
                    <p>Goodies Wholesale</p>
                    <small>Price: $50.00</small>
                    <br />
                    <a className="remove" href>
                      Remove
                    </a>
                  </div>
                </div>
              </td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>$50.00</td>
            </tr>
          </tbody>
        </table>
        <div className="total-price">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>$25.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>$175.00</td>
              </tr>
            </tbody>
            <div className="inline">
              <LinkContainer to="/payment">
                <Button className="tombol" variant="success">
                  Pay
                </Button>
              </LinkContainer>
              <Button className="tombol" variant="danger" href="/">
                Cancel
              </Button>
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default Shopping;
