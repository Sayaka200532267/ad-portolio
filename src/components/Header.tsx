import React from "react";
import { Navbar, Nav, Container, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// App.tsx から渡される props の型定義
type Language = "ja" | "en";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  // 言語に応じたナビゲーションテキストの設定
  const navLabels = {
    brand: lang === "ja" ? "さやか | 広告運用×計測" : "Sayaka | Ad Ops & Analytics",
    problems: lang === "ja" ? "お悩み" : "Pain Points",
    improvements: lang === "ja" ? "改善案" : "Solutions",
    about: lang === "ja" ? "自己紹介" : "About Me",
    achievements: lang === "ja" ? "実績" : "Achievements",
    skills: lang === "ja" ? "スキル" : "Skills",
    contact: lang === "ja" ? "お問い合わせ" : "Contact",
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {navLabels.brand}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
            <Nav.Link as={HashLink} smooth to="/#problems">
              {navLabels.problems}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#improvements">
              {navLabels.improvements}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#about">
              {navLabels.about}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#achievements">
              {navLabels.achievements}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#skills">
              {navLabels.skills}
            </Nav.Link>

            <Nav.Link as={HashLink} smooth to="/#contact">
              {navLabels.contact}
            </Nav.Link>
          </Nav>

          {/* 言語切替ボタン */}
          <ButtonGroup size="sm" className="ms-auto mt-2 mt-lg-0">
            <Button
              variant={lang === "ja" ? "light" : "outline-light"}
              onClick={() => setLang("ja")}
            >
              JP
            </Button>
            <Button
              variant={lang === "en" ? "light" : "outline-light"}
              onClick={() => setLang("en")}
            >
              EN
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;