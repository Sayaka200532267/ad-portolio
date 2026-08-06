// src/components/CapabilitiesSection.tsx

import React from "react";
import { Container, Col } from "react-bootstrap";
import { IconType } from "react-icons";
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

type Language = "ja" | "en";

interface CapabilitiesSectionProps {
  lang: Language;
}

// データ管理用の型定義
interface Capability {
  id: string;
  icons: { component: IconType; color: string; style?: React.CSSProperties }[];
  textJa: React.ReactNode;
  textEn: React.ReactNode;
}

// 各項目のデータ（日本語 / 英語）
const capabilitiesData: Capability[] = [
  {
    id: "meta-ads",
    icons: [
      { component: FaFacebookF, color: "#3b5998" },
      { component: FaInstagram, color: "#E1306C", style: { marginLeft: "0.5rem" } },
    ],
    textJa: "Google広告・Meta広告の運用サポート",
    textEn: "Google Ads & Meta Ads Operations Support",
  },
  {
    id: "google-ads",
    icons: [{ component: FaGoogle, color: "#4285F4" }],
    textJa: "広告アカウント設定・配信状況の確認",
    textEn: "Ad Account Setup & Performance Audit",
  },
  {
    id: "gtm-tags",
    icons: [{ component: FiTarget, color: "#FF3300" }],
    textJa: (
      <>
        GTMを使用した
        <br />
        タグ設定
      </>
    ),
    textEn: (
      <>
        Tag Management
        <br />
        via GTM
      </>
    ),
  },
  {
    id: "ga4-analytics",
    icons: [{ component: FaChartLine, color: "#34A853" }],
    textJa: (
      <>
        GA4などの
        <br />
        計測環境設定
      </>
    ),
    textEn: (
      <>
        GA4 & Analytics
        <br />
        Environment Setup
      </>
    ),
  },
  {
    id: "data-reports",
    icons: [{ component: FaChartBar, color: "#FBBC05" }],
    textJa: (
      <>
        広告データ分析・
        <br />
        レポート作成 (BigQuery/Looker Studio)
      </>
    ),
    textEn: (
      <>
        Ad Data Analysis & Reporting
        <br />
        (BigQuery / Looker Studio)
      </>
    ),
  },
  {
    id: "lp-improvement",
    icons: [{ component: FaLaptop, color: "#61DAFB" }],
    textJa: (
      <>
        LP改善・
        <br />
        広告クリエイティブ改善
      </>
    ),
    textEn: (
      <>
        Landing Page & Ad
        <br />
        Creative Optimization
      </>
    ),
  },
  {
    id: "global-expansion",
    icons: [{ component: FaGlobeAmericas, color: "#17a2b8" }],
    textJa: (
      <>
        日本企業の海外進出・
        <br />
        外資企業の日本進出サポート
      </>
    ),
    textEn: (
      <>
        Cross-Border Support for
        <br />
        Global & Local Expansion
      </>
    ),
  },
  {
    id: "localization",
    icons: [{ component: FaLanguage, color: "#6f42c1" }],
    textJa: (
      <>
        Webサイト・広告の
        <br />
        ローカライゼーション
      </>
    ),
    textEn: (
      <>
        Website & Digital Ad
        <br />
        Localization
      </>
    ),
  },
];

// アニメーション設定
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ lang }) => {
  return (
    <Container className="capabilities-section-container py-4">
      {/* セクションタイトル */}
      <h3
        className="about-section-title text-center"
        style={{ margin: "3rem 0 2rem 0", fontSize: "1.7rem" }}
      >
        {lang === "ja" ? "対応可能な内容" : "Services & Capabilities"}
      </h3>

      <motion.div
        className="row justify-content-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {capabilitiesData.map((item) => (
          <Col xs={6} md={4} key={item.id} className="mb-4 about-icon-col">
            <motion.div variants={iconVariants}>
              {item.icons.map((icon, idx) => {
                const IconComponent = icon.component;
                return (
                  <IconComponent
                    key={idx}
                    size={70}
                    color={icon.color}
                    style={icon.style}
                  />
                );
              })}
            </motion.div>
            <p className="mt-2">{lang === "ja" ? item.textJa : item.textEn}</p>
          </Col>
        ))}
      </motion.div>
    </Container>
  );
};

export default CapabilitiesSection;