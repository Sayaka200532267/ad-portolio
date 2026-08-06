import React from "react";
import "../App.css";

export type Language = "ja" | "en";

export interface MetricItem {
  label: { ja: string; en: string };
  value: { ja: string; en: string };
}

export interface AchievementItem {
  id: string;
  category: { ja: string; en: string };
  title: { ja: string; en: string };
  period?: { ja: string; en: string };
  metrics?: MetricItem[];
  highlights: { ja: string[]; en: string[] };
  tags: { ja: string[]; en: string[] };
}

const achievementsData: AchievementItem[] = [
  {
    id: "meta-ads",
    category: {
      ja: "Meta広告運用・改善コンサル / D2C・EC",
      en: "Marketing Strategy & Advertising Optimization",
    },
    title: {
      ja: "直クライアント伴走：事業目標に合わせたマーケティング戦略設計とPDCA改善",
      en: "Direct Client Partnership: Strategic Marketing Design & Continuous PDCA Optimization",
    },
    period: { ja: "2025年", en: "2025" },
    metrics: [
      { label: { ja: "広告CTR", en: "Ad CTR" }, value: { ja: "3.0% → 4.9%", en: "3.0% → 4.9%" } },
      { label: { ja: "改善率", en: "Growth Rate" }, value: { ja: "+63%", en: "+63%" } },
    ],
    highlights: {
      ja: [
        "事業理解をもとにした課題整理、KPI設計、マーケティング施策の方向性策定",
        "広告データやユーザー行動分析を活用したターゲット・訴求軸・クリエイティブの最適化",
        "FV（ファーストビュー）、コピー、CTAなどコンバージョン導線全体を踏まえたLP改善提案",
        "広告運用とサイト分析を横断した、継続的な改善プロセスの設計",
      ],
      en: [
        "Identifying business challenges, defining KPIs, and developing marketing strategies aligned with business objectives",
        "Optimizing targeting, messaging, and creatives based on advertising data and user behavior analysis",
        "Providing landing page optimization recommendations covering first-view design, copywriting, CTAs, and conversion flows",
        "Designing continuous improvement processes by integrating advertising operations with website analytics",
      ],
    },
    tags: {
      ja: ["Meta広告", "直クライアント", "改善コンサル", "LP改善", "PDCA検証"],
      en: ["Meta Ads", "Direct Client", "Consulting", "LP Optimization", "PDCA Testing"],
    },
  },
  {
    id: "ga4-recruitment",
    category: {
      ja: "アクセス解析・分析コンサル / 教育法人",
      en: "GA4 / Analytics Infrastructure & Data Visualization",
    },
    title: {
      ja: "直クライアント伴走：採用サイト GA4/GTM分析基盤構築＆意思決定支援",
      en: "Direct Analytics Consulting: GA4/GTM Measurement Architecture & Decision Support",
    },
    period: { ja: "2026年 〜 現在", en: "2026 – Present" },
    metrics: [
      { label: { ja: "計測精度", en: "Tracking Accuracy" }, value: { ja: "100%", en: "100%" } },
      { label: { ja: "構築フェーズ", en: "Project Phase" }, value: { ja: "配信前", en: "Pre-launch" } },
    ],
    highlights: {
      ja: [
        "事業目標に基づいたカスタムイベント設計、KPI計測要件の整理",
        "ユーザー行動データをもとにした離脱ポイント分析、応募導線の改善提案",
        "経営層やマーケティング担当者が迅速に判断できるLooker Studioダッシュボードの設計・構築",
        "広告施策とサイト内行動を横断した効果分析環境の整備",
      ],
      en: [
        "Defining custom events and KPI measurement requirements based on business objectives",
        "Analyzing user behavior data to identify drop-off points and improve application journeys",
        "Designing and building Looker Studio dashboards for management and marketing teams",
        "Establishing cross-channel analysis environments connecting advertising performance with website behavior",
      ],
    },
    tags: {
      ja: ["GA4", "GTM", "分析コンサル", "直クライアント", "Looker Studio"],
      en: ["GA4", "GTM", "Analytics", "Direct Client", "Looker Studio"],
    },
  },
  {
    id: "gtm-agency-tracking",
    category: {
      ja: "テクニカル計測・GTM構築 / 代理店パートナー",
      en: "GTM / GA4 Technical Partnership",
    },
    title: {
      ja: "Web代理店支援：複雑な広告計測環境の再設計＆データ品質最適化",
      en: "Agency Technical Partner: Complex Measurement Infrastructure & Data Quality Optimization",
    },
    metrics: [
      { label: { ja: "正確性", en: "Accuracy" }, value: { ja: "100%", en: "100%" } }
    ],
    highlights: {
      ja: [
        "代理店マーケター・ディレクターの要件を踏まえたGTMタグ、トリガー、計測設計の最適化",
        "カスタムドメイン、Eコマース計測、複数ツール連携環境における正確なトラッキング実装",
        "広告媒体の最適化精度向上につながる高品質なデータ取得環境の構築",
        "マーケティング施策の判断を支える計測基盤の改善・ディレクション",
      ],
      en: [
        "Optimizing GTM tags, triggers, and measurement designs based on requirements from agency marketers and directors",
        "Implementing accurate tracking across custom domains, enhanced e-commerce setups, and multi-tool integrations",
        "Building high-quality data collection environments to improve advertising platform optimization accuracy",
        "Improving and directing measurement infrastructure that supports better marketing decisions",
      ],
    },
    tags: {
      ja: ["GTM", "GA4", "代理店案件", "高度計測", "タグマネジメント"],
      en: ["GTM", "GA4", "Agency Partner", "Advanced Tracking", "Tag Management"],
    },
  },
];

