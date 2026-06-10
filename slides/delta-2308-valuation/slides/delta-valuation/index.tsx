import type { Page, SlideMeta, DesignSystem } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#0a0e14', text: '#e2e8f0', accent: '#60a5fa' },
  fonts: {
    display: '"Noto Sans TC", "PingFang TC", system-ui, sans-serif',
    body: '"Noto Sans TC", "PingFang TC", system-ui, sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 16,
};

const C = {
  bg: '#0a0e14',
  surface: '#131820',
  card: '#181f2a',
  border: '#252d3a',
  ink: '#e2e8f0',
  muted: '#7c8aa0',
  accent: '#60a5fa',
  green: '#34d399',
  red: '#f87171',
  gold: '#f59e0b',
  purple: '#a78bfa',
  orange: '#fb923c',
};

const pill = (text: string, color: string) => (
  <span style={{
    display: 'inline-block', padding: '6px 18px', borderRadius: 20,
    fontSize: 22, fontWeight: 600, fontFamily: 'system-ui',
    background: color + '20', color, border: `1px solid ${color}40`,
    marginRight: 12,
  }}>{text}</span>
);

const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: C.card, borderRadius: C.radius, border: `1px solid ${C.border}`,
    padding: '36px 44px', ...style,
  }}>{children}</div>
);

const Metric = ({ value, label, color }: { value: string; label: string; color?: string }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: 64, fontWeight: 900, color: color || C.accent, lineHeight: 1.1 }}>{value}</div>
    <div style={{ fontSize: 22, color: C.muted, marginTop: 8 }}>{label}</div>
  </div>
);

// ==================== PAGE 1: COVER ====================
const Cover: Page = () => (
  <div style={{
    width: '100%', height: '100%', background: C.bg,
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    padding: 120,
  }}>
    <div style={{ fontSize: 24, color: C.accent, fontWeight: 600, letterSpacing: 6, marginBottom: 32 }}>
      EQUITY RESEARCH · JUNE 2026
    </div>
    <div style={{ fontSize: 140, fontWeight: 900, color: C.ink, lineHeight: 1.1, textAlign: 'center' }}>
      台達電 2308.TW
    </div>
    <div style={{ fontSize: 56, color: C.muted, marginTop: 24, fontWeight: 300 }}>
      AI溢價與價值回歸的拉鋸
    </div>
    <div style={{ display: 'flex', gap: 24, marginTop: 64 }}>
      {pill('DCF 估值', C.accent)}
      {pill('競爭護城河', C.green)}
      {pill('成長引擎', C.gold)}
      {pill('風險分析', C.red)}
    </div>
  </div>
);

// ==================== PAGE 2: COMPANY OVERVIEW ====================
const CompanyOverview: Page = () => (
  <div style={{
    width: '100%', height: '100%', background: C.bg, padding: 120,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 80, fontWeight: 900, color: C.ink, marginBottom: 64 }}>公司概覽</div>

    <div style={{ display: 'flex', gap: 40, flex: 1 }}>
      <Card style={{ flex: 1 }}>
        <div style={{ fontSize: 28, color: C.muted, marginBottom: 32 }}>業務板塊</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[
            ['🔌 電源及零組件', '62%', C.accent],
            ['🏭 基礎設施', '25%', C.green],
            ['🤖 自動化', '13%', C.gold],
          ].map(([name, pct, color]) => (
            <div key={name as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 32, color: C.ink }}>{name}</span>
              <span style={{ fontSize: 32, fontWeight: 700, color }}>{pct}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ flex: 1 }}>
        <div style={{ fontSize: 28, color: C.muted, marginBottom: 32 }}>關鍵數字</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px 40px' }}>
          <Metric value="NT$5,549B" label="FY2025 營收" color={C.accent} />
          <Metric value="NT$5,974B" label="市值" color={C.gold} />
          <Metric value="NT$1,132B" label="淨現金" color={C.green} />
          <Metric value="NT$2,300" label="股價 (6/5)" />
        </div>
      </Card>
    </div>

    <div style={{ marginTop: 36, fontSize: 24, color: C.muted, lineHeight: 1.6 }}>
      台達電不只是「電源供應器公司」，而是全球電力電子方案的領導者。從雲端資料中心到電動車、
      從工廠自動化到綠能基礎設施，產品涵蓋能源轉換的每一個環節。
    </div>
  </div>
);

