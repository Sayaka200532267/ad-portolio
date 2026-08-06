import React from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import "../App.css";

import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaReact,
  FaTags,
  FaDatabase,
  FaGlobeAmericas,
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCanva,
  SiAdobeillustrator,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

import {
  AiOutlineLineChart,
} from "react-icons/ai";

import {
  MdLanguage,
} from "react-icons/md";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const SkillsAccordion: React.FC = () => {
  const lineUrl = "https://lin.ee/x8trSVq";

  return (
    <Container id="skills" className="my-5">
      <h2
        className="text-center mb-4"
        style={{ fontSize: "1.7rem", fontWeight: 700 }}
      >
        使用ツール・技術・言語
      </h2>

      <Accordion alwaysOpen className="custom-accordion">
        {/* =====================
              PC版
        ===================== */}
        <div className="pc-block">
          {/* 0. 広告 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header">
              広告プラットフォーム
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaGoogle style={{ marginRight: "0.4rem" }} />
                  Google広告
                </li>
                <li>
                  <FaFacebookF style={{ marginLeft: "0.4rem" }} />
                  <FaInstagram style={{ marginRight: "0.2rem" }} />
                  Meta広告（Facebook / Instagram）
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 1. 計測 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion-header">
              計測・分析ツール
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaTags style={{ marginRight: "0.4rem" }} />
                  Google Tag Manager（GTM）
                </li>
                <li>
                  <AiOutlineLineChart style={{ marginRight: "0.4rem" }} />
                  Google Analytics 4（GA4）
                </li>
                <li>
                  <AiOutlineLineChart style={{ marginRight: "0.4rem" }} />
                  BigQuery
                </li>
                <li>
                  <AiOutlineLineChart style={{ marginRight: "0.4rem" }} />
                  Looker Studio
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 2. Web制作・CMSプラットフォーム */}
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">
              Web制作・CMSプラットフォーム
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiHtml5 style={{ marginRight: "0.2rem" }} />
                  HTML
                  <SiCss3
                    style={{
                      marginLeft: "0.8rem",
                      marginRight: "0.2rem",
                    }}
                  />
                  CSS
                </li>
                <li>
                  <SiJavascript
                    style={{ marginRight: "0.2rem", marginLeft: "0.6rem" }}
                  />
                  JavaScript
                  <FaReact
                    style={{ marginRight: "0.2rem", marginLeft: "0.8rem" }}
                  />
                  React
                </li>
                <li>
                  <SiShopify
                    style={{ marginRight: "0.4rem", marginLeft: "0.4rem" }}
                  />
                  Shopify
                  <SiWordpress
                    style={{ marginRight: "0.2rem", marginLeft: "0.8rem" }}
                  />
                  WordPress
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 3. デザイン */}
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion-header">
              デザインツール
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiCanva style={{ marginRight: "0.4rem" }} />
                  Canva
                </li>
                <li>
                  <SiFigma
                    style={{ marginRight: "0.2rem", marginLeft: "0.4rem" }}
                  />
                  Figma
                </li>
                <li>
                  <SiAdobeillustrator
                    style={{ marginRight: "0.2rem", marginLeft: "0.6rem" }}
                  />
                  Illustrator
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 4. データベース言語 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion-header">
              データベース言語
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaDatabase
                    style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}
                  />
                  SQL (BigQuery)
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 5. 対応言語 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion-header">
              対応言語
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaGlobeAmericas
                    style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}
                  />
                  英語 (ビジネス対応可 / ローカライズ対応)
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        {/* =====================
              スマホ版
        ===================== */}
        <div className="mobile-block">
          {/* 0. 広告 */}
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header">
              広告プラットフォーム
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaGoogle style={{ marginRight: "0.4rem" }} />
                  Google広告
                </li>
                <li>
                  <FaFacebookF style={{ marginLeft: "0.4rem" }} />
                  <FaInstagram style={{ marginRight: "0.2rem" }} />
                  Meta広告
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 1. 計測 */}
          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion-header">
              計測・分析ツール
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaTags style={{ marginRight: "0.4rem" }} />
                  GTM
                </li>
                <li>
                  <AiOutlineLineChart style={{ marginRight: "0.4rem" }} />
                  GA4
                </li>
                <li>
                  <AiOutlineLineChart style={{ marginRight: "0.4rem" }} />
                  BigQuery
                </li>
                <li>
                  <AiOutlineLineChart style={{ marginRight: "0.4rem" }} />
                  Looker Studio
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 2. Web制作・CMS */}
          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">
              Web制作・CMS
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiHtml5 style={{ marginRight: "0.2rem" }} />
                  HTML /
                  <SiCss3
                    style={{ marginLeft: "0.4rem", marginRight: "0.2rem" }}
                  />
                  CSS
                </li>
                <li>
                  <SiJavascript
                    style={{ marginRight: "0.2rem", marginLeft: "0.4rem" }}
                  />
                  JavaScript /
                  <FaReact
                    style={{ marginRight: "0.2rem", marginLeft: "0.4rem" }}
                  />
                  React
                </li>
                <li>
                  <SiShopify
                    style={{ marginRight: "0.4rem", marginLeft: "0.4rem" }}
                  />
                  Shopify /
                  <SiWordpress
                    style={{ marginRight: "0.2rem", marginLeft: "0.4rem" }}
                  />
                  WordPress
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 3. デザイン */}
          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion-header">
              デザインツール
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiCanva style={{ marginRight: "0.4rem" }} />
                  Canva
                </li>
                <li>
                  <SiFigma style={{ marginRight: "0.4rem" }} />
                  Figma
                </li>
                <li>
                  <SiAdobeillustrator style={{ marginRight: "0.4rem" }} />
                  Illustrator
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 4. データベース言語 */}
          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion-header">
              データベース言語
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaDatabase
                    style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}
                  />
                  SQL
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/* 5. 対応言語 */}
          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion-header">
              対応言語
            </Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <FaGlobeAmericas
                    style={{ marginLeft: "0.4rem", marginRight: "0.4rem" }}
                  />
                  英語
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </Accordion>

      <div id="contact" className="contact-message text-center mt-5 mb-3">
        <p>
          📧 まずはLineで
          <br className="d-block d-lg-none" />
          お気軽にお問い合わせください。
        </p>
      </div>

      <div className="contact-button text-center">
        <Button
          className="hero-button"
          style={{
            backgroundColor: "#458ddb",
            color: "white",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            border: "none",
            marginTop: "1.5rem",
          }}
          href={lineUrl}
          size="lg"
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "contact_click",
            });
          }}
        >
          お問い合わせ・Line登録はこちら
        </Button>
      </div>
    </Container>
  );
};

export default SkillsAccordion;

