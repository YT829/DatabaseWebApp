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
              <input type="number" defaultValue={1} />
            </td>
            <td>${post[0].product_price}</td>
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
              <input type="number" defaultValue={1} />
            </td>
            <td>${post[1].product_price}</td>
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
              <input type="number" defaultValue={1} />
            </td>
            <td>${post[2].product_price}</td>
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
                {post[0].product_price +
                  post[1].product_price +
                  post[2].product_price}
              </td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>
                $
                {post[0].product_price +
                  post[1].product_price +
                  (post[2].product_price * 10) / 100}
              </td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>
                $
                {post[0].product_price +
                  post[1].product_price +
                  post[2].product_price +
                  post[0].product_price +
                  post[1].product_price +
                  (post[2].product_price * 10) / 100}{" "}
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
