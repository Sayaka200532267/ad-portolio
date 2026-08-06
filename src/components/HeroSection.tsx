// src/components/HeroSection.tsx

import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

type Language = "ja" | "en";

interface HeroSectionProps {
  lang: Language;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

// 多言語テキスト定義
const translations = {
  ja: {
    titleMain: "広告運用",
    titleSub: "正確な計測環境",
    subtitleLine1: "確実な計測環境を整え、",
    subtitleLine2: "広告費を無駄にしない運用を実現します。",
    btnText: "お問い合わせはこちら",
  },
  en: {
    titleMain: "Ad Performance",
    titleSub: "Accurate Measurement Setup",
    subtitleLine1: "Build a reliable tracking foundation",
    subtitleLine2: "to maximize ROI and eliminate wasted ad spend.",
    btnText: "Get in Touch",
  },
};

const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section
      id="hero"
      className="hero-video-relative text-center text-white mb-5"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        src="/hero-image2.mp4"
      >
        <source src="/hero-image2.mp4" type="video/mp4" />
      </video>

      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <motion.h1
          className="hero-title fade-up"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {t.titleMain}
          <br className="d-block d-lg-none" />
          {" × "}
          <br className="d-block d-lg-none" />
          {t.titleSub}
        </motion.h1>

        <motion.p
          className="hero-subtitle fade-up"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {t.subtitleLine1}
          <br className="d-block d-lg-none" />
          {t.subtitleLine2}
        </motion.p>

        <Button
          className="hero-button"
          style={{
            backgroundColor: "#458ddb",
            color: "white",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            border: "none",
            marginTop: "1.5rem",
          }}
          href="#contact"
          size="lg"
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "contact_click",
            });
          }}
        >
          {t.btnText}
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;