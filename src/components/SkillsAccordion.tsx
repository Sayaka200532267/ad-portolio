// src/components/SkillsAccordion.tsx

import React from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import "../App.css";


import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaReact,
  FaTags,
  FaDatabase
} from "react-icons/fa";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCanva,
  SiAdobeillustrator
} from "react-icons/si";

import {
  AiOutlineLineChart
} from "react-icons/ai";
declare global {
  interface Window {
    dataLayer: any[];
  }
  
}

const SkillsAccordion: React.FC = () => {
  const email = "sayakaohara@outlook.com";

  return (
    <Container className="my-5">

      <h2
        className="text-center mb-4"
        style={{ fontSize: "1.7rem", fontWeight: 700 }}
      >
        使用ツール・技術
      </h2>

      <Accordion
        defaultActiveKey="0"
        alwaysOpen
        className="custom-accordion"
      >

        {/* =====================
            PC版
        ===================== */}

        <div className="pc-block">

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
                  <FaFacebookF style={{ marginLeft: "0.4rem"  }} />
                  <FaInstagram style={{ marginRight: "0.2rem" }} />
                  Meta広告（Facebook / Instagram）
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>


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

                <li>
                   <FaDatabase style={{ marginLeft: "0.4rem",marginRight: "0.4rem"  }} />
                  SQL
                </li>

              </ul>
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">
              Web開発・制作
            </Accordion.Header>

            <Accordion.Body className="text-center">
              <ul>

                <li>
                  <SiHtml5 style={{ marginRight: "0.2rem" }} />
                  HTML

                  <SiCss3
                    style={{
                      marginLeft: "0.8rem",
                      marginRight: "0.2rem"
                    }}
                  />
                  CSS
                </li>

                <li>   <SiJavascript style={{ marginRight: "0.2rem",marginLeft: "0.6rem" }} />
                  JavaScript
                </li>

                <li>
                  <FaReact style={{ marginRight: "0.2rem",marginLeft: "0.4rem" }} />
                  React
                </li>

              </ul>
            </Accordion.Body>
          </Accordion.Item>
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
                  <SiFigma style={{ marginRight: "0.2rem",marginLeft: "0.4rem" }} />
                  Figma
                </li>

                <li>
                  <SiAdobeillustrator style={{ marginRight: "0.2rem",marginLeft: "0.6rem" }} />
                  Illustrator
                </li>

              </ul>
            </Accordion.Body>
           </Accordion.Item>

        </div>


        {/* =====================
            スマホ版
        ===================== */}

        <div className="mobile-block">


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
                  <FaFacebookF style={{ marginLeft: "0.4rem"  }} />
                  <FaInstagram style={{ marginRight: "0.2rem" }} />
                  Meta広告
                </li>

              </ul>
            </Accordion.Body>
          </Accordion.Item>



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

                <li>
              <FaDatabase style={{ marginLeft: "0.4rem",marginRight: "0.4rem"  }} />
                  SQL
                </li>

              </ul>
            </Accordion.Body>
          </Accordion.Item>



          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">
              Web開発・制作
            </Accordion.Header>

            <Accordion.Body className="text-center">
              <ul>

                <li>
                  <SiHtml5 style={{ marginRight: "0.2rem" }} />
                  HTML
                </li>

                <li>
                  <SiCss3 style={{ marginRight: "0.2rem" }} />
                  CSS
                </li>

                <li>
                  <SiJavascript style={{ marginRight: "0.2rem",marginLeft: "0.4rem", }} />
                  JavaScript
                </li>

                <li>
                  <FaReact style={{ marginRight: "0.4rem" }} />
                  React
                </li>

              </ul>
            </Accordion.Body>
          </Accordion.Item>
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

        </div>

      </Accordion>



      <div className="contact-message text-center mt-5 mb-3">

        <p>
          📧 まずはメールで
          <br className="d-block d-lg-none" />
          お気軽にご相談ください。
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
    marginTop: "1.5rem"
  }}
  href={`mailto:${email}`}
  size="lg"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_click"
    });
  }}
>
  お問い合わせはこちら
</Button>

      </div>


    </Container>
  );
};


export default SkillsAccordion;