import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import Features from "../Features";
import "./index.css";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <>
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
          <div className="product">
            <img className="product-picture" src="/meat.jpg" alt="" />
            <div className="poduct-name">Sirloin Beef 150gr</div>
            <div className="poduct-price">130 NTD</div>
            <div className="poduct-availability">Ready Stock</div>
            <div className="button-center">
              <button onClick={() => setShow(true)} className="product-button">
                Buy
              </button>
            </div>
          </div>
          <div className="product">
            <img className="product-picture" src="/salmon.jpg" alt="" />
            <div className="poduct-name">Salmon 120gr</div>
            <div className="poduct-price">180 NTD</div>
            <div className="poduct-availability">Ready Stock</div>
            <div className="button-center">
              <button onClick={() => setShow(true)} className="product-button">
                Buy
              </button>
            </div>
          </div>
          <div className="product">
            <img className="product-picture" src="/shrimp.jpg" alt="" />
            <div className="poduct-name">Shrimp</div>
            <div className="poduct-price">190 NTD</div>
            <div className="poduct-availability">Ready Stock</div>
            <div className="button-center">
              <button onClick={() => setShow(true)} className="product-button">
                Buy
              </button>
            </div>
          </div>
          <div className="product">
            <img className="product-picture" src="/onion.jpg" alt="" />
            <div className="poduct-name">Onion 3pcs</div>
            <div className="poduct-price">80 NTD</div>
            <div className="poduct-availability">Ready Stock</div>
            <div className="button-center">
              <button onClick={() => setShow(true)} className="product-button">
                Buy
              </button>
            </div>
          </div>
          <div className="product">
            <img className="product-picture" src="/potato.jpg" alt="" />
            <div className="poduct-name">Potato 3pcs</div>
            <div className="poduct-price">75 NTD</div>
            <div className="poduct-availability">Ready Stock</div>
            <div className="button-center">
              <button onClick={() => setShow(true)} className="product-button">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
