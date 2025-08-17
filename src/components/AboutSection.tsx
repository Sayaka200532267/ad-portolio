import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGoogle, FaReact, FaLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { motion } from "framer-motion";
import "../App.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

const AboutSection: React.FC = () => (
  <Container style={{ maxWidth: 900 }} className="about-section-container">
    <section id="about" className="mb-5">
      <h2 className="about-section-title">
        はじめまして。<br className="d-block d-md-none" /> Sayaka-Webと申します。
      </h2>

      <Row className="align-items-center mt-3">
        <Col md={4} className="mb-3 mb-md-0 text-center">
          <Image
            src="/sayaka-web.png"
            roundedCircle
            fluid
            alt="Sayaka-Web プロフィール写真"
            style={{ width: "180px", height: "180px", objectFit: "cover" }}
          />
        </Col>

        <Col md={8}>
          <div className="d-none d-md-block">
            <p className="about-section-subtitle">
              Google広告の認定資格を取得し、Meta広告の基礎も学んでいるので、
              最新ノウハウを活かした広告運用が可能です。
              初心者の方にもわかりやすく丁寧に説明し、ツール設定もサポート。
              広告運用を通じて売上アップやファンづくりにつながる仕組みづくりをお手伝いします。
            </p>
          </div>

          <div className="d-block d-md-none">
            <div className="mobile-block">
              <p>
                Google広告の認定資格を取得し、<br />
                Meta広告の基礎も学んでいるので、<br />
                最新ノウハウを活かした広告運用が可能です。
              </p>
            </div>
            <div className="mobile-block">
              <p>
                初心者の方にもわかりやすく丁寧に説明し、<br />
                ツール設定もサポート。
              </p>
            </div>
            <div className="mobile-block">
              <p>
                広告運用を通じて売上アップや<br />
                ファンづくりにつながる仕組みづくりを<br />
                お手伝いします。
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <h3 className="about-section-title" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
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
