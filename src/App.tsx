import React from "react";
import { Container, Button, Navbar, Nav, Alert, Row, Col, Image } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaGoogle, FaReact, FaLine } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";

const App = () => {
  return (
    <>
      {/* ナビゲーション */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
        <Container>
          <Navbar.Brand href="#">広告運用ポートフォリオ</Navbar.Brand>
          <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
            <Nav.Link href="#problems">お悩み</Nav.Link>
            <Nav.Link href="#improvements">改善案</Nav.Link>
            <Nav.Link href="#about">自己紹介</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 制作者アピール */}
      <Alert
        variant="info"
        className="text-center mb-0"
        style={{ fontWeight: "bold", fontSize: "1.3rem" }}
      >
        このサイトはSayaka-Webが制作しています。
      </Alert>

      {/* ヒーローセクション（動画背景） */}
      <section
        id="hero"
        className="position-relative text-center text-white mb-5"
        style={{ height: "60vh", overflow: "hidden" }}
      >
<video
  autoPlay
  muted
  loop
  playsInline
  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
  src="/hero-image.mp4"
>
  <source src="/hero-image.mp4" type="video/mp4" />
</video>

        <Container className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)", fontSize: "3rem" }}>
            広告運用 × Web制作
          </h1>
          <p style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)", fontSize: "1.5rem" }}>
            集客からファネル設計、売上までワンストップでサポートします
          </p>
          <Button
            variant="primary"
            href="mailto:sayakaohara@example.com?subject=無料相談の問い合わせ"
            style={{ padding: "1rem 2rem", fontSize: "1.5rem" }}
          >
            無料相談はこちら
          </Button>
        </Container>
      </section>

      {/* コンテンツ部分 */}
      <Container style={{ maxWidth: 900 }}>
        <section id="problems" className="mb-5">
          <h2 style={{ fontSize: "2.2rem", fontWeight: "700" }}>こんなお悩みありませんか？</h2>
          <ul style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            <li>Meta広告やGoogle広告、Yahoo広告を始めたけど、思うように効果が出ない</li>
            <li>Web広告を始めたいけど、何から始めていいかわからない</li>
            <li>LPやLINEなど複数ツールが連携できず、成果につながらない</li>
            <li>集客の仕組み全体をどう組み立てればいいか分からない</li>
          </ul>
        </section>

        <section id="improvements" className="mb-5">
          <h2 style={{ fontSize: "2.2rem", fontWeight: "700" }}>こんな風に改善できます</h2>
          <ul style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            <li>LPの内容やデザインを見直し、興味を引く形に整えます</li>
            <li>セールスコピーを改善して成約率アップを目指します</li>
            <li>ターゲティングとクリエイティブを最適化し、効率よく集客します</li>
            <li>LINEやUTAGE、メールと連携し、集客からフォローまでスムーズにします</li>
          </ul>
        </section>

        <section id="about" className="mb-5">
          <h2 style={{ fontSize: "2.2rem", fontWeight: "700" }}>はじめまして。Sayaka-Webと申します。</h2>
          <Row className="align-items-center mt-3">
            <Col md={4} className="mb-3 mb-md-0 text-center">
              <Image
                src="/sayaka-web.png"
                roundedCircle
                fluid
                alt="Sayaka-Web プロフィール写真"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
             
            </Col>
            <Col md={8}>
              <p style={{ fontSize: "1.3rem", lineHeight: 1.7 }}>
                Google広告の認定資格を取得し、Meta広告の基礎も学んでいるので、最新ノウハウを活かした広告運用が可能です。
                初心者の方にもわかりやすく丁寧に説明し、ツール設定もサポート。
                広告運用を通じて売上アップやファンづくりにつながる仕組みづくりをお手伝いします。
                対応可能な業種は個人事業主、小規模チーム、ネットショップ運営者など幅広く対応。
                英語圏の専門学校でプログラミングやWeb制作の基礎も学んでいるので、技術面も柔軟に対応可能。
                英語環境でのツール設定や資料作成もお任せください。
              </p>
            </Col>
          </Row>

          <h3 style={{ fontSize: "1.8rem", fontWeight: "600", marginTop: "1.5rem", marginBottom: "3rem" }}>
            対応可能な内容
          </h3>

          {/* 2列グリッドでアイコン＋説明 */}
         {/* 2列グリッドでアイコン＋説明 */}
