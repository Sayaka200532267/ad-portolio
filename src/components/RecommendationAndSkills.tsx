// src/components/SkillsAccordion.tsx
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../App.css"; // カスタムCSSを読み込む

const SkillsAccordion: React.FC = () => {
  return (
    <Container className="my-5">
      {/* タイトル中央揃え */}
      <h2 className="text-center mb-4" style={{ fontSize: "1.5rem", fontWeight: 700 }}>スキルと強み</h2>

      <Accordion defaultActiveKey="0" alwaysOpen className="custom-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header">
            広告運用関連スキル
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none" }}>
              <li>Meta広告・Google広告の基礎知識</li>
              <li>広告アカウント設定、ターゲティング設定</li>
              <li>効果測定とレポーティング</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header className="custom-accordion-header">
            分析・レポート作成
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none" }}>
              <li>事務経験を活かし、データ集計や広告成果レポートの作成</li>
              <li>Excel・Googleスプレッドシートによる効率的なデータ管理</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header className="custom-accordion-header">
            プログラミング・Web制作
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none"}}>
              <li>HTML・CSS・Reactを用いたLP制作や広告ランディングページの最適化</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header className="custom-accordion-header">
            デザインスキル
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none" }}>
              <li>Canva、Figma、Illustratorを用いた広告バナーやSNS用画像作成</li>
              <li>クリエイティブ制作のサポート</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header className="custom-accordion-header">
            コミュニケーション
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none" }}>
              <li>クライアントとのヒアリングや課題整理</li>
              <li>わかりやすい説明と連携調整</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header className="custom-accordion-header">
            多言語対応
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none" }}>
              <li>英語のドキュメント作成やツール設定が可能</li>
              <li>海外展開サポートも対応可能</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header className="custom-accordion-header">
            公式LINE / UTAGE設定
          </Accordion.Header>
          <Accordion.Body>
            <ul style={{ lineHeight: 1.8, textAlign: "center", listStyle: "none" }}>
              <li>LINE公式アカウントやUTAGEの設定・運用サポート</li>
              <li>英語ドキュメント作成や多言語対応も可能</li>
              <li>海外展開を視野に入れたスムーズなツール連携を支援</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default SkillsAccordion;
