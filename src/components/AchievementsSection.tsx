import React, { useState } from "react";
import "../App.css";

export type Language = "ja" | "en";

export interface MetricItem {
  label: { ja: string; en: string };
  value: string;
}

export interface AchievementItem {
  id: string;
  category: { ja: string; en: string };
  title: { ja: string; en: string };
  period?: { ja: string; en: string };
  metrics?: MetricItem[];
  description: { ja: React.ReactNode; en: React.ReactNode };
  highlights: { ja: string[]; en: string[] };
  tags: { ja: string[]; en: string[] };
}

const achievementsData: AchievementItem[] = [
  {
    id: "meta-ads",
    category: { ja: "Meta広告運用・改善コンサル / D2C・EC", en: "Meta Ads & Strategy / D2C & E-Commerce" },
    title: {
      ja: "直クライアント伴走：事業目標に合わせたマーケティング戦略設計とPDCA改善",
      en: "Direct Client Partnership: Strategic Marketing Design & Continuous PDCA Optimization",
    },
    period: { ja: "2025年", en: "2025" },
    metrics: [
      { label: { ja: "広告CTR", en: "Ad CTR" }, value: "3.0% → 4.9%" },
      { label: { ja: "改善率", en: "Growth Rate" }, value: "+63%" },
    ],
    description: {
      ja: (
        <>
          事業主様と直接連携し、ビジネス目標やマーケティング課題を踏まえた戦略設計から改善施策まで一貫して推進。
          <br /><br />
          広告管理画面上の数値だけを見るのではなく、ユーザー行動や市場反応を分析し、成果につながるクリエイティブ・訴求軸・導線改善を実施。
          <br /><br />
          定例ミーティングを通じて課題を可視化し、仮説立案・検証・改善を継続的に行うデータドリブンなマーケティングサイクルを構築。
        </>
      ),
      en: (
        <>
          Worked directly with business owners to design marketing strategies and drive improvement initiatives based on business objectives and marketing challenges.
          <br /><br />
          Rather than focusing solely on advertising platform metrics, analyzed user behavior and market responses to optimize creatives, messaging, and conversion journeys that contribute to business growth.
          <br /><br />
          Established a data-driven marketing cycle through regular discussions, hypothesis building, testing, and continuous optimization.
        </>
      ),
    },
    highlights: {
      ja: [
        "事業理解をもとにした課題整理、KPI設計、マーケティング施策の方向性策定",
        "広告データやユーザー行動分析を活用したターゲット・訴求軸・クリエイティブの最適化",
        "FV（ファーストビュー）、コピー、CTAなどコンバージョン導線全体を踏まえたLP改善提案",
        "広告運用とサイト分析を横断した、継続的な改善プロセスの設計",
      ],
      en: [
        "Identified business challenges, defined KPIs, and developed marketing strategies aligned with business goals",
        "Optimized targeting, messaging, and creatives based on advertising data and user behavior analysis",
        "Provided landing page optimization recommendations covering key conversion elements, including first-view design, copywriting, and CTAs",
        "Designed continuous improvement processes by integrating paid advertising operations with website analytics",
      ],
    },
    tags: {
      ja: ["Meta広告", "直クライアント", "改善コンサル", "LP改善", "PDCA検証"],
      en: ["Meta Ads", "Direct Client", "Consulting", "LP Optimization", "PDCA Testing"],
    },
  },
  {
    id: "ga4-recruitment",
    category: { ja: "アクセス解析・分析コンサル / 教育法人", en: "Analytics Consulting / Education" },
    title: {
      ja: "直クライアント伴走：採用サイト GA4/GTM分析基盤構築＆意思決定支援",
      en: "Direct Analytics Consulting: GA4/GTM Measurement Architecture & Decision Support",
    },
    period: { ja: "2026年 〜 現在", en: "2026 – Present" },
    metrics: [
      { label: { ja: "計測精度", en: "Tracking Accuracy" }, value: "100%" },
      { label: { ja: "構築フェーズ", en: "Project Phase" }, value: "配信前" },
    ],
    description: {
      ja: (
        <>
          採用目標や事業課題から逆算し、ユーザー行動を可視化する計測・分析基盤を設計。
          <br /><br />
          GTM・GA4を活用した精度の高いデータ取得環境の構築から、Looker Studioによる可視化・分析まで一貫して対応し、データに基づく意思決定を支えるマーケティング基盤を整備。
          <br /><br />
          取得すべき指標やユーザー行動を整理し、改善につながるKPI設計・分析環境を構築。応募までの導線や離脱ポイントを把握し、採用サイトの改善施策につながるインサイトを提供。
        </>
      ),
      en: (
        <>
          Designed measurement and analytics frameworks based on recruitment goals and business objectives to visualize user behavior throughout the customer journey.
          <br /><br />
          Built accurate data collection environments using GTM and GA4, and developed Looker Studio dashboards to transform data into actionable insights and support data-driven decision-making.
          <br /><br />
          Defined key metrics and user behaviors to establish KPI frameworks and analytics environments that identify drop-off points and improve application conversion journeys.
        </>
      ),
    },
    highlights: {
      ja: [
        "事業目標に基づいたカスタムイベント設計、KPI計測要件の整理",
        "ユーザー行動データをもとにした離脱ポイント分析、応募導線の改善提案",
        "経営層やマーケティング担当者が迅速に判断できるLooker Studioダッシュボードの設計・構築",
        "広告施策とサイト内行動を横断した効果分析環境の整備",
      ],
      en: [
        "Defined custom events and KPI measurement requirements aligned with business objectives",
        "Analyzed user behavior data to identify drop-off points and optimize application journeys",
        "Designed and built Looker Studio dashboards enabling faster decision-making for management and marketing teams",
        "Established cross-channel analysis environments connecting advertising performance with on-site user behavior",
      ],
    },
    tags: {
      ja: ["GA4", "GTM", "分析コンサル", "直クライアント", "Looker Studio"],
      en: ["GA4", "GTM", "Analytics", "Direct Client", "Looker Studio"],
    },
  },
  {
    id: "gtm-agency-tracking",
    category: { ja: "テクニカル計測・GTM構築 / 代理店パートナー", en: "Technical Tracking & GTM Setup / Agency Partner" },
    title: {
      ja: "Web代理店支援：複雑な広告計測環境の再設計＆データ品質最適化",
      en: "Agency Technical Partner: Complex Measurement Infrastructure & Data Quality Optimization",
    },
    metrics: [{ label: { ja: "正確性", en: "Accuracy" }, value: "100%" }],
    description: {
      ja: (
        <>
          広告代理店様のテクニカルパートナーとして、複雑化した広告計測環境を精査・再設計。
          <br /><br />
          GTM・GA4を中心としたデータ基盤の整備を通じて、広告配信の最適化や正確な効果分析を可能にする計測環境を構築。
          <br /><br />
          既存の計測設計に潜む課題やデータ品質の問題を洗い出し、広告運用担当者が正しく判断できる環境へ改善。複数ツールや複雑なサイト構成にも対応し、継続的なマーケティング改善につながるデータ基盤を整備。
        </>
      ),
      en: (
        <>
          Served as a technical marketing partner for advertising agencies, reviewing and redesigning complex advertising measurement environments.
          <br /><br />
          Built reliable tracking and analytics foundations centered around GTM and GA4, enabling more accurate performance analysis and improved advertising optimization.
          <br /><br />
          Identified issues within existing measurement setups and improved data quality to create reliable environments for marketing teams to make informed decisions. Supported complex website structures, multiple tools, and advanced tracking requirements to establish scalable measurement foundations.
        </>
      ),
    },
    highlights: {
      ja: [
        "代理店マーケター・ディレクターの要件を踏まえたGTMタグ、トリガー、計測設計の最適化",
        "カスタムドメイン、Eコマース計測、複数ツール連携環境における正確なトラッキング実装",
        "広告媒体の最適化精度向上につながる高品質なデータ取得環境の構築",
        "マーケティング施策の判断を支える計測基盤の改善・ディレクション",
      ],
      en: [
        "Optimized GTM tags, triggers, and measurement designs based on requirements from agency marketers and directors",
        "Implemented accurate tracking solutions across custom domains, enhanced e-commerce environments, and multi-tool integrations",
        "Built high-quality data collection environments to improve advertising platform optimization accuracy",
        "Directed improvements to measurement infrastructure that enables better marketing decisions",
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
  // 各カードの「説明文の開閉状態」を管理するstate
  const [openDescriptions, setOpenDescriptions] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (id: string) => {
    setOpenDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const uiText: {
    badgeName: string;
    title: { ja: string; en: string };
    subtitle: { ja: React.ReactNode; en: React.ReactNode };
    trustBadges: {
      rating: { ja: string; en: string };
      ctr: { ja: string; en: string };
      accuracy: { ja: string; en: string };
    };
    toggleBtn: {
      open: { ja: string; en: string };
      close: { ja: string; en: string };
    };
  } = {
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
      en: "Demonstrated success spanning direct client consulting, performance marketing strategy, and advanced tracking architecture.",
    },
    trustBadges: {
      rating: { ja: "クラウドソーシング評価", en: "Client Rating" },
      ctr: { ja: "Meta広告 CTR改善", en: "Meta Ads CTR Boost" },
      accuracy: { ja: "計測設定精度", en: "Tracking Precision" },
    },
    toggleBtn: {
      open: { ja: "▼ 課題と支援の背景（詳細を見る）", en: "▼ Show Background & Details" },
      close: { ja: "▲ 詳細を閉じる", en: "▲ Hide Details" },
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

        {/* トラストバッジ (3項目 中央均等配置) */}
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
            const isOpen = !!openDescriptions[item.id];

            return (
              <div key={item.id} className="case-card">
                <div className="card-content">
                  <div className="card-top">
                    <span className="card-category">{item.category[lang]}</span>
                    {item.period && <span className="card-period">{item.period[lang]}</span>}
                  </div>

                  <h3 className="card-title">{item.title[lang]}</h3>

                  {item.metrics && item.metrics.length > 0 && (
                    <div
                      className="metrics-box"
                      style={
                        item.metrics.length === 1
                          ? { display: "flex", justifyContent: "center", textAlign: "center" }
                          : undefined
                      }
                    >
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="metric-item">
                          <span className="metric-label">{m.label[lang]}</span>
                          <span className="metric-value">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 説明文のトグル開閉ボタン */}
                  <button
                    onClick={() => toggleDescription(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#0066cc",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      padding: "6px 0",
                      marginBottom: isOpen ? "12px" : "16px",
                      display: "block",
                      textAlign: "left",
                    }}
                  >
                    {isOpen ? uiText.toggleBtn.close[lang] : uiText.toggleBtn.open[lang]}
                  </button>

                  {/* 開いたときだけ表示される詳細説明文 */}
                  {isOpen && (
                    <div
                      className="card-description"
                      style={{
                        lineHeight: "1.7",
                        marginBottom: "16px",
                        padding: "12px 14px",
                        backgroundColor: "rgba(0, 102, 204, 0.04)",
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.description[lang]}
                    </div>
                  )}

                  {/* 常時表示される箇条書きリスト */}
                  <ul className="highlights-list" style={{ paddingLeft: "1.2rem" }}>
                    {item.highlights[lang].map((h, idx) => (
                      <li key={idx} style={{ marginBottom: "8px", lineHeight: "1.5" }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
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