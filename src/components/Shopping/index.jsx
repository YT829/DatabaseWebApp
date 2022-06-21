import React, { useState, useEffect } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const baseURL = "http://localhost:3000/products";

const Shopping = () => {
  const [post, setPost] = useState("");
  const [item1, setItem1] = useState(1);
  const [item2, setItem2] = useState(1);
  const [item3, setItem3] = useState(1);

  const incrementHandler1 = () => {
    setItem1((count) => count + 1);
  };
  const decrementHandler1 = () => {
    setItem1((count) => count - 1);
  };
  const incrementHandler2 = () => {
    setItem2((count) => count + 1);
  };
  const decrementHandler2 = () => {
    setItem2((count) => count - 1);
  };
  const incrementHandler3 = () => {
    setItem3((count) => count + 1);
  };
  const decrementHandler3 = () => {
    setItem3((count) => count - 1);
  };

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

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
                <img src={post[0].product_image} alt="" />
                <div>
                  <p>{post[0].product_name}</p>
                  <small>${post[0].product_price}</small>
                  <br />
                  <a className="remove" href>
                    Remove
                  </a>
                </div>
              </div>
            </td>
            <td>
              <button onClick={decrementHandler1}>-</button>
              <span> {item1} </span>
              <button onClick={incrementHandler1}>+</button>
            </td>
            <td>${post[0].product_price * item1}</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={post[1].product_image} alt="goodies" />
                <div>
                  <p>{post[1].product_name}</p>
                  <small>${post[1].product_price}</small>
                  <br />
                  <a className="remove" href>
                    Remove
                  </a>
                </div>
              </div>
            </td>
            <td>
              <button onClick={decrementHandler2}>-</button>
              <span> {item2} </span>
              <button onClick={incrementHandler2}>+</button>
            </td>
            <td>${post[1].product_price * item2}</td>
          </tr>
          <tr>
            <td>
              <div className="cart-info">
                <img src={post[2].product_image} alt="goodies" />
                <div>
                  <p>{post[2].product_name}</p>
                  <small>${post[2].product_price}</small>
                  <br />
                  <a className="remove" href>
                    Remove
                  </a>
                </div>
              </div>
            </td>
            <td>
              <button onClick={decrementHandler3}>-</button>
              <span> {item3} </span>
              <button onClick={incrementHandler3}>+</button>
            </td>
            <td>${post[2].product_price * item3}</td>
          </tr>
        </tbody>
      </table>
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>
                $
                {post[0].product_price * item1 +
                  post[1].product_price * item2 +
                  post[2].product_price * item3}
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>
                $
                {post[0].product_price * item1 +
                  post[1].product_price * item2 +
                  (post[2].product_price * item3 * 10) / 100}
              </td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>
                $
                {post[0].product_price * item1 +
                  post[1].product_price * item2 +
                  post[2].product_price * item3 +
                  post[0].product_price * item1 +
                  post[1].product_price * item2 +
                  (post[2].product_price * item3 * 10) / 100}
              </td>
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
};

export default Shopping;