interface AchievementsSectionProps {
  lang?: Language;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ lang = "ja" }) => {
  const uiText = {
    badgeName: "TRACK RECORD",
    title: { ja: "実績・プロジェクト", en: "Featured Case Studies" },
    subtitle: {
      ja: (
        <>
          直クライアント様への戦略的伴走コンサルティングから、
          <span style={{ display: "inline-block" }}>Web代理店様下での高精度な計測環境構築まで、</span>
          <span style={{ display: "inline-block" }}>
            確実なデータと成果に裏付けられた実務実績をご紹介します。
          </span>
        </>
      ),
      en: (
        <>
          Demonstrated success spanning direct client consulting,
          <br />
          performance marketing strategy,
          <br />
          and advanced tracking architecture.
        </>
      ),
    },
    trustBadges: {
      rating: { ja: "クラウドソーシング評価", en: "Client Rating" },
      ctr: { ja: "Meta広告 CTR改善", en: "Meta Ads CTR Boost" },
      accuracy: { ja: "計測設定精度", en: "Tracking Precision" },
    },
  };

  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        {/* ヘッダー */}
        <div className="achievements-header">
          <span className="badge-category">{uiText.badgeName}</span>
          <h2 className="section-title">{uiText.title[lang]}</h2>
          <p className="section-subtitle">{uiText.subtitle[lang]}</p>
        </div>

        {/* トラストバッジ */}
        <div
          className="trust-badges-grid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "900px",
            margin: "0 auto 40px auto",
          }}
        >
          <div className="trust-card" style={{ flex: "1 1 240px", maxWidth: "280px" }}>
            <span className="trust-value">
              4.9<small>/5.0</small>
            </span>
            <span className="trust-label">{uiText.trustBadges.rating[lang]}</span>
          </div>
          <div className="trust-card glow" style={{ flex: "1 1 240px", maxWidth: "280px" }}>
            <span className="trust-valueHighlight">
              +63<small>%</small>
            </span>
            <span className="trust-label">{uiText.trustBadges.ctr[lang]}</span>
          </div>
          <div className="trust-card" style={{ flex: "1 1 240px", maxWidth: "280px" }}>
            <span className="trust-value">
              100<small>%</small>
            </span>
            <span className="trust-label">{uiText.trustBadges.accuracy[lang]}</span>
          </div>
        </div>

        {/* 実績カード */}
        <div className="cards-grid">
          {achievementsData.map((item) => {
            return (
              <div key={item.id} className="case-card">
                <div className="card-content">
                  <div className="card-top">
                    <span className="card-category">{item.category[lang]}</span>
                    {item.period && <span className="card-period">{item.period[lang]}</span>}
                  </div>

                  {/* タイトル */}
                  <h3
                    className="card-title"
                    style={{
                      lineHeight: "1.5",
                      marginBottom: "16px",
                    }}
                  >
                    {item.title[lang]}
                  </h3>

                  {/* 数値指標（Metrics） */}
                  {item.metrics && item.metrics.length > 0 && (
                    <div
                      className="metrics-box"
                      style={
                        item.metrics.length === 1
                          ? { display: "flex", justifyContent: "center", textAlign: "center", marginBottom: "16px" }
                          : { marginBottom: "16px" }
                      }
                    >
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="metric-item">
                          <span className="metric-label">{m.label[lang]}</span>
                          <span className="metric-value">{m.value[lang]}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 箇条書きリスト（主な取り組み） */}
                  <ul
                    className="highlights-list"
                    style={{
                      paddingLeft: "1.2rem",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {item.highlights[lang].map((h, idx) => (
                      <li
                        key={idx}
                        style={{
                          marginBottom: "8px",
                          lineHeight: "1.5",
                          fontSize: "0.88rem",
                        }}
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* タグチップ */}
                <div className="card-footer" style={{ marginTop: "auto" }}>
                  {item.tags[lang].map((tag) => (
                    <span key={tag} className="tag-chip">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;