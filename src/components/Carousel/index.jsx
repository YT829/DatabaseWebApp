import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";

const UncontrolledExample = () => {
  return (
    <div className="container-carousel">
      <Carousel className="carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://thumbs.dreamstime.com/b/product-advertisement-beauty-cosmetic-cream-mockup-pretty-pink-color-great-health-facial-care-products-196679991.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://s3.amazonaws.com/media.mediapost.com/dam/cropped/2019/12/06/screenshot-2019-12-05-at-23107-pm_kKdoMd4.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.wordstream.com/wp-content/uploads/2021/07/persuasive-ads-coca-cola.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default UncontrolledExample;
