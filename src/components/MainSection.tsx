import React from "react";
import { Container } from "react-bootstrap";
import Section from "./Section";
import { FaStar } from "react-icons/fa";
import "../App.css"


const MainSection: React.FC = () => (
  <Container style={{ maxWidth: 900, margin: "0 auto" }}>

    {/* ======================
          PC版（横並び）
    ====================== */}
    <div className="pc-block">
      <Section id="problems" title="こんなお悩みありませんか？" titleFontSize="1.5rem">
        <ul className="main-list">
          <li>
            <span className="icon">🌀</span>
            <span>Meta広告やGoogle広告、Yahoo広告を始めたけど、思うように効果が出ない</span>
          </li>
          <li>
            <span className="icon">🌀</span>
            <span>Web広告を始めたいけど、何から始めていいかわからない</span>
          </li>
          <li>
            <span className="icon">🌀</span>
            <span>LPやLINEなど複数ツールが連携できず、成果につながらない</span>
          </li>
          <li>
            <span className="icon">🌀</span>
            <span>集客の仕組み全体をどう組み立てればいいか分からない</span>
          </li>
        </ul>
      </Section>

      <Section id="improvements" title="こんな風に改善できます" titleFontSize="1.5rem">
        <ul className="main-list">
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>LPの内容やデザインを見直し、興味を引く形に整えます</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>セールスコピーを改善して成約率アップを目指します</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }}  className="icon" />
            <span>ターゲティングとクリエイティブを最適化し、効率よく集客します</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>LINEやUTAGE、メールと連携し、集客からフォローまでスムーズにします</span>
          </li>
        </ul>
      </Section>
    </div>

    {/* ======================
          スマホ版（アイコン左・テキスト右、中央寄せ）
    ====================== */}
    <div className="mobile-block">
      <Section id="problems" title="こんなお悩みありませんか？" titleFontSize="1.5rem">
        <ul className="main-list">
          <li>
            <span className="text">
             🌀 Meta広告やGoogle広告、<br />Yahoo広告を始めたけど、<br />思うように効果が出ない
            </span>
          </li>
          <li>
          
            <span className="text">
              🌀 Web広告を始めたいけど、<br />何から始めていいかわからない
            </span>
          </li>
          <li>
             <span className="text">
              🌀 LPやLINEなど複数ツールが連携できず、<br />成果につながらない
            </span>
          </li>
          <li>
             <span className="text">
              🌀 集客の仕組み全体を<br />どう組み立てればいいか分からない
            </span>
          </li>
        </ul>
      </Section>

      <Section id="improvements" title="こんな風に改善できます" titleFontSize="1.5rem">
        <ul className="main-list">
       {/* スマホ版改善例 */}
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    LPの内容やデザインを見直し、<br />興味を引く形に整えます
  </span>
</li>
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    セールスコピーを改善して<br />成約率アップを目指します
  </span>
</li>
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    ターゲティングと<br />クリエイティブを最適化し、<br />効率よく集客します
  </span>
</li>
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    LINEやUTAGE、メールと連携し、<br />集客からフォローまでスムーズにします
  </span>
</li>

        </ul>
      </Section>
    </div>

  </Container>
);

export default MainSection;
