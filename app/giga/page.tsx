import type { Metadata } from 'next';
import './brochure.css';
import BrochureNav from './BrochureNav';

export const metadata: Metadata = {
  title: 'GIGA GLOBAL STUDIO — Company Brochure',
  description:
    '기가글로벌스튜디오는 지역의 이야기와 브랜드를 웹툰, 숏폼 애니메이션, 캐릭터 IP로 확장하는 AI 기반 콘텐츠 스튜디오입니다.',
};

export default function GigaBrochure() {
  return (
    <div className="brochure-root">
      <BrochureNav />

      {/* ===================== SLIDE 01 — COVER ===================== */}
      <section className="slide slide-cover" id="slide-1">
        <div className="slide-frame">
          <div className="cover-bg" aria-hidden />
          <header className="slide-topbar">
            <div className="brandmark">
              <span className="brand-dot" />
              GIGA GLOBAL STUDIO
            </div>
            <div className="slide-index mono">01 / 05</div>
          </header>

          <div className="cover-body">
            <div className="cover-eyebrow mono">COMPANY BROCHURE · 2026</div>
            <h1 className="cover-title">
              GIGA
              <br />
              GLOBAL
              <br />
              <span className="cover-title-accent">STUDIO</span>
            </h1>
            <div className="cover-subline">
              AI · Webtoon · Short-form Animation · Local IP Studio
            </div>
            <p className="cover-desc">
              우리는 지역의 이야기, 인물, 공간, 브랜드를
              <br />
              웹툰과 숏폼 애니메이션, AI 콘텐츠로 확장하는
              <br />
              크리에이티브 콘텐츠 스튜디오입니다.
            </p>
          </div>

          <footer className="slide-footer">
            <div>
              <div className="foot-label mono">STUDIO</div>
              <div className="foot-value">GIGA Global Studio Co., Ltd.</div>
            </div>
            <div>
              <div className="foot-label mono">NETWORK</div>
              <div className="foot-value">Suncheon · Seoul · Philippines</div>
            </div>
            <div>
              <div className="foot-label mono">TAGLINE</div>
              <div className="foot-value">Local Story to Global IP.</div>
            </div>
          </footer>
        </div>
      </section>

      {/* ===================== SLIDE 02 — WHO WE ARE ===================== */}
      <section className="slide" id="slide-2">
        <div className="slide-frame">
          <header className="slide-topbar">
            <div className="brandmark">
              <span className="brand-dot" />
              GIGA GLOBAL STUDIO
            </div>
            <div className="slide-index mono">02 / 05 · WHO WE ARE</div>
          </header>

          <div className="grid-2">
            <div>
              <div className="kicker mono">SECTION 01 · WHO WE ARE</div>
              <h2 className="h2">
                우리는 콘텐츠를 ‘제작’하는<br />
                회사를 넘어,
                <br />
                <span className="accent">IP를 ‘설계’하는 스튜디오</span>입니다.
              </h2>
              <p className="lede">
                기가글로벌스튜디오는 웹툰, 애니메이션, 숏폼 콘텐츠, 캐릭터 IP를 기반으로
                지역과 브랜드의 이야기를 대중이 소비할 수 있는 콘텐츠로 전환합니다.
              </p>
              <p className="lede">
                단순 홍보물이 아니라, 사람들이 보고, 공유하고, 기억하는 콘텐츠를 만듭니다.
              </p>

              <div className="pull-quote">
                “콘텐츠는 예쁘게 만드는 것보다
                <br />
                사람들이 기억하게 만드는 것이 중요합니다.”
              </div>
            </div>

            <div className="cap-grid">
              {[
                {
                  no: '01',
                  title: 'Webtoon Production',
                  ko: '웹툰 제작',
                  desc: '웹툰 기획, 콘티, 작화, 채색, 배경까지 전 공정 제작.',
                },
                {
                  no: '02',
                  title: 'Short-form Animation',
                  ko: '숏폼 애니메이션',
                  desc: '릴스 · 쇼츠 · 틱톡용 15–60초 숏폼 애니메이션 제작.',
                },
                {
                  no: '03',
                  title: 'Character IP',
                  ko: '캐릭터 IP 설계',
                  desc: '지역 · 브랜드 · 기관 캐릭터 기획과 세계관 설계.',
                },
                {
                  no: '04',
                  title: 'AI Creative System',
                  ko: 'AI 제작 시스템',
                  desc: 'AI 기반 이미지 · 영상 · 스토리 제작 자동화.',
                },
              ].map((c) => (
                <div className="cap-card" key={c.no}>
                  <div className="cap-no mono">{c.no}</div>
                  <div className="cap-title">{c.title}</div>
                  <div className="cap-ko">{c.ko}</div>
                  <div className="cap-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <footer className="slide-footer slide-footer-thin">
            <div className="foot-tag mono">GIGA GLOBAL STUDIO · COMPANY BROCHURE</div>
            <div className="foot-tag mono">02</div>
          </footer>
        </div>
      </section>

      {/* ===================== SLIDE 03 — WHAT WE CREATE ===================== */}
      <section className="slide" id="slide-3">
        <div className="slide-frame">
          <header className="slide-topbar">
            <div className="brandmark">
              <span className="brand-dot" />
              GIGA GLOBAL STUDIO
            </div>
            <div className="slide-index mono">03 / 05 · WHAT WE CREATE</div>
          </header>

          <div className="section-head">
            <div className="kicker mono">SECTION 02 · WHAT WE CREATE</div>
            <h2 className="h2">우리가 만드는 콘텐츠</h2>
            <p className="lede">
              하나의 이야기를 웹툰, 애니메이션, 캐릭터, 굿즈, 숏폼으로 확장합니다.
            </p>
          </div>

          <div className="cards-4">
            {[
              {
                tag: 'LOCAL IP',
                title: '지역 IP 콘텐츠',
                desc: '지역의 인물, 공간, 역사, 음식, 문화를 웹툰과 애니메이션 IP로 개발합니다.',
                ex: '서순식 · 천개의 시선 · 동남사진관',
              },
              {
                tag: 'SHORT ANIMATION',
                title: '숏폼 애니메이션',
                desc: '지자체 · 기관 · 브랜드 메시지를 MZ 세대가 소비할 수 있는 짧고 강한 영상으로 제작합니다.',
                ex: '15초 / 30초 / 60초 · 릴스 · 쇼츠 · 틱톡',
              },
              {
                tag: 'CHARACTER BRANDING',
                title: '브랜드 캐릭터 & 굿즈',
                desc: '브랜드 정체성을 캐릭터와 세계관으로 확장하고 굿즈 · 팝업 · SNS 콘텐츠로 연결합니다.',
                ex: 'FYF 러닝 브랜드 · 지역 캐릭터 · 교육청 캐릭터',
              },
              {
                tag: 'AI CONTENT SYSTEM',
                title: 'AI 콘텐츠 제작 시스템',
                desc: 'AI 이미지 · 영상 · 스토리보드 · 편집 자동화로 빠른 제작과 다양한 시안을 제공합니다.',
                ex: 'Image · Video · Storyboard · Edit Automation',
              },
            ].map((c) => (
              <div className="content-card" key={c.tag}>
                <div className="content-card-tag mono">{c.tag}</div>
                <div className="content-card-title">{c.title}</div>
                <p className="content-card-desc">{c.desc}</p>
                <div className="content-card-ex">
                  <span className="mono">EX.</span> {c.ex}
                </div>
              </div>
            ))}
          </div>

          <footer className="slide-footer slide-footer-thin">
            <div className="foot-tag mono">GIGA GLOBAL STUDIO · COMPANY BROCHURE</div>
            <div className="foot-tag mono">03</div>
          </footer>
        </div>
      </section>

      {/* ===================== SLIDE 04 — PORTFOLIO ===================== */}
      <section className="slide" id="slide-4">
        <div className="slide-frame">
          <header className="slide-topbar">
            <div className="brandmark">
              <span className="brand-dot" />
              GIGA GLOBAL STUDIO
            </div>
            <div className="slide-index mono">04 / 05 · PORTFOLIO</div>
          </header>

          <div className="section-head">
            <div className="kicker mono">SECTION 03 · PORTFOLIO</div>
            <h2 className="h2">대표 프로젝트 방향</h2>
            <p className="lede">
              지역 자산과 라이프스타일 브랜드를 콘텐츠 IP로 확장하는 네 가지 트랙.
            </p>
          </div>

          <div className="poster-grid">
            {[
              {
                no: '01',
                code: 'SEO·SUN·SIK',
                ko: '서순식',
                line: '순천의 맛과 공간을 탐험하는 로컬 음식 웹툰 IP',
                body: '순천의 맛집, 로컬 브랜드, 지역 산업을 캐릭터 중심의 웹툰과 숏폼 콘텐츠로 풀어내는 프로젝트입니다.',
                expand: '웹툰 → 숏폼 애니 → 맛집 협찬 → 관광 코스 → 굿즈',
              },
              {
                no: '02',
                code: '1000·VIEWS',
                ko: '천개의 시선',
                line: '시민과 도시가 함께 만드는 순천형 참여 콘텐츠',
                body: '순천의 사람, 장소, 이야기를 시민 참여형 콘텐츠로 확장하는 도시 브랜딩 프로젝트입니다.',
                expand: 'SNS 캠페인 → 시민 참여 영상 → 지역 캐릭터 → 방송 · 유튜브 송출',
              },
              {
                no: '03',
                code: 'DONG·NAM',
                ko: '동남사진관',
                line: '순천의 기억과 시간을 담은 감성 로컬 IP',
                body: '1970년대 순천의 공간과 이야기를 기반으로 한 타임리프 감성 웹툰/애니메이션 프로젝트입니다.',
                expand: '웹툰 → 단편 애니메이션 → 전시 → 지역 투어 콘텐츠',
              },
              {
                no: '04',
                code: 'FYF',
                ko: 'Find Your Flow',
                line: '러닝과 라이프스타일을 연결하는 브랜드 IP',
                body: '러닝 문화, 캐릭터, 굿즈, 오프라인 커뮤니티를 연결하는 콘텐츠 기반 라이프스타일 브랜드입니다.',
                expand: '러닝 컬처 → 캐릭터 IP → 굿즈 · 어패럴 → 커뮤니티 · 이벤트',
              },
            ].map((p) => (
              <div className="poster" key={p.no}>
                <div className="poster-top">
                  <div className="poster-no mono">PROJECT {p.no}</div>
                  <div className="poster-code mono">{p.code}</div>
                </div>
                <div className="poster-art" aria-hidden>
                  <div className="poster-art-glyph">{p.ko.slice(0, 1)}</div>
                  <div className="poster-art-rings" />
                </div>
                <div className="poster-meta">
                  <div className="poster-ko">{p.ko}</div>
                  <div className="poster-line">{p.line}</div>
                  <p className="poster-body">{p.body}</p>
                  <div className="poster-expand">
                    <span className="mono">EXPANSION.</span> {p.expand}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="slide-footer slide-footer-thin">
            <div className="foot-tag mono">GIGA GLOBAL STUDIO · COMPANY BROCHURE</div>
            <div className="foot-tag mono">04</div>
          </footer>
        </div>
      </section>

      {/* ===================== SLIDE 05 — WHY GIGA ===================== */}
      <section className="slide" id="slide-5">
        <div className="slide-frame">
          <header className="slide-topbar">
            <div className="brandmark">
              <span className="brand-dot" />
              GIGA GLOBAL STUDIO
            </div>
            <div className="slide-index mono">05 / 05 · WHY GIGA</div>
          </header>

          <div className="section-head">
            <div className="kicker mono">SECTION 04 · WHY GIGA</div>
            <h2 className="h2">왜 기가글로벌스튜디오인가</h2>
            <p className="lede">
              우리는 빠르게 만들고, 지역을 이해하며, 콘텐츠를 사업으로 확장하는 팀입니다.
            </p>
          </div>

          <div className="why-table">
            {[
              {
                no: '01',
                title: '지역 이해도',
                en: 'LOCAL INSIGHT',
                desc: '순천과 전남 지역 자산을 콘텐츠로 해석하는 능력.',
              },
              {
                no: '02',
                title: '제작 실행력',
                en: 'PRODUCTION POWER',
                desc: '웹툰 · 캐릭터 · 애니메이션 전 공정 제작 경험.',
              },
              {
                no: '03',
                title: 'AI 활용 능력',
                en: 'AI WORKFLOW',
                desc: '빠른 시안 제작과 숏폼 콘텐츠 제작 효율화.',
              },
              {
                no: '04',
                title: '글로벌 네트워크',
                en: 'GLOBAL NETWORK',
                desc: '한국 · 필리핀 제작 네트워크 활용.',
              },
              {
                no: '05',
                title: '사업 확장성',
                en: 'IP EXPANSION',
                desc: '콘텐츠를 굿즈 · 팝업 · 관광 · 브랜드 협업으로 확장.',
              },
            ].map((row) => (
              <div className="why-row" key={row.no}>
                <div className="why-no mono">{row.no}</div>
                <div className="why-title">
                  <div>{row.title}</div>
                  <div className="why-en mono">{row.en}</div>
                </div>
                <div className="why-desc">{row.desc}</div>
              </div>
            ))}
          </div>

          <div className="closing">
            <div className="closing-line mono">CLOSING</div>
            <div className="closing-headline">
              Local Story to <span className="accent">Global IP.</span>
            </div>
            <div className="closing-sub">지역의 이야기를, 세계가 보는 콘텐츠로.</div>
          </div>

          <footer className="slide-footer">
            <div>
              <div className="foot-label mono">CONTACT</div>
              <div className="foot-value">dvdp84@gmail.com</div>
            </div>
            <div>
              <div className="foot-label mono">STUDIO</div>
              <div className="foot-value">GIGA Global Studio Co., Ltd.</div>
            </div>
            <div>
              <div className="foot-label mono">NETWORK</div>
              <div className="foot-value">Suncheon · Seoul · Philippines</div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
