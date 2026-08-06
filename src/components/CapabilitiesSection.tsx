// src/components/CapabilitiesSection.tsx

import React from "react";
import { Container, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaGoogle,
  FaChartLine,
  FaChartBar,
  FaLaptop,
  FaGlobeAmericas,
  FaLanguage,
} from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { motion } from "framer-motion";
import "../App.css";

// アニメーション設定
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const CapabilitiesSection: React.FC = () => {
  return (
    <Container className="capabilities-section-container py-4">
      {/* =========================
            対応可能な内容
      ========================= */}
      <h3
        className="about-section-title text-center"
        style={{ margin: "3rem 0 2rem 0", fontSize: "1.7rem" }}
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
        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaFacebookF size={70} color="#3b5998" />
            <FaInstagram
              size={70}
              color="#E1306C"
              style={{ marginLeft: "0.5rem" }}
            />
          </motion.div>
          <p className="mt-2">Google広告・Meta広告の運用サポート</p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaGoogle size={70} color="#4285F4" />
          </motion.div>
          <p className="mt-2">広告アカウント設定・配信状況の確認</p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FiTarget size={70} color="#FF3300" />
          </motion.div>
          <p className="mt-2">
            GTMを使用した
            <br />
            タグ設定
          </p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaChartLine size={70} color="#34A853" />
          </motion.div>
          <p className="mt-2">
            GA4などの
            <br />
            計測環境設定
          </p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaChartBar size={70} color="#FBBC05" />
          </motion.div>
          <p className="mt-2">
            広告データ分析・
            <br />
            レポート作成 (Big Query/Looker Studio)
          </p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaLaptop size={70} color="#61DAFB" />
          </motion.div>
          <p className="mt-2">
            LP改善・
            <br />
            広告クリエイティブ改善
          </p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaGlobeAmericas size={70} color="#17a2b8" />
          </motion.div>
          <p className="mt-2">
            日本企業の海外進出・
            <br />
            外資企業の日本進出サポート
          </p>
        </Col>

        <Col xs={6} md={4} className="mb-4 about-icon-col">
          <motion.div variants={iconVariants}>
            <FaLanguage size={70} color="#6f42c1" />
          </motion.div>
          <p className="mt-2">
            Webサイト・広告の
            <br />
            ローカライゼーション
          </p>
        </Col>
      </motion.div>
    </Container>
  );
};

export default CapabilitiesSection;