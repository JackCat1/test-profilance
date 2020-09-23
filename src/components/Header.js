import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "./Auth";
export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="1">Test Profilance</Navbar.Brand>
              <Nav className="mr-auto">
                <Link to="/" className="text-light nav-link mr-3">
                  Главная
                </Link>
                <Link to="/news/" className="text-light nav-link mr-3">
                  Новости
                </Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => setShowModal(!showModal)}
                >
                  Вход / Выход
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <div
        style={{
          display: showModal ? "flex" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      >
        <div
          className="bg-white p-3 pt-5 position-relative"
          style={{ borderRadius: "10px" }}
        >
          <Auth finish={() => setShowModal(false)}/>
          <button
            style={{
              position: "absolute",
              top: 0,
              right: ".5rem",
              border: "none",
              backgroundColor: "transparent",
              fontSize: "2em",
              fontWeight: "bold",
            }}
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
      </div>
    </header>
  );
};
