import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./index.css";

const Thankyou = () => {
  return (
    <div className="container-thankyou">
      <form action>
        <p className="thankyou">Thank you for your purchase!</p>
        <LinkContainer to={`/`}>
          <button className="button-thankyou">Go back to homepage</button>
        </LinkContainer>
      </form>
    </div>
  );
};

export default Thankyou;