// ==================== PAGE 3: GROWTH DRIVERS ====================
const GrowthDrivers: Page = () => (
  <div style={{
    width: '100%', height: '100%', background: C.bg, padding: 120,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 80, fontWeight: 900, color: C.ink, marginBottom: 64 }}>成長引擎</div>

    <div style={{ display: 'flex', gap: 36, flex: 1 }}>
      {[
        {
          title: '🔌 AI 資料中心', color: C.accent,
          body: 'AI 伺服器電源需求爆發。台達電在資料中心電源市占率全球領先，US$2B → US$5-6B 營收目標。GPU 功耗每代翻倍，電源規格升級帶動 ASP 成長。',
        },
        {
          title: '🚗 電動車', color: C.green,
          body: '車載充電、DC-DC 轉換器、牽引逆變器。全球電動車滲透率仍低於 20%，長期成長空間明確。但近期車市放緩為短期逆風。',
        },
        {
          title: '⚡ 能源基礎設施', color: C.gold,
          body: '儲能系統、太陽能逆變器、電網級功率調節。全球電網現代化投資數兆美元級別，台達電的電力電子技術直接受惠。',
        },
      ].map((item) => (
        <Card key={item.title} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: item.color, marginBottom: 24 }}>{item.title}</div>
          <div style={{ fontSize: 28, color: C.ink, lineHeight: 1.7, flex: 1 }}>{item.body}</div>
          <div style={{ height: 4, background: item.color + '30', borderRadius: 2, marginTop: 24 }}>
            <div style={{ width: '60%', height: '100%', background: item.color, borderRadius: 2 }} />
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// ==================== PAGE 4: COMPETITIVE MOAT ====================
const CompetitiveMoat: Page = () => (
  <div style={{
    width: '100%', height: '100%', background: C.bg, padding: 120,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 80, fontWeight: 900, color: C.ink, marginBottom: 64 }}>競爭護城河</div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1 }}>
      {[
        { icon: '🏗️', title: '規模經濟', body: '全球 200+ 據點、8 萬員工、年營收 NT$5,500 億+。產能遍布中國、泰國、印度、美洲，客戶分散且多為一線品牌。', color: C.accent },
        { icon: '🔬', title: '技術壁壘', body: '電力電子是深度物理學。高效率電源轉換（>97.5%）需要數十年材料科學、熱管理、EMC 的積累。新進者難以複製。', color: C.green },
        { icon: '🔗', title: '客戶轉換成本', body: '資料中心/車用電源需與客戶系統深度整合，認證期 18-36 個月。一經採用，更換供應商風險極高。', color: C.gold },
        { icon: '🌐', title: 'ESG 先行者', body: 'RE100 成員、SBTi 認證。歐美客戶對供應鏈碳中和要求日益嚴格，台達電的綠能布局成競爭優勢。', color: C.purple },
      ].map((item) => (
        <Card key={item.title}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{item.icon}</div>
          <div style={{ fontSize: 36, fontWeight: 700, color: item.color, marginBottom: 16 }}>{item.title}</div>
          <div style={{ fontSize: 26, color: C.ink, lineHeight: 1.7 }}>{item.body}</div>
        </Card>
      ))}
    </div>
  </div>
);

