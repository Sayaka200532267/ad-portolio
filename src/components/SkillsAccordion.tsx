// src/components/SkillsAccordion.tsx
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../App.css";

// react-icons import
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaReact,
  FaPaintBrush,
  FaComments,
  FaHandshake,
  FaGlobe,
  FaLine,
  FaTools,
  FaPlane
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiCanva,
  SiAdobeillustrator,
  SiGoogletranslate
} from "react-icons/si";
import { AiOutlineBarChart, AiOutlineFileText } from "react-icons/ai";

const SkillsAccordion: React.FC = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
        スキルと強み
      </h2>

      <Accordion defaultActiveKey="0" alwaysOpen className="custom-accordion">
        {/* 広告運用関連スキル */}
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header">
            広告運用関連スキル
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FaFacebookF style={{ marginRight: "0.4rem" }} />
                <FaInstagram style={{ marginRight: "0.4rem" }} />
                Meta広告
              </li>
              <li>
                <FaGoogle style={{ marginRight: "0.4rem" }} />
                広告アカウント設定、
                <span className="mobile-break"></span>
                ターゲティング設定
              </li>
              <li>
                <AiOutlineBarChart style={{ marginRight: "0.4rem" }} />
                効果測定とレポーティング
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* 分析・レポート作成 */}
        <Accordion.Item eventKey="1">
          <Accordion.Header className="custom-accordion-header">
            分析・レポート作成
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <AiOutlineFileText style={{ marginRight: "0.4rem" }} />
                事務経験を活かし、
                <span className="mobile-break"></span>
                データ集計や広告成果レポートの作成
              </li>
              <li>
                <SiGoogletranslate style={{ marginRight: "0.4rem" }} />
                Excel・Googleスプレッドシートによる
                <span className="mobile-break"></span>
                効率的なデータ管理
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* プログラミング・Web制作 */}
        <Accordion.Item eventKey="2">
          <Accordion.Header className="custom-accordion-header">
            プログラミング・Web制作
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <SiHtml5 style={{ marginRight: "0.4rem" }} /> HTML
                <SiCss3 style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> CSS
                <span className="mobile-break"></span>
               <SiJavascript style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> JavaScript
                <FaReact style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> React
                <span className="mobile-break"></span>
                を用いたLP制作や
                <span className="mobile-break"></span>広告ランディングページの最適化
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* デザインスキル */}
        <Accordion.Item eventKey="3">
          <Accordion.Header className="custom-accordion-header">
            デザインスキル
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <SiCanva style={{ marginRight: "0.4rem" }} /> Canva
                <SiFigma style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> Figma
                <SiAdobeillustrator style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> Illustratorを
                <span className="mobile-break"></span>
                用いた広告バナーやSNS用画像作成
              </li>
              <li>
                <FaPaintBrush style={{ marginRight: "0.4rem" }} />
                クリエイティブ制作のサポート
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* コミュニケーション */}
        <Accordion.Item eventKey="4">
          <Accordion.Header className="custom-accordion-header">
            コミュニケーション
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FaComments style={{ marginRight: "0.4rem" }} />
                クライアントとの
                <span className="mobile-break"></span>
                ヒアリングや課題整理
              </li>
              <li>
                <FaHandshake style={{ marginRight: "0.4rem" }} />
                わかりやすい説明と連携調整
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* 多言語対応 */}
        <Accordion.Item eventKey="5">
          <Accordion.Header className="custom-accordion-header">
            多言語対応
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FaGlobe style={{ marginRight: "0.4rem" }} />
                英語のドキュメント作成や
                <span className="mobile-break"></span>
                ツール設定が可能
              </li>
              <li>
                <SiGoogletranslate style={{ marginRight: "0.4rem" }} />
                海外展開サポートも対応可能
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* 公式LINE / UTAGE設定 */}
        <Accordion.Item eventKey="6">
          <Accordion.Header className="custom-accordion-header">
            公式LINE / UTAGE設定
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <FaLine style={{ marginRight: "0.4rem" }} />
                LINE公式アカウントや
                <span className="mobile-break"></span>
                UTAGEの設定・運用サポート
              </li>
              <li>
                <FaTools style={{ marginRight: "0.4rem" }} />
                英語ドキュメント作成や
                <span className="mobile-break"></span>
                多言語対応も可能
              </li>
              <li>
                <FaPlane style={{ marginRight: "0.4rem" }} />
                海外展開を視野に入れた
                <span className="mobile-break"></span>
                スムーズなツール連携を支援
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default SkillsAccordion;
