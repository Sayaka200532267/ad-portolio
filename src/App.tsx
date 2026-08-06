import React, { useState } from "react"; // useState を追加
import { BrowserRouter as Router } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import SkillsAccordion from "./components/SkillsAccordion";
import "./App.css";

// SectionProps 型定義（必要に応じて export）
export interface SectionProps {
  id: string;
  title: string;
  titleFontSize?: string;
  children: React.ReactNode;
}

type Language = "ja" | "en";

const App: React.FC = () => {
  // アプリ全体の言語状態（1箇所で一括管理）
  const [lang, setLang] = useState<Language>("ja");

  return (
    <Router>
      {/* ヘッダーに言語切替関数と現在の言語を渡す */}
      <Header lang={lang} setLang={setLang} />

      <Alert variant="info" className="site-info-alert text-center mb-0">
        {lang === "ja"
          ? "このサイトはReactにて制作しています。"
          : "This site is built with React."}
      </Alert>

      {/* 各セクションへ lang を伝播 */}
      <HeroSection lang={lang} />
      <MainSection lang={lang} />
      <AboutSection lang={lang} />
      <CapabilitiesSection lang={lang} />
      <SkillsAccordion lang={lang} />
      <Footer lang={lang} />
    </Router>
  );
};

export default App;