import React, { useState } from "react";
import { Container, Accordion, Button, Form, Card, Row, Col } from "react-bootstrap";
import "../App.css";

import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaReact,
  FaTags,
  FaDatabase,
  FaGlobeAmericas,
  FaPaperPlane,
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

import { AiOutlineLineChart } from "react-icons/ai";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

type Language = "ja" | "en";

interface SkillsAccordionProps {
  lang: Language;
}

const translations = {
  ja: {
    title: "使用ツール・技術・言語",
    categories: {
      ads: "広告プラットフォーム",
      analytics: "計測・分析ツール",
      webCms: "Web制作・CMSプラットフォーム",
      design: "デザインツール",
      db: "データベース言語",
      languages: "対応言語",
    },
    items: {
      googleAds: "Google広告",
      metaAds: "Meta広告（Facebook / Instagram）",
      gtm: "Google Tag Manager（GTM）",
      ga4: "Google Analytics 4（GA4）",
      english: "英語 (ビジネス対応可 / ローカライズ対応)",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご質問や案件のご相談など、お気軽にご連絡ください。",
      nameLabel: "お名前",
      namePlaceholder: "山田 太郎",
      emailLabel: "メールアドレス",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "お問い合わせ内容",
      messagePlaceholder: "ご相談内容を入力してください",
      submitBtn: "送信する",
      successMsg: "お問い合わせありがとうございます。メッセージを送信いたしました。",
    },
  },
  en: {
    title: "Tools, Technologies & Languages",
    categories: {
      ads: "Ad Platforms",
      analytics: "Analytics & Measurement",
      webCms: "Web Development & CMS",
      design: "Design Tools",
      db: "Database Languages",
      languages: "Languages Spoken",
    },
    items: {
      googleAds: "Google Ads",
      metaAds: "Meta Ads (Facebook / Instagram)",
      gtm: "Google Tag Manager (GTM)",
      ga4: "Google Analytics 4 (GA4)",
      english: "English (Business Level / Localization)",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Feel free to reach out for any inquiries or project proposals.",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email Address",
      emailPlaceholder: "your.email@example.com",
      messageLabel: "Message",
      messagePlaceholder: "How can I help you?",
      submitBtn: "Send Message",
      successMsg: "Thank you for your message! I will get back to you soon.",
    },
  },
};

const SkillsAccordion: React.FC<SkillsAccordionProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_form_submit",
      lang: lang,
      formData: formData,
    });

    setSubmitted(true);
  };

  const accordionItems = [
    {
      key: "0",
      title: t.categories.ads,
      content: (
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 align-items-center">
          <li><FaGoogle className="me-2 text-primary" />{t.items.googleAds}</li>
          <li>
            <FaFacebookF className="me-1 text-primary" />
            <FaInstagram className="me-2 text-danger" />
            {t.items.metaAds}
          </li>
        </ul>
      ),
    },
    {
      key: "1",
      title: t.categories.analytics,
      content: (
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 align-items-center">
          <li><FaTags className="me-2 text-info" />{t.items.gtm}</li>
          <li><AiOutlineLineChart className="me-2 text-warning" />{t.items.ga4}</li>
          <li><AiOutlineLineChart className="me-2 text-warning" />BigQuery</li>
          <li><AiOutlineLineChart className="me-2 text-warning" />Looker Studio</li>
        </ul>
      ),
    },
    {
      key: "2",
      title: t.categories.webCms,
      content: (
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 align-items-center">
          <li><SiHtml5 className="me-2 text-danger" />HTML5 / <SiCss3 className="mx-2 text-primary" />CSS3</li>
          <li><SiJavascript className="me-2 text-warning" />JavaScript / <FaReact className="mx-2 text-info" />React</li>
          <li><SiShopify className="me-2 text-success" />Shopify / <SiWordpress className="mx-2 text-primary" />WordPress</li>
        </ul>
      ),
    },
    {
      key: "3",
      title: t.categories.design,
      content: (
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 align-items-center">
          <li><SiCanva className="me-2 text-info" />Canva</li>
          <li><SiFigma className="me-2 text-danger" />Figma</li>
          <li><SiAdobeillustrator className="me-2 text-warning" />Illustrator</li>
        </ul>
      ),
    },
    {
      key: "4",
      title: t.categories.db,
      content: (
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 align-items-center">
          <li><FaDatabase className="me-2 text-secondary" />SQL (BigQuery)</li>
        </ul>
      ),
    },
    {
      key: "5",
      title: t.categories.languages,
      content: (
        <ul className="list-unstyled mb-0 d-flex flex-column gap-2 align-items-center">
          <li><FaGlobeAmericas className="me-2 text-success" />{t.items.english}</li>
        </ul>
      ),
    },
  ];

  return (
    <Container id="skills" className="py-5">
      {/* --- スキルセクション --- */}
      <div className="mb-5">
        <h2 className="text-center mb-4 fw-bold" style={{ fontSize: "1.8rem" }}>
          {t.title}
        </h2>
        <Accordion alwaysOpen className="custom-accordion mx-auto" style={{ maxWidth: "800px" }}>
          {accordionItems.map((item) => (
            <Accordion.Item key={item.key} eventKey={item.key} className="border-0 mb-2 rounded shadow-sm overflow-hidden">
              <Accordion.Header className="custom-accordion-header">
                {item.title}
              </Accordion.Header>
              <Accordion.Body className="text-center py-4 bg-light">
                {item.content}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <hr className="my-5 opacity-25" />

      {/* --- 問い合わせセクション --- */}
      <div id="contact" className="pt-3">
        <Card className="border-0 shadow-lg mx-auto rounded-4 overflow-hidden" style={{ maxWidth: "680px" }}>
          <Card.Body className="p-4 p-md-5">
            <div className="text-center mb-4">
              <h3 className="fw-bold mb-2" style={{ fontSize: "1.6rem" }}>
                {t.contact.title}
              </h3>
              <p className="text-muted small">{t.contact.subtitle}</p>
            </div>

            {submitted ? (
              <div className="alert alert-success text-center p-4 rounded-3" role="alert">
                {t.contact.successMsg}
              </div>
            ) : (
              <Form onSubmit={handleFormSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label className="fw-medium small">{t.contact.nameLabel}</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        placeholder={t.contact.namePlaceholder}
                        value={formData.name}
                        onChange={handleFormChange}
                        className="bg-light border-0 py-2"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label className="fw-medium small">{t.contact.emailLabel}</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        placeholder={t.contact.emailPlaceholder}
                        value={formData.email}
                        onChange={handleFormChange}
                        className="bg-light border-0 py-2"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-medium small">{t.contact.messageLabel}</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={handleFormChange}
                    className="bg-light border-0 py-2"
                  />
                </Form.Group>

                <Button
                  type="submit"
                  className="w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 border-0"
                  style={{
                    backgroundColor: "#458ddb",
                    fontSize: "1rem",
                    transition: "all 0.2s ease-in-out"
                  }}
                >
                  <FaPaperPlane />
                  {t.contact.submitBtn}
                </Button>
              </Form>
            )}
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SkillsAccordion;