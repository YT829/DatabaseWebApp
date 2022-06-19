import React from "react";
import "./index.css";

const Features = () => {
  return (
    <div className="wrapper">
      <div className="container-features">
        <div className="bar">
          <div className="bar-all left-top">
            <div className="text-left-top">Our Newest Products</div>
            <img
              className="img-left-top"
              src="/new.png"
              alt="Our New Product"
            />
          </div>
          <div className="bar-all left-bottom">
            <img
              className="img-left-bottom"
              src="/megaphone.png"
              alt="Flash Sale"
            />
            <div className="text-left-bottom">Flash Sale!!!</div>
          </div>
        </div>
        <div className="bar">
          <div className="bar-all right-top">
            <img
              className="img-right-top"
              src="/shopping-bag.png"
              alt="Weekly Promo"
            />
            <div className="text-right-top">Weekly Promo</div>
            <img
              className="img-right-top"
              src="/discount.png"
              alt="Weekly Promo"
            />
          </div>
          <div className="bar-all right-bottom">
            <div className="text-right-bottom">Free Shipping Delivery</div>
            <img
              className="img-right-bottom"
              src="/free-shipping.png"
              alt="free Shipping"
            />
          </div>
        </div>
        <div className="bar-right">
          <div className="text-bar-right" style={{ fontSize: "40px" }}>
            New Year Festival
          </div>
          <div className="text-bar-right" style={{ fontSize: "25px" }}>
            Get Cashback Up to 70%
          </div>
          <img className="img-bar-right" src="/cash-back.png" alt="Cash Back" />
        </div>
      </div>
    </div>
  );
};

export default Features;
