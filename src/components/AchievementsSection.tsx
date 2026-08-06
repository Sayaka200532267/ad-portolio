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
      { label: { ja: "広告CTR", en: "Ad CTR" }, value: "3.0% → 4.9%" },
      { label: { ja: "改善率", en: "Growth Rate" }, value: "+63%" },
    ],
    description: {
      ja: (
        <>
          広告運用で成果を出すためには、単に管理画面の数値を追うだけではなく、事業目標やユーザーの行動を理解した上で改善の方向性を設計することが重要です。
          <br /><br />
          事業主様と直接連携し、ビジネス課題やマーケティング上のボトルネックを整理。ユーザーがなぜ反応するのか、どのような導線でコンバージョンに至るのかを分析し、クリエイティブ・訴求メッセージ・LP改善まで一貫して取り組みました。
          <br /><br />
          定例ミーティングを通じて仮説立案・検証・改善を継続し、感覚に頼らずデータをもとに意思決定できるマーケティング改善サイクルを実行しました。
        </>
      ),
      en: (
        <>
          Successful advertising requires more than monitoring platform metrics. It requires understanding business objectives, user behavior, and the factors that influence conversions to create effective improvement strategies.
          <br /><br />
          Working directly with business owners, I identify marketing challenges and bottlenecks while analyzing how users interact with campaigns and websites. Based on these insights, I optimize the entire customer journey, from creative direction and messaging to landing page improvements.
          <br /><br />
          Through regular discussions and continuous hypothesis testing, I establish a data-driven marketing improvement cycle that enables informed decision-making beyond intuition.
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
      { label: { ja: "計測精度", en: "Tracking Accuracy" }, value: "100%" },
      { label: { ja: "構築フェーズ", en: "Project Phase" }, value: "配信前" },
    ],
    description: {
      ja: (
        <>
          マーケティング改善を進めるためには、まずユーザーがサイト上でどのように行動しているのかを正しく把握できる環境が必要です。
          <br /><br />
          採用目標や事業課題から逆算し、必要なデータや指標を整理。GTM・GA4を活用した計測設計からLooker Studioによる可視化まで一貫して構築し、ユーザー行動を分析できるマーケティング基盤を整備しました。
          <br /><br />
          取得したデータを単なるレポートとして終わらせるのではなく、応募導線の改善や施策判断につながるインサイトへ変換し、継続的な改善につながる分析環境の構築をしました。
        </>
      ),
      en: (
        <>
          Effective marketing improvement starts with understanding how users behave on a website and identifying where opportunities for improvement exist.
          <br /><br />
          By working backward from recruitment goals and business objectives, I define the necessary metrics and user behaviors to track. I design measurement environments using GTM and GA4, and build Looker Studio dashboards to visualize data and support better decision-making.
          <br /><br />
          Rather than treating analytics as simple reporting, I transform user behavior data into actionable insights that improve application journeys and support continuous marketing optimization.
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
    metrics: [{ label: { ja: "正確性", en: "Accuracy" }, value: "100%" }],
    description: {
      ja: (
        <>
          広告施策の精度を高めるためには、正しく計測できるデータ基盤が不可欠です。
          <br /><br />
          広告代理店様のテクニカルパートナーとして、複雑化したGTM・GA4環境を精査し、既存の計測設計に潜む課題やデータ品質の問題を整理。タグ設計からトラッキング実装、計測環境の改善まで幅広く対応しました。
          <br /><br />
          広告媒体の最適化に必要なデータを正確に取得できる環境を整備し、マーケターが本来注力すべき戦略立案や改善活動に集中できるマーケティング基盤の作成を行いました。
        </>
      ),
      en: (
        <>
          Accurate measurement infrastructure is essential for improving advertising performance and making reliable marketing decisions.
          <br /><br />
          As a technical marketing partner for advertising agencies, I review and redesign complex GTM and GA4 environments, identifying issues within existing tracking setups and improving data quality. I support the full process from measurement design and tag implementation to tracking optimization.
          <br /><br />
          By building reliable data foundations required for advertising optimization, I enable marketing teams to focus on strategic planning and continuous improvement.
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
  const [openDescriptions, setOpenDescriptions] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (id: string) => {
    setOpenDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
      en: "Demonstrated success spanning direct client consulting, performance marketing strategy, and advanced tracking architecture.",
    },
    trustBadges: {
      rating: { ja: "クラウドソーシング評価", en: "Client Rating" },
      ctr: { ja: "Meta広告 CTR改善", en: "Meta Ads CTR Boost" },
      accuracy: { ja: "計測設定精度", en: "Tracking Precision" },
    },
    toggleBtn: {
      open: { ja: "▼ 課題と支援の背景（詳細を見る）", en: "▼ Show Background & Story" },
      close: { ja: "▲ 詳細を閉じる", en: "▲ Hide Background & Story" },
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
            const isOpen = !!openDescriptions[item.id];

            return (
              <div key={item.id} className="case-card">
                <div className="card-content">
                  <div className="card-top">
                    <span className="card-category">{item.category[lang]}</span>
                    {item.period && <span className="card-period">{item.period[lang]}</span>}
                  </div>

                  {/* タイトル（行間・余白を十分確保） */}
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
                          <span className="metric-value">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 【常時表示】箇条書きリスト（主な取り組み） */}
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

                  {/* 詳細開閉ボタン */}
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
                      marginBottom: "12px",
                      display: "block",
                      textAlign: "left",
                    }}
                  >
                    {isOpen ? uiText.toggleBtn.close[lang] : uiText.toggleBtn.open[lang]}
                  </button>

                  {/* 【クリック時のみ表示】ストーリー形式の説明文章 */}
                  {isOpen && (
                    <div
                      className="card-description"
                      style={{
                        lineHeight: "1.7",
                        marginBottom: "16px",
                        padding: "16px",
                        backgroundColor: "rgba(0, 102, 204, 0.04)",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {item.description[lang]}
                    </div>
                  )}
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