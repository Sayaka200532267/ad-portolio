// src/components/SkillsAccordion.tsx
import React from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import "../App.css";

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
  const email = "sayakaohara@outlook.com";

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4" style={{ fontSize: "1.7rem", fontWeight: 700 }}>
        スキルと強み
      </h2>

      <Accordion defaultActiveKey="0" alwaysOpen className="custom-accordion">

        {/* =====================
            PC版
        ===================== */}
        <div className="pc-block">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header">広告運用関連スキル</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaFacebookF style={{ marginRight: "0.2rem" }} /><FaInstagram style={{ marginRight: "0.4rem" }} />Meta広告</li>
                <li><FaGoogle style={{ marginRight: "0.4rem", marginLeft: "0.8rem" }} />広告アカウント設定、ターゲティング設定</li>
                <li><AiOutlineBarChart style={{ marginRight: "0.4rem",marginLeft: "0.8rem" }} />効果測定とレポーティング</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion-header">分析・レポート作成</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><AiOutlineFileText style={{ marginRight: "0.4rem" }} />事務経験を活かし、データ集計や広告成果レポートの作成</li>
                <li><SiGoogletranslate style={{ marginRight: "0.4rem" }} />Excel・Googleスプレッドシートによる効率的なデータ管理</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">プログラミング・Web制作</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiHtml5 style={{ marginRight: "0.2rem" }} /> HTML
                  <SiCss3 style={{ marginLeft: "0.8rem", marginRight: "0.2rem" }} /> CSS
                  <SiJavascript style={{ marginLeft: "0.8rem", marginRight: "0.2rem" }} /> JavaScript
                  <FaReact style={{ marginLeft: "0.8rem", marginRight: "0.2rem" }} /> React
                  を用いたLP制作や<br />広告ランディングページの最適化
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion-header">デザインスキル</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiCanva style={{ marginRight: "0.2rem" }} /> Canva
                  <SiFigma style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> Figma
                  <SiAdobeillustrator style={{ marginLeft: "0.8rem", marginRight: "0.2rem" }} /> Illustratorを用いた広告バナーやSNS用画像作成
                </li>
                <li><FaPaintBrush style={{ marginRight: "0.4rem" }} />クリエイティブ制作のサポート</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion-header">コミュニケーション</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaComments style={{ marginRight: "0.4rem" }} />クライアントとのヒアリングや課題整理</li>
                <li><FaHandshake style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} />わかりやすい説明と連携調整</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion-header">多言語対応</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaGlobe style={{ marginRight: "0.4rem" }} />英語のドキュメント作成やツール設定が可能</li>
                <li><SiGoogletranslate style={{ marginRight: "0.4rem" }} />海外展開サポートも対応可能</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header className="custom-accordion-header">公式LINE / UTAGE設定</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaLine style={{ marginRight: "0.4rem" }} />LINE公式アカウントやUTAGEの設定・運用サポート</li>
                <li><FaTools style={{ marginRight: "0.4rem" }} />英語ドキュメント作成や多言語対応も可能</li>
                <li><FaPlane style={{ marginRight: "0.4rem" }} />海外展開を視野に入れたスムーズなツール連携を支援</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        {/* =====================
            スマホ版（PC版アイコン統一）
        ===================== */}
        <div className="mobile-block">

          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header">広告運用関連スキル</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaFacebookF style={{ marginRight: "0.4rem" }} /><FaInstagram style={{ marginRight: "0.4rem" }} />Meta広告</li>
                <li><FaGoogle style={{ marginRight: "0.4rem" }} />広告アカウント設定、<br />ターゲティング設定</li>
                <li><AiOutlineBarChart style={{ marginRight: "0.4rem" }} />効果測定とレポーティング</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className="custom-accordion-header">分析・レポート作成</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><AiOutlineFileText style={{ marginRight: "0.4rem" }} />事務経験を活かし、<br />データ集計や広告成果レポートの作成</li>
                <li><SiGoogletranslate style={{ marginRight: "0.4rem" }} />Excel・Googleスプレッドシートによる<br />効率的なデータ管理</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className="custom-accordion-header">プログラミング・Web制作</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiHtml5 style={{ marginRight: "0.4rem" }} /> HTML
                  <SiCss3 style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> CSS
                  <SiJavascript style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> JavaScript
                  <FaReact style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> React
                  を用いたLP制作や広告ランディングページの最適化
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className="custom-accordion-header">デザインスキル</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li>
                  <SiCanva style={{ marginRight: "0.4rem" }} /> Canva
                  <SiFigma style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> Figma
                  <SiAdobeillustrator style={{ marginLeft: "0.8rem", marginRight: "0.4rem" }} /> Illustratorを用いた広告バナーやSNS用画像作成
                </li>
                <li><FaPaintBrush style={{ marginRight: "0.4rem" }} />クリエイティブ制作のサポート</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header className="custom-accordion-header">コミュニケーション</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaComments style={{ marginRight: "0.4rem" }} />クライアントとのヒアリングや課題整理</li>
                <li><FaHandshake style={{ marginRight: "0.4rem" }} />わかりやすい説明と連携調整</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header className="custom-accordion-header">多言語対応</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaGlobe style={{ marginRight: "0.4rem" }} />英語のドキュメント作成やツール設定が可能</li>
                <li><SiGoogletranslate style={{ marginRight: "0.4rem" }} />海外展開サポートも対応可能</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header className="custom-accordion-header">公式LINE / UTAGE設定</Accordion.Header>
            <Accordion.Body className="text-center">
              <ul>
                <li><FaLine style={{ marginRight: "0.4rem" }} />LINE公式アカウントやUTAGEの設定・運用サポート</li>
                <li><FaTools style={{ marginRight: "0.4rem" }} />英語ドキュメント作成や多言語対応も可能</li>
                <li><FaPlane style={{ marginRight: "0.4rem" }} />海外展開を視野に入れたスムーズなツール連携を支援</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </div>
      </Accordion>

     <div className="contact-message text-center mt-5 mb-3">
  <p>
    📧 まずはメールで<br className="d-block d-lg-none" />お気軽にご相談ください。
  </p>
  <p>
    💬 「まずは構築だけ」<br className="d-block d-lg-none" />「オプションだけ」など、<br className="d-block d-lg-none" />必要な部分だけの依頼も可能です
  </p>
</div>

<div className="contact-button text-center">
  <Button className="contact-button"  style={{
    backgroundColor: "#458ddb",
    color: "white",
    fontSize: "1.2rem",
    padding: "1rem 2rem",
    border: "none",
    marginTop: "1.5rem"
    }}
    href={`mailto:${email}?subject=お問い合わせ&body=こんにちは、`}
    size="lg"
  >
    お問い合わせはこちら
  </Button>
</div>
    </Container>
  );
};

export default SkillsAccordion;
