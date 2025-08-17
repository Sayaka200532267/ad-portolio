import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
    <Container>
      <Navbar.Brand href="#">広告運用ポートフォリオ</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
          <Nav.Link href="#problems">お悩み</Nav.Link>
          <Nav.Link href="#improvements">改善案</Nav.Link>
          <Nav.Link href="#about">自己紹介</Nav.Link>
          <Nav.Link href="#skills">スキル</Nav.Link>
          <Nav.Link href="#challenge">これからの挑戦</Nav.Link>
          <Nav.Link href="#contact">お問い合わせ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
