// src/components/MainSection.tsx

import React from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";
import { FaStar } from "react-icons/fa";
import "../App.css";

type Language = "ja" | "en";

interface MainSectionProps {
  lang: Language;
}

// データ構造の定義
interface ProblemItem {
  icon: string;
  textJa: React.ReactNode;
  textEn: React.ReactNode;
}

interface SolutionItem {
  textJa: React.ReactNode;
  textEn: React.ReactNode;
}

// 1. お悩みリスト（Pain Points）
const problemsData: ProblemItem[] = [
  {
    icon: "📊",
    textJa: "広告を出しているけれど、成果につながっているかわからない",
    textEn: "Running ads, but unsure if they are driving actual ROI or real results",
  },
  {
    icon: "🔍",
    textJa: "広告費をかけているのに、問い合わせや購入が増えない",
    textEn: "Ad spend keeps rising, but conversions and sales remain stagnant",
  },
  {
    icon: "📊",
    textJa: "LPを作ったけれど、改善ポイントがわからない",
    textEn: "Built a landing page, but don't know how to optimize it for conversions",
  },
  {
    icon: "🔍",
    textJa: "アクセスやコンバージョンの計測が正しくできているか不安",
    textEn: "Unsure if website tracking, event tags, and conversions are accurately set up",
  },
  {
    icon: "📊",
    textJa: "Google広告やMeta広告の数字をどう見ればいいかわからない",
    textEn: "Overwhelmed by Google & Meta Ads metrics and don't know what to focus on",
  },
  {
    icon: "🔍",
    textJa: "タグ設定や計測環境が複雑で、自社では対応できない",
    textEn: "Tag management and analytics setups are too complex to handle in-house",
  },
];

// 2. 改善例リスト（How I Can Help / Solutions）
const solutionsData: SolutionItem[] = [
  {
    textJa: "広告の成果を正しく計測し、どの施策が効果的かわかるようにします",
    textEn: "Accurately track ad performance to clearly identify what drives ROI",
  },
  {
    textJa: "データをもとにLPの改善ポイントを見つけ、成果につながるページへ",
    textEn: "Identify landing page bottlenecks through data to boost conversion rates",
  },
  {
    textJa: "広告費の使い方を見直し、無駄な配信を減らします",
    textEn: "Audit ad spend to eliminate wasted budget and optimize cost efficiency",
  },
  {
    textJa: "コンバージョンまでの流れを整理し、ユーザーに届きやすい広告運用へ",
    textEn: "Streamline the user funnel for more effective and targeted ad delivery",
  },
  {
    textJa: "計測環境を整え、改善のために必要なデータを取得できる状態へ",
    textEn: "Establish robust tracking infrastructure to capture actionable data",
  },
];

const MainSection: React.FC<MainSectionProps> = ({ lang }) => {
  const isJa = lang === "ja";

  return (
    <Container style={{ maxWidth: 900, margin: "0 auto" }}>
      {/* ==========================================
          PC版（PC & タブレット向け表示）
      ========================================== */}
      <div className="pc-block">
        {/* お悩みセクション */}
        <Section
          id="problems"
          title={isJa ? "こんなお悩みありませんか？" : "Are You Facing These Challenges?"}
          titleFontSize="1.7rem"
        >
          <ul className="main-list">
            {problemsData.map((item, idx) => (
              <li key={idx}>
                <span className="icon">{item.icon}</span>
                <span>{isJa ? item.textJa : item.textEn}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 改善セクション */}
        <Section
          id="improvements"
          title={isJa ? "こんな風に改善できます" : "How I Can Help You Succeed"}
          titleFontSize="1.7rem"
        >
          <ul className="main-list">
            {solutionsData.map((item, idx) => (
              <li key={idx}>
                <FaStar style={{ color: "#f9ca24" }} className="icon" />
                <span>{isJa ? item.textJa : item.textEn}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      {/* ==========================================
          スマホ版（モバイル向け表示）
      ========================================== */}
      <div className="mobile-block">
        {/* お悩みセクション */}
        <Section
          id="problems-mobile"
          title={
            isJa ? (
              <>
                こんなお悩み
                <br />
                ありませんか？
              </>
            ) : (
              <>
                Are You Facing
                <br />
                These Challenges?
              </>
            )
          }
          titleFontSize="1.7rem"
        >
          <ul className="main-list">
            {problemsData.map((item, idx) => (
              <li key={idx}>
                <span className="text">
                  {item.icon} {isJa ? item.textJa : item.textEn}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 改善セクション */}
        <Section
          id="improvements-mobile"
          title={isJa ? "こんな風に改善できます" : "How I Can Help You Succeed"}
          titleFontSize="1.7rem"
        >
          <ul className="main-list">
            {solutionsData.map((item, idx) => (
              <li key={idx}>
                <span className="text">
                  <FaStar style={{ color: "#f9ca24", marginRight: "0.4rem" }} />
                  {isJa ? item.textJa : item.textEn}
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Container>
  );
};

export default MainSection;