<Row style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
  <Col xs={6} className="text-center mb-4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "0.5rem" }}>
      <FaFacebookF size={80} color="#3b5998" />
      <FaInstagram size={80} color="#E1306C" />
    </div>
    <p>Meta広告（Facebook/Instagram）</p>
  </Col>
  <Col xs={6} className="text-center mb-4">
    <FaGoogle size={80} style={{ color: "#4285F4" }} />
    <p style={{ marginTop: "0.5rem" }}>Google広告運用</p>
  </Col>

  <Col xs={6} className="text-center mb-4">
    {/* Yahooの代わりにターゲットアイコン */}
    <FiTarget size={80} color="#FF3300" />
    <p style={{ marginTop: "0.5rem" }}>Yahoo広告運用</p>
  </Col>
  <Col xs={6} className="text-center mb-4">
    <FaReact size={80} style={{ color: "#61DAFB" }} />
    <p style={{ marginTop: "0.5rem" }}>ReactでLP作成</p>
  </Col>

  <Col xs={6} className="text-center mb-4">
    <FaLine size={80} style={{ color: "#00B900" }} />
    <p style={{ marginTop: "0.5rem" }}>LINE公式設定</p>
  </Col>
  <Col xs={6} className="text-center mb-4">
    {/* Utageの代替アイコン */}
    <svg
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="#FF6F61"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginBottom: "0.5rem" }}
    >
      <path d="M3 3h18v18H3V3z" />
      <path fill="white" d="M7 7h10v10H7V7z" />
    </svg>
    <p>UTAGE設定</p>
  </Col>
</Row>


          <h3 style={{ fontSize: "1.8rem", fontWeight: "600", marginTop: "1.5rem" }}>
            こんな方におすすめ
          </h3>
          <ul style={{ fontSize: "1.3rem", lineHeight: 1.6 }}>
            <li>広告を始めたけど成果が安定しない個人事業主・小規模チームの方</li>
            <li>複数ツールの連携や仕組みを整理したい方</li>
            <li>英語対応も視野に海外展開を考えている方</li>
          </ul>
        </section>

        <section id="challenge" className="mb-5">
          <h2 style={{ fontSize: "2.2rem", fontWeight: "700" }}>スキルとこれからの挑戦</h2>
          <p style={{ fontSize: "1.3rem", lineHeight: 1.7 }}>
            現在はMeta広告の基礎と実務経験を積んでいる段階ですが、着実に成果を出せるよう日々勉強と実践を重ねています。
            Web制作のスキルも活かしながら、集客から売上まで一貫してサポートできる広告運用者を目指しています。
            今後は具体的な案件での成果を積み重ねていきますので、ぜひお気軽にご相談ください。
          </p>
        </section>

        <div className="text-center mb-5">
          <Button
            variant="primary"
            href="mailto:sayakaohara@example.com?subject=無料相談の問い合わせ"
            style={{
              paddingTop: "1.2rem",
              paddingBottom: "1.2rem",
              paddingRight: "2rem",
              paddingLeft: "2rem",
              fontSize: "1.5rem",
            }}
          >
            無料相談はこちら
          </Button>
        </div>
      </Container>

      {/* フッター */}
      <footer
        className="bg-dark text-white text-center py-3"
        style={{ fontSize: "1rem" }}
      >
        © 2025 Sayaka-Web. All rights reserved.
      </footer>
    </>
  );
};

export default App;
