import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";
import "./index.css";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar className="img-container" bg="light" expand="lg">
          <LinkContainer to="/">
            <img src="/goodies-logo.png" alt="" />
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shopping">
                <Nav.Link>Shopping Bag</Nav.Link>
              </LinkContainer>
              <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item href="#action4">Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <LinkContainer to="/signup">
              <Button className="me-2" variant="outline-success" size="lg">
                Sign Up
              </Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button className="me-2" variant="success" size="lg">
                Log In
              </Button>
            </LinkContainer>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
