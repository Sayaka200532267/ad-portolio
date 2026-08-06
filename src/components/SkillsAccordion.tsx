// src/components/SkillsAccordion.tsx

import React, { useState } from "react";
import { Container, Accordion, Button, Form } from "react-bootstrap";
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

// 多言語テキスト定義
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

  // フォーム用ステート管理
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

    // DataLayer イベントの発行
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_form_submit",
      lang: lang,
      formData: formData,
    });

    // ここでバックエンド API への送信処理や Formspree / EmailJS などの連携を行ってください

    setSubmitted(true);
  };

  // アコーディオンのコンテンツ定義
  const accordionItems = [
    {
      key: "0",
      title: t.categories.ads,
      content: (
        <ul>
          <li>
            <FaGoogle className="me-2" />
            {t.items.googleAds}
          </li>
          <li>
            <FaFacebookF className="ms-2 me-1" />
            <FaInstagram className="me-2" />
            {t.items.metaAds}
          </li>
        </ul>
      ),
    },
    {
      key: "1",
      title: t.categories.analytics,
      content: (
        <ul>
          <li>
            <FaTags className="me-2" />
            {t.items.gtm}
          </li>
          <li>
            <AiOutlineLineChart className="me-2" />
            {t.items.ga4}
          </li>
          <li>
            <AiOutlineLineChart className="me-2" />
            BigQuery
          </li>
          <li>
            <AiOutlineLineChart className="me-2" />
            Looker Studio
          </li>
        </ul>
      ),
    },
    {
      key: "2",
      title: t.categories.webCms,
      content: (
        <ul>
          <li>
            <SiHtml5 className="me-1" /> HTML / <SiCss3 className="ms-2 me-1" /> CSS
          </li>
          <li>
            <SiJavascript className="ms-2 me-1" /> JavaScript / <FaReact className="ms-2 me-1" /> React
          </li>
          <li>
            <SiShopify className="ms-2 me-1" /> Shopify / <SiWordpress className="ms-2 me-1" /> WordPress
          </li>
        </ul>
      ),
    },
    {
      key: "3",
      title: t.categories.design,
      content: (
        <ul>
          <li>
            <SiCanva className="me-2" /> Canva
          </li>
          <li>
            <SiFigma className="ms-2 me-2" /> Figma
          </li>
          <li>
            <SiAdobeillustrator className="ms-2 me-2" /> Illustrator
          </li>
        </ul>
      ),
    },
    {
      key: "4",
      title: t.categories.db,
      content: (
        <ul>
          <li>
            <FaDatabase className="mx-2" /> SQL (BigQuery)
          </li>
        </ul>
      ),
    },
    {
      key: "5",
      title: t.categories.languages,
      content: (
        <ul>
          <li>
            <FaGlobeAmericas className="mx-2" />
            {t.items.english}
          </li>
        </ul>
      ),
    },
  ];

  return (
    <Container id="skills" className="my-5">
      <h2
        className="text-center mb-4"
        style={{ fontSize: "1.7rem", fontWeight: 700 }}
      >
        {t.title}
      </h2>

      <Accordion alwaysOpen className="custom-accordion">
        {accordionItems.map((item) => (
          <Accordion.Item key={item.key} eventKey={item.key}>
            <Accordion.Header className="custom-accordion-header">
              {item.title}
            </Accordion.Header>
            <Accordion.Body className="text-center">
              {item.content}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <div id="contact" className="mt-5">
        <div className="contact-form-container mx-auto" style={{ maxWidth: "600px" }}>
          <h3 className="text-center mb-4" style={{ fontWeight: 600 }}>
            {t.contact.title}
          </h3>
          {submitted ? (
            <div className="alert alert-success text-center" role="alert">
              {t.contact.successMsg}
            </div>
          ) : (
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>{t.contact.nameLabel}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>{t.contact.emailLabel}</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>{t.contact.messageLabel}</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  type="submit"
                  className="hero-button w-100"
                  style={{
                    backgroundColor: "#458ddb",
                    color: "white",
                    fontSize: "1.1rem",
                    padding: "0.8rem 1.5rem",
                    border: "none",
                    marginTop: "1rem",
                  }}
                >
                  {t.contact.submitBtn}
                </Button>
              </div>
            </Form>
          )}
        </div>
      </div>
    </Container>
  );
};

export default SkillsAccordion;