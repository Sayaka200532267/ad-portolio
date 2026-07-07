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
            <span className="icon">📊</span>
            <span>広告を出しているけれど、本当に成果につながっているかわからない</span>
          </li>
          <li>
            <span className="icon">🔍</span>
            <span>広告費をかけているのに、問い合わせや購入が増えない</span>
          </li>
          <li>
            <span className="icon">📊</span>
            <span>LPを作ったけれど、改善ポイントがわからない</span>
          </li>
          <li>
            <span className="icon">🔍</span>
            <span>アクセスやコンバージョンの計測が正しくできているか不安</span>
          </li>
          <li>
            <span className="icon">📊</span>
            <span>Google広告やMeta広告の数字をどう見ればいいかわからない</span>
          </li>
                    <li>
            <span className="icon">🔍</span>
            <span>タグ設定や計測環境が複雑で、自社では対応できない</span>
          </li>
        </ul>
     </Section>

      <Section id="improvements" title="こんな風に改善できます" titleFontSize="1.5rem">
        <ul className="main-list">
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>広告の成果を正しく計測し、どの施策が効果的かわかるようにします</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>データをもとにLPの改善ポイントを見つけ、成果につながるページへ</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }}  className="icon" />
            <span>広告費の使い方を見直し、無駄な配信を減らします</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>コンバージョンまでの流れを整理し、ユーザーに届きやすい広告運用へ</span>
          </li>
          <li>
            <FaStar style={{ color: "#f9ca24" }} className="icon" />
            <span>計測環境を整え、改善のために必要なデータを取得できる状態へ</span>
          </li>
        </ul>
      </Section>
    </div>

    {/* ======================
          スマホ版（アイコン左・テキスト右、中央寄せ）
    ====================== */}
    <div className="mobile-block">
      <Section id="problems" title={
    <>
      こんなお悩み
      <br />
      ありませんか？
    </>
  } titleFontSize="1.7rem">
        <ul className="main-list">
          <li>
            <span className="text">
             📊 広告を出しているけれど、<br />本当に成果につながっているかわからない
            </span>
          </li>
          <li>
          <span className="text">
             🔍 広告費をかけているのに、<br />問い合わせや購入が増えない
            </span>
          </li>
          <li>
             <span className="text">
             📊 LPを作ったけれど、<br />改善ポイントがわからない<br />
            </span>
          </li>
           <li>
            <span className="icon">
              🔍アクセスやコンバージョンの計測が<br />正しくできているか不安</span>
          </li>
          <li>
            <span className="icon">
              📊 Google広告やMeta広告の数字を<br />どう見ればいいかわからない</span>
          </li>
          <li>
            <span className="icon">
              🔍 タグ設定や計測環境が複雑で、<br />自社では対応できない</span>
          </li>
          <li>
             <span className="text">
              📊 アクセスやコンバージョンの計測が<br />正しくできているか不安
            </span>
          </li>
        </ul>
      </Section>

      <Section id="improvements" title="こんな風に改善できます" titleFontSize="1.7rem">
        <ul className="main-list">
       {/* スマホ版改善例 */}
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    広告の成果を正しく計測し、<br />どの施策が効果的かわかるようにします
  </span>
</li>
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    データをもとにLPの改善ポイントを見つけ、<br />成果につながるページへ
  </span>
</li>
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    コンバージョンまでの流れを整理し、<br />ユーザーに届きやすい広告運用へ
  </span>
</li>
<li>
  <span className="text">
    <FaStar style={{ color: "#f9ca24", marginRight: "0.2rem" }} />
    計測環境を整え、<br />改善のために必要なデータを取得できる状態へ
  </span>
</li>
</ul>
      </Section>
    </div>

  </Container>
);

export default MainSection;
