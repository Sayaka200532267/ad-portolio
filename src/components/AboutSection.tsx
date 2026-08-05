import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaChartLine,
  FaChartBar,
  FaLaptop,
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { motion } from "framer-motion";
import "../App.css";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const AboutSection: React.FC = () => {
  // stateをコンポーネント内部に移動し、拡大表示する画像パスも管理できるように変更
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Container style={{ maxWidth: 900 }} className="about-section-container">
      <section id="about" className="mb-5">
        {/* =========================
              PC版
        ========================= */}
        <div className="pc-block">
          <h2 className="about-section-title" style={{ lineHeight: "1.8" }}>
            広告運用と計測設定を通じて、
            <br />
            データを活用した改善をサポートしている
            <br />
            小原さやかと申します。
          </h2>

          <Row className="align-items-center mt-3">
            <Col md={4} className="mb-3 mb-md-0 text-center">
              <Image
                src="/Sayaka-ad.png"
                roundedCircle
                fluid
                alt="Sayaka-ad プロフィール写真"
                style={{ width: "180px", height: "180px", objectFit: "cover" }}
              />
            </Col>
            <Col md={8}>
              <p className="about-section-subtitle">
                広告が正しく計測できているか確認し、数字をもとにLP改善や広告パフォーマンスの向上につなげるお手伝いをしています。
                <br />
                ・「広告を出しているけれど成果がわからない」
                <br />
                ・「どこを改善すればいいかわからない」
                <br />
                そんなお悩みに寄り添い、目的に合わせた計測環境づくりと改善提案を行います
              </p>

              <p>
                <a
                  href="https://docs.google.com/presentation/d/1MF-xCNcdE12Dm_VjfC-ckGgKsLNPTaZX/edit?slide=id.p1#slide=id.p1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                  onClick={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: "portfolio_click",
                    });
                  }}
                >
                  広告運用・改善事例はこちら
                </a>
              </p>
            </Col>
          </Row>

          <div className="text-center mt-5 mb-5">
            <h3 className="about-section-title mb-3">
              Looker Studioによるレポート作成例
            </h3>

            <Image
              src="/looker-sample.png"
              fluid
              rounded
              alt="Looker Studioレポートサンプル"
              style={{
                cursor: "pointer",
                maxWidth: "300px",
                marginBottom: "1rem",
                marginRight: "30px"
              }}
              onClick={() => setSelectedImage("/looker-sample.png")}
            />

            <Image
              src="/GA4-sample.png"
              fluid
              rounded
              alt="GA4レポートサンプル"
              style={{
                cursor: "pointer",
                maxWidth: "300px",
              }}
              onClick={() => setSelectedImage("/GA4-sample.png")}
            />
            <p className="mt-2 text-muted">※画像をクリックすると拡大できます</p>
          </div>

          {/* 画像拡大表示用モーダル */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                cursor: "pointer",
              }}
            >
              <img
                src={selectedImage}
                alt="拡大表示"
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>

        {/* =========================
              スマホ版
        ========================= */}
        <div className="mobile-block">
          <h2 className="about-section-title text-center">
            広告運用と計測設定を通じて、
            <br />
            データを活用した改善を
            <br />
            サポートしている
            <br />
            小原さやかと申します。
          </h2>

          <Row className="align-items-center mt-3">
            <Col xs={12} className="text-center mb-3">
              <Image
                src="/Sayaka-ad.png"
                roundedCircle
                fluid
                alt="Sayaka-adプロフィール写真"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </Col>
            <Col xs={12}>
              <div className="about-section-subtitle mb-3">
                <p>
                  広告が正しく計測できているか確認し、
                  <br />
                  数字をもとにLP改善や広告パフォーマンスの
                  <br />
                  向上につなげるお手伝いをしています。
                </p>
                <p>
                  「広告を出しているけれど成果がわからない」
                  <br />
                  「どこを改善すればいいかわからない」
                  <br />
                </p>
                <p>
                  そんなお悩みに寄り添い、
                  <br />
                  目的に合わせた計測環境づくりと<br />
                  改善提案を行います
                </p>

                <a
                  href="https://docs.google.com/presentation/d/1MF-xCNcdE12Dm_VjfC-ckGgKsLNPTaZX/edit?slide=id.p1#slide=id.p1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                  onClick={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: "portfolio_click",
                    });
                  }}
                >
                  広告運用・改善事例はこちら
                </a>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5 mb-5">
            <h3 className="about-section-title mb-3">
              Looker Studioによる<br />レポート作成例
            </h3>

            <Image
              src="/looker-sample.png"
              fluid
              rounded
              alt="Looker Studioレポートサンプル"
              style={{
                cursor: "pointer",
                maxWidth: "300px",
                marginRight: "30px",
                marginLeft: "30px"
              }}
              onClick={() => setSelectedImage("/looker-sample.png")}
            />

            <Image
              src="/GA4-sample.png"
              fluid
              rounded
              alt="GA4レポートサンプル"
              style={{
                cursor: "pointer",
                maxWidth: "300px",
                
              }}
              onClick={() => setSelectedImage("/GA4-sample.png")}
            />
            <p className="mt-2 text-muted">※画像をクリックすると拡大できます</p>
          </div>

          {/* 画像拡大表示用モーダル */}
          {selectedImage && (
            <div
              onClick={() => setSelectedImage(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
                cursor: "pointer",
              }}
            >
              <img
                src={selectedImage}
                alt="拡大表示"
                style={{
                  maxWidth: "90%",
                  maxHeight: "90%",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>

        <h3
          className="about-section-title text-center"
          style={{ margin: "2rem 0" }}
        >
          対応可能な内容
        </h3>

        <motion.div
          className="row justify-content-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Col xs={6} md={6} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              <FaFacebookF size={80} color="#3b5998" />
              <FaInstagram
                size={80}
                color="#E1306C"
                style={{ marginLeft: "0.5rem" }}
              />
            </motion.div>
            <p>Google広告・Meta広告の運用サポート</p>
          </Col>

          <Col xs={6} md={6} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              <FaGoogle size={80} color="#4285F4" />
            </motion.div>
            <p>広告アカウント設定・配信状況の確認</p>
          </Col>

          <Col xs={6} md={6} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              <FiTarget size={80} color="#FF3300" />
            </motion.div>
            <p>
              GTMを使用した
              <br />
              タグ設定
            </p>
          </Col>

          <Col xs={6} md={6} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              <FaChartLine size={80} color="#34A853" />
            </motion.div>
            <p>
              GA4などの
              <br />
              計測環境設定
            </p>
          </Col>

          <Col xs={6} md={6} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              <FaChartBar size={80} color="#FBBC05" />
            </motion.div>
            <p>
              広告データ分析・
              <br />
              レポート作成 (Big Query/Looker Studio)
            </p>
          </Col>

          <Col xs={6} md={6} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              <FaLaptop size={80} color="#61DAFB" />
            </motion.div>
            <p>
              LP改善・
              <br />
              広告クリエイティブ改善
            </p>
          </Col>
        </motion.div>
      </section>
    </Container>
  );
};

export default AboutSection;