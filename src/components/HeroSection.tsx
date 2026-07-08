import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../App.css";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const email = "sayaka.ohara.work@gmail.com"; 

const HeroSection: React.FC = () => (
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
        広告運用
        <br className="d-block d-lg-none" />
        ×
        <br className="d-block d-lg-none" />
        正確な計測環境
      </motion.h1>

      <motion.p
        className="hero-subtitle fade-up"
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        確実な計測環境を整え、
        <br className="d-block d-lg-none" />
        広告費を無駄にしない運用を実現します。
      </motion.p>

  <Button
  className="hero-button"
  style={{
    backgroundColor: "#458ddb",
    color: "white",
    fontSize: "1.2rem",
    padding: "1rem 2rem",
    border: "none",
    marginTop: "1.5rem"
  }}
  href={`mailto:${email}`}
  size="lg"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "contact_click"
    });
  }}
>
  お問い合わせはこちら
</Button>
    </Container>
  </section>
);

export default HeroSection;
