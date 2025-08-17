import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
   titleFontSize?: string; 
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="mb-5">
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "1.5rem", // px指定
        textAlign: "center",    // 中央揃え
      }}
    >
      {title}
    </h2>
    <div style={{ textAlign: "center" }}>{children}</div> {/* リストなども中央揃えにしたい場合 */}
  </section>
);

export default Section;
