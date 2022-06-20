import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import Features from "../Features";
import "./index.css";
import axios from "axios";

const baseURL = "http://localhost:3000/products";

const Home = () => {
  const [show, setShow] = useState(false);
  const [post, setPost] = useState("");
  const [cart, setCart] = useState(0);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  const buyHandler = () => {
    setShow(true);
    if (setShow) {
      setCart(cart + 1);
      console.log(cart);
    }
  };

  return (
    <div>
      <Features />
      <div className="wrapper">
        <Alert show={show} variant="success">
          <Alert.Heading>Added to cart!</Alert.Heading>
          <div>
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close!
            </Button>
          </div>
        </Alert>
        <div className="container-home">
          <div className="right-text">Our Fresh Product</div>
          {post.map((element, index) => {
            return (
              <div className="product" key={index}>
                <img
                  className="product-picture"
                  src={element.product_image}
                  alt=""
                />
                <div className="poduct-name">{element.product_name}</div>
                <div className="poduct-price">${element.product_price}</div>
                <div className="poduct-availability">
                  Stock: {element.quantity}
                </div>
                <button onClick={() => buyHandler()} className="product-button">
                  Buy
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
