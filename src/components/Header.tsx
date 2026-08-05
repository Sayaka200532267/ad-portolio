import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
    <Container>
      <Navbar.Brand as={Link} to="/">
        さやか | 広告運用×計測
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
          <Nav.Link as={HashLink} smooth to="/#problems">
            お悩み
          </Nav.Link>

          <Nav.Link as={HashLink} smooth to="/#improvements">
            改善案
          </Nav.Link>

          <Nav.Link as={HashLink} smooth to="/#about">
            自己紹介
          </Nav.Link>

          <Nav.Link as={HashLink} smooth to="/#skills">
            スキル
          </Nav.Link>

          <Nav.Link as={HashLink} smooth to="/#contact">
            お問い合わせ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;