// ==================== PAGE 5: DCF VALUATION ====================
const DCFValuation: Page = () => (
  <div style={{
    width: '100%', height: '100%', background: C.bg, padding: 120,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 80, fontWeight: 900, color: C.ink, marginBottom: 48 }}>DCF 估值</div>

    {/* Metrics row */}
    <div style={{ display: 'flex', gap: 40, marginBottom: 48 }}>
      <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 32px' }}>
        <div style={{ fontSize: 20, color: C.muted, marginBottom: 8 }}>保守估值</div>
        <div style={{ fontSize: 48, fontWeight: 900, color: C.red }}>NT$535</div>
        <div style={{ fontSize: 20, color: C.red + '80' }}>vs 市價 -77%</div>
      </Card>
      <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 32px' }}>
        <div style={{ fontSize: 20, color: C.muted, marginBottom: 8 }}>樂觀估值</div>
        <div style={{ fontSize: 48, fontWeight: 900, color: C.gold }}>NT$1,132</div>
        <div style={{ fontSize: 20, color: C.gold + '80' }}>vs 市價 -51%</div>
      </Card>
      <Card style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 32px' }}>
        <div style={{ fontSize: 20, color: C.muted, marginBottom: 8 }}>市價隱含</div>
        <div style={{ fontSize: 48, fontWeight: 900, color: C.accent }}>NT$2,300</div>
        <div style={{ fontSize: 20, color: C.accent + '80' }}>WACC 7% / g 3.5%</div>
      </Card>
    </div>

    {/* Parameters */}
    <div style={{ display: 'flex', gap: 40 }}>
      <Card style={{ flex: 1 }}>
        <div style={{ fontSize: 28, color: C.muted, marginBottom: 24 }}>保守假設</div>
        {[
          ['WACC', '10.7%'],
          ['終端成長率', '3.0%'],
          ['FY2025 FCF', 'NT$115.32'],
          ['CAGR (5Y)', '~15%'],
          ['終值佔比', '78%'],
        ].map(([k, v]) => (
          <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 26, color: C.muted }}>{k}</span>
            <span style={{ fontSize: 26, fontWeight: 600, color: C.ink }}>{v}</span>
          </div>
        ))}
      </Card>
      <Card style={{ flex: 1 }}>
        <div style={{ fontSize: 28, color: C.muted, marginBottom: 24 }}>市場定價需要什麼？</div>
        {[
          ['WACC', '~7.0%'],
          ['終端成長', '~3.5%'],
          ['CAGR (5Y)', '~28%'],
          ['OPM', '~22%'],
          ['淨現金', 'NT$1,132B'],
        ].map(([k, v]) => (
          <div key={k as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 26, color: C.muted }}>{k}</span>
            <span style={{ fontSize: 26, fontWeight: 600, color: C.gold }}>{v}</span>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

// ==================== PAGE 6: VERDICT ====================
const Verdict: Page = () => (
  <div style={{
    width: '100%', height: '100%', background: C.bg, padding: 120,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ fontSize: 80, fontWeight: 900, color: C.ink, marginBottom: 64 }}>結論</div>

    <div style={{ display: 'flex', gap: 48, flex: 1 }}>
      {/* Left: verdict */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <Card style={{ borderLeft: `6px solid ${C.red}`, padding: '40px 48px' }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: C.red, marginBottom: 20 }}>⚠️ 估值警示</div>
          <div style={{ fontSize: 30, color: C.ink, lineHeight: 1.7 }}>
            目前股價 NT$2,300 隱含了極度樂觀的成長假設。<br />
            DCF 保守估值僅 NT$535，樂觀估值 NT$1,132，<br />
            即使最樂觀情境仍有 51% 下行空間。
          </div>
        </Card>

        <Card style={{ borderLeft: `6px solid ${C.gold}`, padding: '40px 48px' }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: C.gold, marginBottom: 20 }}>🔑 核心問題</div>
          <div style={{ fontSize: 28, color: C.ink, lineHeight: 1.8 }}>
            市場是否過度高估了 AI 對台達電的獲利貢獻？<br />
            資料中心營收成長能否彌補其他業務的放緩？<br />
            高階電源 ASP 溢價是否可持續？
          </div>
        </Card>
      </div>

      {/* Right: strengths */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <Card style={{ borderLeft: `6px solid ${C.green}`, padding: '40px 48px' }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: C.green, marginBottom: 20 }}>✅ 不變的優勢</div>
          <div style={{ fontSize: 28, color: C.ink, lineHeight: 1.8 }}>
            ✓ 全球電力電子領導者<br />
            ✓ 深度護城河（規模+技術+客戶）<br />
            ✓ 淨現金 NT$1,132 億，財務極穩<br />
            ✓ AI/EV/儲能三引擎同時運轉
          </div>
        </Card>

        <Card style={{ borderLeft: `6px solid ${C.accent}`, padding: '40px 48px' }}>
          <div style={{ fontSize: 40, fontWeight: 900, color: C.accent, marginBottom: 20 }}>📋 投資建議</div>
          <div style={{ fontSize: 28, color: C.ink, lineHeight: 1.8 }}>
            長期基本面優異，但當前估值已透支數年成長。<br />
            等待回調至 NT$1,200-1,500 區間再建立部位，<br />
            或透過賣出價外 PUT 收取權利金等待。
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// ==================== EXPORT ====================
export const meta: SlideMeta = {
  title: '台達電 2308.TW — AI溢價與價值回歸',
  createdAt: '2026-06-10T08:07:05.882Z',
};

export default [Cover, CompanyOverview, GrowthDrivers, CompetitiveMoat, DCFValuation, Verdict] satisfies Page[];
