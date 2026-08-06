// src/components/MainSection.tsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheckCircle, FaExclamationTriangle, FaArrowDown } from "react-icons/fa";
import "../App.css";

type Language = "ja" | "en";

interface MainSectionProps {
  lang: Language;
}

// 課題と解決策を1対1でセットにしたデータ構造
interface ComparisonPair {
  problemJa: React.ReactNode;
  problemEn: React.ReactNode;
  solutionJa: React.ReactNode;
  solutionEn: React.ReactNode;
}

const comparisonData: ComparisonPair[] = [
  {
    problemJa: "広告を出しているけれど、成果や成果指標が分からない",
    problemEn: "Running ads, but unsure if they are driving actual ROI or real results",
    solutionJa: "広告の成果を正しく計測し、どの施策が効果的かを明確に可視化します",
    solutionEn: "Accurately track ad performance to clearly identify what drives ROI",
  },
  {
    problemJa: "広告費をかけているのに、問い合わせや購入が増えない",
    problemEn: "Ad spend keeps rising, but conversions and sales remain stagnant",
    solutionJa: "コンバージョンまでの流れを整理し、ユーザーに届く広告運用へ改善します",
    solutionEn: "Streamline the user funnel for more effective and targeted ad delivery",
  },
  {
    problemJa: "LP（ランディングページ）を作ったけれど、改善ポイントがわからない",
    problemEn: "Built a landing page, but don't know how to optimize it for conversions",
    solutionJa: "アクセスデータをもとにLPの課題を特定し、成果につながるページへ改修します",
    solutionEn: "Identify landing page bottlenecks through data to boost conversion rates",
  },
  {
    problemJa: "アクセスやコンバージョンの計測が正しくできているか不安",
    problemEn: "Unsure if website tracking, event tags, and conversions are accurately set up",
    solutionJa: "計測環境を正しく整備し、改善に必要なデータを正確に取得できる状態にします",
    solutionEn: "Establish robust tracking infrastructure to capture actionable data",
  },
  {
    problemJa: "Google広告やMeta広告の数字をどう見ればいいかわからない",
    problemEn: "Overwhelmed by Google & Meta Ads metrics and don't know what to focus on",
    solutionJa: "重要な指標（KPI）を絞り込み、効果的な運用判断ができる環境を提案します",
    solutionEn: "Filter out noise and focus on key KPIs for actionable strategy decisions",
  },
  {
    problemJa: "タグ設定や計測環境が複雑で、自社では対応できない",
    problemEn: "Tag management and analytics setups are too complex to handle in-house",
    solutionJa: "GTMやGA4などの複雑な設定・設計・実装まで一括して構築サポートします",
    solutionEn: "Provide end-to-end support for complex setups like GTM & GA4 tags",
  },
];

const MainSection: React.FC<MainSectionProps> = ({ lang }) => {
  const isJa = lang === "ja";

  return (
    <Container style={{ maxWidth: 960, margin: "0 auto" }} className="py-4">
      {/* ==========================================
          ヘッダータイトル（共通）
      ========================================== */}
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-3 mb-2" style={{ color: "#2c3e50" }}>
          {isJa
            ? "Web広告やアクセス解析で、こんなお悩みはありませんか？"
            : "Are You Facing These Marketing Challenges?"}
        </h2>
        <p className="text-muted small">
          {isJa
            ? "データ計測と運用のプロが、現状の課題を整理し成果に繋がる環境へ改善します"
            : "Data-driven marketing and custom tracking setup to resolve your operational bottlenecks."}
        </p>
      </div>

      {/* ==========================================
          PC版（対比 2カラムレイアウト）
      ========================================== */}
      <div className="pc-block d-none d-md-block">
        <Row className="g-4 mb-4">
          {/* 左カラム：よくあるお悩み */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm rounded-3 overflow-hidden">
              <Card.Header
                className="bg-danger text-white py-3 fw-bold d-flex align-items-center justify-content-center fs-5"
                style={{ backgroundColor: "#e74c3c" }}
              >
                <FaExclamationTriangle className="me-2" />
                {isJa ? "よくあるお悩み (Before)" : "Current Challenges"}
              </Card.Header>
              <Card.Body className="p-4 bg-light">
                <ul className="list-unstyled mb-0">
                  {comparisonData.map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start mb-3 pb-3 border-bottom border-light-subtle"
                      style={{ minHeight: "60px" }}
                    >
                      <span className="badge bg-danger-subtle text-danger rounded-circle me-3 mt-1 px-2 py-1 fs-6 flex-shrink-0">
                        ?
                      </span>
                      <span className="text-secondary small fw-medium" style={{ lineHeight: "1.6" }}>
                        {isJa ? item.problemJa : item.problemEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>

          {/* 右カラム：改善後の姿 */}
          <Col md={6}>
            <Card className="h-100 border-0 shadow-sm rounded-3 overflow-hidden">
              <Card.Header
                className="text-white py-3 fw-bold d-flex align-items-center justify-content-center fs-5"
                style={{ backgroundColor: "#27ae60" }}
              >
                <FaCheckCircle className="me-2" />
                {isJa ? "データでこのように改善 (After)" : "How I Can Solve It"}
              </Card.Header>
              <Card.Body className="p-4 bg-white">
                <ul className="list-unstyled mb-0">
                  {comparisonData.map((item, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start mb-3 pb-3 border-bottom"
                      style={{ minHeight: "60px" }}
                    >
                      <FaCheckCircle
                        className="text-success me-3 mt-1 flex-shrink-0"
                        style={{ fontSize: "1.1rem" }}
                      />
                      <span className="text-dark small fw-bold" style={{ lineHeight: "1.6" }}>
                        {isJa ? item.solutionJa : item.solutionEn}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* ==========================================
          スマホ版（1対1のカード対比型）
      ========================================== */}
      <div className="mobile-block d-md-none">
        {comparisonData.map((item, idx) => (
          <Card key={idx} className="mb-4 border-0 shadow-sm rounded-3 overflow-hidden">
            {/* お悩み（Before） */}
            <Card.Body className="p-3 bg-light border-start border-4 border-danger">
              <div className="d-flex align-items-center text-danger fw-bold small mb-1">
                <FaExclamationTriangle className="me-1" />
                {isJa ? `課題 ${idx + 1}` : `Issue ${idx + 1}`}
              </div>
              <p className="mb-0 text-secondary small fw-medium">
                {isJa ? item.problemJa : item.problemEn}
              </p>
            </Card.Body>

            {/* 接続矢印 */}
            <div className="text-center py-1 bg-white text-muted">
              <FaArrowDown style={{ fontSize: "0.8rem", color: "#27ae60" }} />
            </div>

            {/* 改善策（After） */}
            <Card.Body className="p-3 bg-white border-start border-4 border-success">
              <div className="d-flex align-items-center text-success fw-bold small mb-1">
                <FaCheckCircle className="me-1" />
                {isJa ? "改善アプローチ" : "Solution"}
              </div>
              <p className="mb-0 text-dark small fw-bold">
                {isJa ? item.solutionJa : item.solutionEn}
              </p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MainSection;