// src/components/Footer.tsx

import React from "react";
import "../App.css";

type Language = "ja" | "en";

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const brandName = lang === "ja" ? "さやか" : "Sayaka";

  return (
    <footer className="footer text-center py-3">
      © 2026 {brandName} @ Ads & Data. All rights reserved.
    </footer>
  );
};

export default Footer;