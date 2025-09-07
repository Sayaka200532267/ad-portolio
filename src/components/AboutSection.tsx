import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGoogle, FaReact, FaLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { motion } from "framer-motion";
import "../App.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const AboutSection: React.FC = () => (
  <Container style={{ maxWidth: 900 }} className="about-section-container">
    <section id="about" className="mb-5">
      {/* =========================
            PC版
      ========================= */}
      <div className="pc-block">
        <h2 className="about-section-title">
          はじめまして。さやか@Ads & Funnelと申します。
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
              Google広告の認定資格を取得し、Meta広告の基礎も学んでいるので、最新ノウハウを活かした広告運用が可能です。<br />
              初心者の方にもわかりやすく丁寧に説明し、ツール設定もサポート。<br />
              広告運用を通じて売上アップやファンづくりにつながる仕組みづくりをお手伝いします。
            </p>
          </Col>
        </Row>
      </div>

      {/* =========================
            スマホ版
      ========================= */}
      <div className="mobile-block">
        <h2 className="about-section-title text-center">
          はじめまして。<br />さやか@Ads & Funnelと<br />申します。
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
              Google広告の認定資格を取得し、<br />
              Meta広告の基礎も学んでいるので、<br />
              最新ノウハウを活かした広告運用が可能です。
            </div>
            <div className="about-section-subtitle mb-3">
              初心者の方にもわかりやすく丁寧に説明し、<br />
              ツール設定もサポート。
            </div>
            <div className="about-section-subtitle mb-3">
              広告運用を通じて売上アップや<br />
              ファンづくりにつながる仕組みづくりを<br />
              お手伝いします。
            </div>
          </Col>
        </Row>
      </div>

      <h3 className="about-section-title text-center" style={{ margin: "2rem 0" }}>
        対応可能な内容
      </h3>

      <motion.div
        className="row justify-content-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 各アイコン */}
        <Col xs={6} md={6} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaFacebookF size={80} color="#3b5998" />
            <FaInstagram size={80} color="#E1306C" style={{ marginLeft: "0.5rem" }} />
          </motion.div>
          <p>Meta広告（Facebook/Instagram）</p>
        </Col>

        <Col xs={6} md={6} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaGoogle size={80} color="#4285F4" />
          </motion.div>
          <p>Google広告運用</p>
        </Col>

        <Col xs={6} md={6} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FiTarget size={80} color="#FF3300" />
          </motion.div>
          <p>Yahoo広告運用</p>
        </Col>

        <Col xs={6} md={6} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaReact size={80} color="#61DAFB" />
          </motion.div>
          <p>ReactでLP作成</p>
        </Col>

        <Col xs={6} md={6} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaLine size={80} color="#00B900" />
          </motion.div>
          <p>LINE公式設定</p>
        </Col>

        <Col xs={6} md={6} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="#FF6F61"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: "0.5rem" }}
            >
              <path d="M3 3h18v18H3V3z" />
              <path fill="white" d="M7 7h10v10H7V7z" />
            </svg>
          </motion.div>
          <p>UTAGE設定</p>
        </Col>
      </motion.div>
    </section>
  </Container>
);

export default AboutSection;
