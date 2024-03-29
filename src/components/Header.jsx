import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {/* {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => ( */}
        <Navbar className=" mb-3" bg="dark">
          <Container
            fluid
            className="nav"
            style={{
              margin: "0",
              padding: "0",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Navbar.Brand href="/">
              <img src="../../../public/Image resources/logo.png" alt="" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="/"
                    className="links"
                    style={{
                      fontSize: "18px",
                      color: "white",
                      padding: "15px",
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/products"
                    style={{
                      fontSize: "18px",
                      color: "white",
                      padding: "15px",
                    }}
                  >
                    Products
                  </Nav.Link>
                  <Nav.Link
                    href="/products"
                    style={{
                      fontSize: "18px",
                      color: "white",
                      padding: "15px",
                    }}
                  >
                    About
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link
                  href="#action2"
                  style={{
                    fontSize: "25px",
                    marginLeft: "30px",
                    color: "white",
                  }}
                >
                  <Badge badgeContent={1} color="primary">
                    <FaShoppingCart />
                  </Badge>
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        {/* ))} */}
      </div>
    </div>
  );
};

export default Header;
