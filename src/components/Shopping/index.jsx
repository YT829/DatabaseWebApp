import React, { useState, useEffect } from "react";
import "./index.css";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const baseURL = "http://localhost:3000/products";

const Shopping = () => {
  const [post, setPost] = useState("");

  const deletePost = (id) => {
    axios.delete(`baseURL/${id}`);
    setPost(
      post.filter((posts) => {
        return posts.id !== id;
      })
    );
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
                <img src="images/logo.jpg" alt="" />
                <div>
                  <p>{post[20].product_name}</p>
                  <small>${post[20].product_price}</small>
                  <br />
                  <button onClick={() => deletePost(post[20].id)}>
                    <a className="remove" href>
                      Remove
                    </a>
                  </button>
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
};

export default Shopping;
