import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="hero-videoposition-relative text-center text-white mb-5"
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="hero-video"
      src="/hero-image.mp4"
    >
      <source src="/hero-image.mp4" type="video/mp4" />
    </video>

    <Container className="d-flex flex-column justify-content-center align-items-center h-100">
      <motion.h1
        className="hero-title fade-up"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        広告運用
        <br className="d-block d-lg-none" />
        ×
        <br className="d-block d-lg-none" />
        Web制作
      </motion.h1>

      <motion.p
        className="hero-subtitle fade-up"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        集客からファネル設計、
        <br className="d-block d-lg-none" />
        売上までワンストップで
        <br className="d-block d-lg-none" />
        サポートします
      </motion.p>

      <Button
        variant="primary"
        href="#contact"
        className="hero-button"
      >
        お問い合わせはこちら
      </Button>
    </Container>
  </section>
);

export default HeroSection;
