// src/components/ToolsAndChallenge.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const tools = [
  { text: <>Canva、Figma、<br />Adobe Illustrator<br />(広告バナー・SNS画像作成)</> },
  { text: <>Google Analytics、<br />Google Search Console、<br />Google Ads</> },
  { text: <>Meta広告<br />（Facebook, Instagram）<br />管理画面</> },
  { text: <>Google広告<br />管理画面</> },
  { text: <>LINE公式アカウント管理<br />・UTAGE<br />(予約管理システム)</> },
  { text: <>Excel、<br />Google スプレッドシート<br />(データ集計・レポート作成)</> },
  { text: <>Slack、Chatwork、Zoom<br />(オンライン<br />コミュニケーションツール)</> },
  { text: <>HTML/CSS、React<br />(LP制作)</> },
];

const ToolsAndChallenge: React.FC = () => {
  return (
    <Container style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <section id="tools" className="mb-5">
        <h3 className="text-center mb-4" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
          使用可能なツール
        </h3>

        <Row className="g-3 justify-content-center">
          {tools.map((tool, idx) => (
            <Col
              xs={12}
              md={6}
              lg={idx < 6 ? 4 : 4} // 最後の2つも他と同じ幅に
              key={idx}
            >
              <Card
                className="text-center"
                style={{
                  height: "100%",
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1rem",
                  backgroundColor: "#9abff8",
                  color: "white",
                }}
              >
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {tool.text}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section id="challenge" className="mb-5">
        <h2
          className="text-center mb-3"
          style={{ fontSize: "1.5rem", fontWeight: 700 }}
        >
          スキルとこれからの挑戦
        </h2>
        <p
          className="text-center"
          style={{ fontSize: "1rem", lineHeight: 1.9 }}
        >
Web制作のスキルを活かしながら、<br />
集客から売上まで一貫してサポートできる<span className="mobile-break"></span>広告運用者を目指しています。<br />
Web制作だけでなく、広告運用も実践中です。<br />
お気軽にご相談ください。

        </p>
      </section>
    </Container>
  );
};

export default ToolsAndChallenge;
