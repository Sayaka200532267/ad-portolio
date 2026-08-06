// src/components/AboutSection.tsx

import React, { useState } from "react";
import { Row, Col, Image, Container, Modal } from "react-bootstrap";
import { FaChartLine, FaGlobeAmericas, FaCheck } from "react-icons/fa";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

type Language = "ja" | "en";

interface AboutSectionProps {
  lang: Language;
}

const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  // 拡大表示する画像パスの管理
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // お名前・キャッチコピーコンポーネント（写真の上に配置）
  const NameTitle = () => (
    <div className="title-area mb-3 text-center">
      <h2 className="about-main-title" style={{ fontSize: "1.3rem", lineHeight: "1.6" }}>
        {lang === "ja" ? (
          <>
            広告運用と計測環境で、
            <br />
            データに基づいた<br />マーケティング改善を実現する
            <br />
            小原さやかです。
          </>
        ) : (
          <>
            Hi, I'm Sayaka Ohara.
            <br />
            Driving data-driven marketing growth through ad operation & tracking setup.
          </>
        )}
      </h2>
    </div>
  );

  // 文章コンポーネント：PC用（レイアウト重視の表示）
  const AboutContentPC = () => (
    <div className="about-full-text">
      {/* 強み1: データ改善 */}
      <div className="strength-box border-start-blue p-4 mb-4 bg-white rounded shadow-sm">
        <div className="d-flex align-items-center mb-3">
          <FaChartLine className="text-primary me-2 flex-shrink-0" size={24} />
          <h3 className="strength-heading m-0">
            {lang === "ja"
              ? "データに基づく確実な改善で、広告成果を最大化します。"
              : "Maximize Ad Performance through Data-Driven Improvements."}
          </h3>
        </div>
        <ul className="custom-bullet-list">
          <li>
            <FaCheck className="list-icon text-primary" />
            <span>
              {lang === "ja"
                ? "広告・サイトの計測環境を設計・整備し、正確なデータ取得から分析、改善まで一貫して対応します。"
                : "Design and implement tracking environments for ads and websites, handling everything from accurate data collection to analysis and optimization."}
            </span>
          </li>
          <li>
            <FaCheck className="list-icon text-primary" />
            <span>
              {lang === "ja"
                ? "GA4やGTMなどの計測基盤を活用し、ユーザー行動や広告成果を可視化。データに基づいたLP改善、サイト解析、広告施策の最適化を実現します。"
                : "Leverage tracking platforms like GA4 and GTM to visualize user behavior and ad performance, delivering LP optimization, web analytics, and ad strategy tuning."}
            </span>
          </li>
        </ul>
      </div>

      {/* 強み2: クロスボーダー */}
      <div className="strength-box border-start-green p-4 mb-4 bg-white rounded shadow-sm">
        <div className="d-flex align-items-center mb-3">
          <FaGlobeAmericas className="text-success me-2 flex-shrink-0" size={24} />
          <h3 className="strength-heading m-0">
            {lang === "ja"
              ? "英語圏と日本市場、それぞれの文化やユーザー行動を理解したクロスボーダーマーケティングを。"
              : "Cross-Border Marketing Guided by Cultural Insight into English-speaking and Japanese Markets."}
          </h3>
        </div>
        <ul className="custom-bullet-list">
          <li>
            <FaCheck className="list-icon text-success" />
            <span>
              {lang === "ja"
                ? "海外留学・現地インターンで培った語学力と異文化理解をもとに、英語でのコミュニケーションや海外市場向けのマーケティング対応が可能です。"
                : "Equipped with strong language skills and cross-cultural understanding from studying and interning abroad, enabling fluent English communication and global marketing execution."}
            </span>
          </li>
          <li>
            <FaCheck className="list-icon text-success" />
            <span>
              {lang === "ja"
                ? "各市場の文化やユーザー心理の違いを踏まえたローカライズ、広告設定、アクセス解析・計測環境の整備を通じて、日本企業の海外展開および海外企業の日本市場進出をサポートします。"
                : "Support Japanese companies expanding globally and overseas businesses entering Japan through localization, ad setup, web analytics, and tracking architecture adapted to target cultures."}
            </span>
          </li>
        </ul>
      </div>

      {/* お悩み寄り添いブロック */}
      <div className="trouble-solution-box p-4 rounded text-center mb-4 description-text">
        <p className="trouble-quote mb-2 description-text">
          {lang === "ja" ? (
            <>
              「広告を出しているけれど、成果がわからない」
              <br />
              「どこをどう改善すればいいかわからない」
            </>
          ) : (
            <>
              "We run ads, but can't measure the real ROI."
              <br />
              "We don't know where or how to start optimizing."
            </>
          )}
        </p>
        <p className="solution-text m-0 description-text">
          {lang === "ja" ? (
            "そんなお悩みに寄り添い、目的に合わせた計測環境づくりと改善提案を行います。"
          ) : (
            <>
              I address these challenges directly by building tailored tracking setups
              <br />
              and providing actionable optimization plans.
            </>
          )}
        </p>
      </div>
    </div>
  );

  // 文章コンポーネント：スマホ用
  const AboutContentMobile = () => (
    <div className="about-full-text-mobile">
      {/* 強み1: データ改善 */}
      <div className="strength-box border-start-blue p-3 mb-3 bg-white rounded shadow-sm">
        <div className="d-flex align-items-start mb-2">
          <FaChartLine className="text-primary me-2 flex-shrink-0 mt-1" size={20} />
          <h3 className="strength-heading m-0 fs-6 fw-bold">
            {lang === "ja"
              ? "データに基づく確実な改善で、広告成果を最大化します。"
              : "Maximize Ad Performance through Data-Driven Improvements."}
          </h3>
        </div>
        <ul className="custom-bullet-list ps-0 mb-0" style={{ listStyle: "none" }}>
          <li className="d-flex mb-2">
            <FaCheck className="list-icon text-primary me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "広告・サイトの計測環境を設計・整備し、正確なデータ取得から分析、改善まで一貫して対応します。"
                : "Design and implement tracking environments for ads and websites from data collection to optimization."}
            </span>
          </li>
          <li className="d-flex">
            <FaCheck className="list-icon text-primary me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "GA4やGTMなどの計測基盤を活用し、ユーザー行動や広告成果を可視化。データに基づいたLP改善、サイト解析、広告施策の最適化を実現します。"
                : "Leverage GA4/GTM to visualize behavior & performance, optimizing LPs, web analytics, and ad strategies."}
            </span>
          </li>
        </ul>
      </div>

      {/* 強み2: クロスボーダー */}
      <div className="strength-box border-start-green p-3 mb-3 bg-white rounded shadow-sm">
        <div className="d-flex align-items-start mb-2">
          <FaGlobeAmericas className="text-success me-2 flex-shrink-0 mt-1" size={20} />
          <h3 className="strength-heading m-0 fs-6 fw-bold">
            {lang === "ja"
              ? "英語圏と日本市場の文化やユーザー行動を理解したクロスボーダーマーケティングを。"
              : "Cross-Border Marketing Guided by Cultural Insight into English & Japanese Markets."}
          </h3>
        </div>
        <ul className="custom-bullet-list ps-0 mb-0" style={{ listStyle: "none" }}>
          <li className="d-flex mb-2">
            <FaCheck className="list-icon text-success me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "海外留学・現地インターンで培った語学力と異文化理解をもとに、英語でのコミュニケーションや海外市場向けのマーケティング対応が可能です。"
                : "Fluent English and cross-cultural insights from studying/interning abroad enable seamless global campaign management."}
            </span>
          </li>
          <li className="d-flex">
            <FaCheck className="list-icon text-success me-2 flex-shrink-0 mt-1" />
            <span className="small">
              {lang === "ja"
                ? "各市場の文化やユーザー心理の違いを踏まえたローカライズ、広告設定、アクセス解析・計測環境の整備を通じて、日本企業の海外展開および海外企業の日本市場進出をサポートします。"
                : "Support cross-border growth for JP and global brands via localized setups, ad configuration, and analytics."}
            </span>
          </li>
        </ul>
      </div>

      {/* お悩み寄り添いブロック */}
      <div className="trouble-solution-box p-3 rounded text-center mb-3 description-text bg-light">
        <p className="trouble-quote mb-2 small text-muted">
          {lang === "ja" ? (
            <>
              「広告を出しているけれど、成果がわからない」
              <br />
              「どこをどう改善すればいいかわからない」
            </>
          ) : (
            <>
              "We run ads, but can't measure the real ROI."
              <br />
              "We don't know where or how to start optimizing."
            </>
          )}
        </p>
        <p className="solution-text m-0 small fw-bold">
          {lang === "ja"
            ? "そんなお悩みに寄り添い、目的に合わせた計測環境づくりと改善提案を行います。"
            : "I help resolve these challenges with custom tracking setups and data-driven recommendations."}
        </p>
      </div>
    </div>
  );

  return (
    <Container className="about-section-container py-4">
      <section id="about" className="mb-5">
        {/* =========================
              PC版（md以上）
        ========================= */}
        <div className="pc-block d-none d-md-block">
          <Row className="gx-5 align-items-start profile-row">
            {/* 左側: 名前 ＋ プロフィール画像 */}
            <Col
              md={4}
              className="text-center profile-image-col sticky-md-top"
              style={{ top: "100px", zIndex: 1 }}
            >
              <NameTitle />
              <div className="profile-image-container mb-4">
                <Image
                  src="/Sayaka-ad.png"
                  roundedCircle
                  fluid
                  alt={lang === "ja" ? "小原さやか プロフィール写真" : "Sayaka Ohara Profile Photo"}
                  className="profile-image shadow"
                  style={{ width: "220px", height: "220px", objectFit: "cover" }}
                />
              </div>
            </Col>

            {/* 右側: PC専用テキスト */}
            <Col md={8} className="profile-text-col">
              <AboutContentPC />
            </Col>
          </Row>

          {/* Looker Studio / GA4 レポート実績 */}
          <div className="mt-5 p-4 bg-light rounded text-center shadow-sm report-section">
            <h3 className="h5 fw-bold mb-4 text-dark">
              {lang === "ja"
                ? "Looker Studio / GA4 によるレポート作成例"
                : "Looker Studio / GA4 Report Samples"}
            </h3>
            <Row className="justify-content-center gx-3">
              <Col md={5} className="mb-3 mb-md-0">
                <Image
                  src="/looker-sample.png"
                  fluid
                  rounded
                  alt="Looker Studio Report Sample"
                  className="report-thumb shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/looker-sample.png")}
                />
              </Col>
              <Col md={5}>
                <Image
                  src="/GA4-sample.png"
                  fluid
                  rounded
                  alt="GA4 Report Sample"
                  className="report-thumb shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedImage("/GA4-sample.png")}
                />
              </Col>
            </Row>
            <p className="mt-3 text-muted small m-0">
              {lang === "ja"
                ? "※画像をクリックすると拡大できます"
                : "* Click images to enlarge"}
            </p>
          </div>
        </div>

        {/* =========================
              スマホ版（md未満）
        ========================= */}
        <div className="mobile-block d-md-none">
          <NameTitle />
          <div className="text-center mb-4">
            <Image
              src="/Sayaka-ad.png"
              roundedCircle
              fluid
              alt={lang === "ja" ? "小原さやか プロフィール写真" : "Sayaka Ohara Profile Photo"}
              className="profile-image-mobile shadow"
              style={{ width: "160px", height: "160px", objectFit: "cover" }}
            />
          </div>

          {/* スマホ専用テキストを配置 */}
          <AboutContentMobile />

          <div className="mt-4 p-3 bg-light rounded text-center shadow-sm">
            <h3 className="h6 fw-bold mb-3 text-dark">
              {lang === "ja" ? (
                <>
                  Looker Studio / GA4<br />レポート作成例
                </>
              ) : (
                "Looker Studio / GA4 Reports"
              )}
            </h3>
            <Image
              src="/looker-sample.png"
              fluid
              rounded
              alt="Looker Studio Report Sample"
              className="mb-3 report-thumb-mobile shadow-sm"
              style={{ cursor: "pointer", maxWidth: "280px" }}
              onClick={() => setSelectedImage("/looker-sample.png")}
            />
            <br />
            <Image
              src="/GA4-sample.png"
              fluid
              rounded
              alt="GA4 Report Sample"
              className="report-thumb-mobile shadow-sm"
              style={{ cursor: "pointer", maxWidth: "280px" }}
              onClick={() => setSelectedImage("/GA4-sample.png")}
            />
            <p className="mt-2 text-muted small m-0">
              {lang === "ja"
                ? "※画像をクリックすると拡大できます"
                : "* Click images to enlarge"}
            </p>
          </div>
        </div>

        {/* 画像拡大表示モーダル */}
        <Modal show={!!selectedImage} onHide={() => setSelectedImage(null)} centered size="lg">
          <Modal.Body className="p-1 text-center bg-dark rounded">
            {selectedImage && (
              <Image src={selectedImage} fluid alt="Enlarged Report" style={{ maxHeight: "85vh" }} />
            )}
          </Modal.Body>
        </Modal>
      </section>
    </Container>
  );
};

export default AboutSection;