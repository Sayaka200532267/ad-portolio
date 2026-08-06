import React from "react";
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

// SectionProps に titleFontSize を追加
export interface SectionProps {
  id: string;
  title: string;
  titleFontSize?: string;
  children: React.ReactNode;
}

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Alert variant="info" className="site-info-alert text-center mb-0">
        このサイトはReactにて制作しています。
      </Alert>
      <HeroSection />
      <MainSection />
      <AboutSection />
      <CapabilitiesSection />
      <SkillsAccordion />
      <Footer />
    </Router>
  );
};

export default App;
