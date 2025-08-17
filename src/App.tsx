// App.tsx
import React, { useState, useEffect } from "react";
import { Container, Button, Navbar, Nav, Alert, Row, Col, Image } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGoogle, FaReact, FaLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import MainSection from "./components/MainSection";
import SkillsAccordion from "./components/SkillsAccordion";
import ToolsAndSkills from "./components/ToolsAndSkills";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"

// SectionProps に titleFontSize を追加
export interface SectionProps {
  id: string;
  title: string;
  titleFontSize?: string;
  children: React.ReactNode;
}

const App: React.FC = () => {
  const [state, handleSubmit] = useForm("xwpqykbw");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setStatus("送信が完了しました。ありがとうございます！");
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setStatus("送信に失敗しました。内容をご確認ください。");
    } else {
      setStatus("");
    }
  }, [state]);

  return (
    <>
      <Header />
      <Alert variant="info" className="site-info-alert text-center mb-0">
        このサイトはSayaka-Webが<br className="d-block d-lg-none" />Reactにて制作しています。
      </Alert>
      <HeroSection />
      <MainSection />
      <AboutSection />
      <SkillsAccordion />
      <ToolsAndSkills />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
