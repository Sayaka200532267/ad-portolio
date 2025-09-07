import React from "react";

interface SectionProps {
  id: string;
  title: string | JSX.Element; // JSXも文字列も受け取れるように
  children: React.ReactNode;
  titleFontSize?: string; // 任意でフォントサイズを指定可能
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  titleFontSize = "1.5rem", // デフォルトフォントサイズ
}) => (
  <section id={id} className="mb-5">
    <h2
      style={{
        fontSize: titleFontSize,
        fontWeight: 700,
        marginBottom: "1.5rem",
        textAlign: "center",
      }}
    >
      {title}
    </h2>
    <div style={{ textAlign: "center" }}>{children}</div>
  </section>
);

export default Section;
