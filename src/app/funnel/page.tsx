'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import './funnel.css';

/* ---------- Data ---------- */

const testimonials = [
  {
    body: "Kwikflow neemt de telefoon op terwijl ik onder de grond zit. Eerst miste ik 2 of 3 klussen per dag, nu nul. De afspraken staan gewoon in mijn agenda als ik weer boven ben.",
    name: "Marco van D.",
    role: "Loodgieter",
  },
  {
    body: "We waren eerlijk gezegd al een paar keer genaaid door bureaus. Bij Kwikflow zat ik na 1 gesprek met Charles en het werkte gewoon. We zitten nu op 3 tot 5 nieuwe klussen per maand extra.",
    name: "Pieter de V.",
    role: "Installateur",
  },
  {
    body: "De WhatsApp broadcast voor het CV-onderhoud seizoen leverde me 11 boekingen op uit één bericht. Mijn pakket was er die maand 4x uit.",
    name: "Henk B.",
    role: "CV-monteur",
  },
  {
    body: "Dankzij de review automation sta ik nu eindelijk bovenaan in Google. Aanvragen zijn niet alleen meer geworden, het zijn ook serieuzere mensen.",
    name: "Jeroen S.",
    role: "Elektricien",
  },
  {
    body: "Wat ik het mooist vind: klanten merken niet eens dat het AI is. Ze worden vriendelijk geholpen, ik krijg alleen de boekingen door. Schoon werk.",
    name: "Tom J.",
    role: "Schilder",
  },
  {
    body: "Hiervoor kreeg ik amper aanvragen via mijn site. Nieuwe site, AI op WhatsApp, reviews op orde. Het verschil is niet subtiel, het is zwart-wit.",
    name: "Rico M.",
    role: "Stukadoor",
  },
];

const faqs: [string, string][] = [
  [
    "Hoe snel staat alles live?",
    "Binnen 7 werkdagen heeft u een werkende website, AI op uw kanalen, en de voice agent op uw nummer.",
  ],
  [
    "Wat als het niet werkt voor mijn bedrijf?",
    "30 dagen geld-terug garantie. U betaalt alleen als u tevreden bent en het oplevert wat we beloven.",
  ],
  [
    "Moet ik mijn huidige nummer opgeven?",
    "Nee. We koppelen de AI aan uw bestaande nummer zonder dat u iets hoeft te veranderen.",
  ],
  [
    "Klanten merken toch wel dat het AI is?",
    "In 95% van de gevallen niet. De AI praat als een gewone receptionist en geeft alleen door wat u nodig heeft.",
  ],
  [
    "Wat als ik al een website heb?",
    "Dan installeren we alleen het widget en houden we uw bestaande site. Of we bouwen een nieuwe als de huidige niet converteert.",
  ],
  [
    "Kan ik elk moment opzeggen?",
    "Ja. Maandelijks opzegbaar, geen lange contracten. Wij houden u liever vast door resultaat dan door een handtekening.",
  ],
];

/* ---------- Helpers ---------- */

function formatNL(n: number, decimals = 0) {
  return n.toLocaleString("nl-NL", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.1 8.6 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 8.9 8.6 12 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ---------- Reveal wrapper ---------- */

function Reveal({
  children,
  stagger = false,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const { ref, isVisible } = useIntersectionObserver({ once: true, margin: "0px 0px -60px 0px", threshold: 0.12 });
  const baseClass = stagger ? "reveal-stagger" : "reveal";
  const finalClass = `${baseClass}${isVisible ? " in" : ""}${className ? ` ${className}` : ""}`;
  // @ts-expect-error - dynamic tag
  return <Tag ref={ref} className={finalClass}>{children}</Tag>;
}

/* ---------- ROI Calculator ---------- */

const PRICE = 397;
const CONVERSION = 0.4;

function ROICalculator() {
  const [calls, setCalls] = useState(15);
  const [job, setJob] = useState(250);
  const [displayedLost, setDisplayedLost] = useState(0);
  const [displayedROI, setDisplayedROI] = useState(0);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  const { ref: cardRef, isVisible: inView } = useIntersectionObserver({ once: true, threshold: 0.4 });

  const targetLost = calls * job * CONVERSION;
  const targetROI = targetLost / PRICE;

  useEffect(() => {
    if (!inView) return;
    const fromLost = hasAnimatedIn ? displayedLost : 0;
    const fromROI = hasAnimatedIn ? displayedROI : 0;
    const duration = hasAnimatedIn ? 500 : 1000;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    let raf: number;
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const e = ease(t);
      setDisplayedLost(fromLost + (targetLost - fromLost) * e);
      setDisplayedROI(fromROI + (targetROI - fromROI) * e);
      if (t < 1) raf = requestAnimationFrame(frame);
      else setHasAnimatedIn(true);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calls, job, inView]);

  return (
    <div className={`roi-card reveal${inView ? " in" : ""}`} ref={cardRef as any} id="roi-card">
      <div className="roi-sliders">
        <div className="slider-group">
          <div className="slider-label">
            <span className="label-text">Hoeveel oproepen mist u per maand?</span>
            <span className="label-value">
              <span>{calls}</span> oproepen
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={50}
            value={calls}
            step={1}
            className="slider"
            onChange={(e) => setCalls(parseInt(e.target.value, 10))}
            aria-label="Gemiste oproepen per maand"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              color: "var(--muted)",
              marginTop: 2,
            }}
          >
            <span>5</span>
            <span>50</span>
          </div>
        </div>

        <div className="slider-group">
          <div className="slider-label">
            <span className="label-text">Wat is een gemiddelde klus waard?</span>
            <span className="label-value">
              €<span>{job}</span>
            </span>
          </div>
          <input
            type="range"
            min={100}
            max={500}
            value={job}
            step={10}
            className="slider"
            onChange={(e) => setJob(parseInt(e.target.value, 10))}
            aria-label="Gemiddelde klus waarde"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              color: "var(--muted)",
              marginTop: 2,
            }}
          >
            <span>€100</span>
            <span>€500</span>
          </div>
        </div>

        <div
          style={{
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.6,
            paddingTop: 8,
            borderTop: "1px solid var(--border)",
          }}
        >
          We rekenen met 40% conversie van teruggewonnen oproepen naar daadwerkelijke boekingen. In de praktijk ligt dat vaak hoger.
        </div>
      </div>

      <div className="roi-result">
        <div className="roi-row">
          <span className="roi-key">U laat momenteel liggen</span>
          <span className="roi-value lost">€{formatNL(Math.round(displayedLost))} p/m</span>
        </div>
        <div className="roi-divider" />
        <div className="roi-row">
          <span className="roi-key">Kwikflow kost</span>
          <span className="roi-value">€397 p/m</span>
        </div>
        <div className="roi-divider" />
        <div className="roi-row">
          <span className="roi-key">Dat is een ROI van</span>
          <span className="roi-value cyan">{formatNL(displayedROI, 1)}×</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- FAQ ---------- */

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const innerRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (open && innerRef.current) {
      setHeight(innerRef.current.scrollHeight + 22);
    } else {
      setHeight(0);
    }
  }, [open]);

  // Initialize default-open height after mount
  useEffect(() => {
    if (defaultOpen && innerRef.current) {
      setTimeout(() => {
        if (innerRef.current) setHeight(innerRef.current.scrollHeight + 22);
      }, 50);
    }
  }, [defaultOpen]);

  const toggle = () => setOpen((v) => !v);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <div
        className="faq-q"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <span>{q}</span>
        <svg
          className="faq-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
      <div
        className="faq-a-wrap"
        style={{
          height: `${height}px`,
          transition: "height 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <p className="faq-a" ref={innerRef}>
          {a}
        </p>
      </div>
    </div>
  );
}

/* ---------- Main Page ---------- */

export default function FunnelPage() {
  return (
    <>
      {/* 1. STICKY TOP RIBBON */}
      <div className="ribbon" role="region" aria-label="Garantie">
        <div className="ribbon-inner">
          <span className="ribbon-dot" aria-hidden="true" />
          <span>Geld-terug garantie. Werkt het niet, dan kost het u niks.</span>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container">
          <nav className="nav">
            <div className="nav-inner">
              <a href="#" className="wordmark" aria-label="Kwikflow home">
                <span>K</span>
                <span className="wordmark-dot" aria-hidden="true" />
                <span>wikflow</span>
              </a>
              <a href="#vsl" className="btn-secondary">
                Bekijk de video
              </a>
            </div>
          </nav>

          <div className="hero-content">
            <Reveal as="h1">
              Mis nooit meer een klus.
              <span className="cyan-line">Vanaf €97 per maand.</span>
            </Reveal>
            <Reveal as="p" className="hero-sub">
              AI neemt uw telefoon op, beantwoordt WhatsApp, en zorgt dat u in Google bovenaan komt. Terwijl u aan het werk bent.
            </Reveal>

            <Reveal className="hero-mockup">
              <div className="phone">
                <div className="phone-screen">
                  <div className="phone-statusbar">
                    <span>9:41</span>
                    <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M1 8h2V5H1v3zm4 0h2V3H5v5zm4 0h2V1H9v7z" fill="currentColor" />
                      </svg>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M7 1.5c2.2 0 4.2.9 5.7 2.4l-1.4 1.4A6 6 0 0 0 7 3.5a6 6 0 0 0-4.3 1.8L1.3 3.9A8 8 0 0 1 7 1.5zm0 3.5c1.1 0 2.1.4 2.9 1.2l-1.4 1.4A2 2 0 0 0 7 7c-.5 0-1 .2-1.4.6L4.1 6.2A4 4 0 0 1 7 5zm0 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                      </svg>
                      <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                        <rect x="0.5" y="1.5" width="18" height="7" rx="1.5" stroke="currentColor" opacity="0.5" />
                        <rect x="2" y="3" width="14" height="4" rx="0.5" fill="currentColor" />
                        <rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" opacity="0.5" />
                      </svg>
                    </span>
                  </div>

                  <div className="wa-header">
                    <div className="wa-avatar">JK</div>
                    <div>
                      <div className="wa-name">
                        Jan — Loodgieter
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" fill="#00C8E8" />
                          <path d="m8 12 3 3 5-6" stroke="#040812" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="wa-online">online · reageert direct</div>
                    </div>
                  </div>

                  <div className="wa-chat">
                    <div className="wa-bubble wa-in">
                      Goedemiddag, ik heb een lekkage onder de gootsteen. Kunt u langskomen?
                      <span className="wa-bubble-time">14:32</span>
                    </div>

                    <div className="wa-bubble wa-out">
                      Vervelend om te horen. Druipt het of staat er water?
                      <span className="wa-bubble-time">14:32 ✓✓</span>
                    </div>

                    <div className="wa-bubble wa-in">
                      Druipt nog, maar wel constant.
                      <span className="wa-bubble-time">14:33</span>
                    </div>

                    <div className="wa-bubble wa-out">
                      Ik kan Jan morgen tussen 9 en 11 langs sturen. Schikt dat?
                      <span className="wa-bubble-time">14:33 ✓✓</span>
                    </div>

                    <div className="wa-bubble wa-in">
                      Ja prima, doen we dat. Adres is Hoofdstraat 12.
                      <span className="wa-bubble-time">14:34</span>
                    </div>

                    <div className="wa-typing" aria-label="AI typt">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="hero-cta">
              <a href="#vsl" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7L8 5z" fill="currentColor" /></svg>
                Bekijk de video
              </a>
              <div className="proof-line">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                Al 30+ vakmannen gebruiken Kwikflow door heel Nederland
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. VSL */}
      <section className="section" id="vsl">
        <div className="container">
          <Reveal className="">
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="eyebrow">Stap 1</span>
              <h2 className="section-heading" style={{ textAlign: "center" }}>
                Bekijk deze video van 6 minuten en zie precies hoe wij u meer omzet bezorgen.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="vsl-wrap">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(0, 200, 232, 0.2)' }}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/zuVdRg_msCA?rel=0&modestbranding=1&showinfo=0"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Kwikflow VSL"
                />
              </div>
              <div className="vsl-meta">
                <span className="vsl-runtime">4:48</span>
                <span>Hoe Kwikflow werkt — uitgelegd door oprichter</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="trust-pills">
            <span className="trust-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Setup in 7 dagen
            </span>
            <span className="trust-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Geld-terug garantie
            </span>
            <span className="trust-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Geen lange contracten
            </span>
          </Reveal>
        </div>
      </section>

      {/* 4. WAT JE KRIJGT */}
      <section className="section" id="features">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Wat krijgt u</span>
            <h2 className="section-heading">Wat krijgt u precies?</h2>
            <p className="section-sub">
              Eén pakket. Drie systemen die samenwerken om aanvragen binnen te halen, op te volgen en in uw agenda te zetten.
            </p>
          </Reveal>

          <Reveal stagger className="feature-grid">
            <div className="card feature-card">
              <span className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="9" x2="15" y2="9" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </span>
              <h3>Een nieuwe website die converteert</h3>
              <p>Snel, mobielvriendelijk en gebouwd om bezoekers in klanten om te zetten. Inclusief Google reviews automation.</p>
            </div>

            <div className="card feature-card">
              <span className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <h3>AI op al uw kanalen</h3>
              <p>Website, Instagram, Facebook en WhatsApp. De AI voert echte gesprekken, kwalificeert de klus, en boekt direct in uw agenda.</p>
            </div>

            <div className="card feature-card">
              <span className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <h3>AI voice agent neemt de telefoon op</h3>
              <p>Aan het werk onder een wasbak? De AI neemt op, voert een normaal gesprek, en zet de afspraak in uw agenda. Geen gemiste klus meer.</p>
            </div>

            <div className="card feature-card-wide feature-card">
              <span className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
              <div>
                <h3>WhatsApp broadcasting voor seizoens­campagnes</h3>
                <p>Direct contact met uw klanten met gerichte berichten. Geen inbox meer vol oningelezen spam, alleen kwaliteits­contacten die u nodig hebt.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. ROI */}
      <section className="section" id="roi">
        <div className="container">
          <Reveal>
            <span className="eyebrow">ROI</span>
            <h2 className="section-heading">Reken het zelf uit.</h2>
            <p className="section-sub">Wij rekenen 1/5 van wat we u opleveren. Hier ziet u waarom dat een no-brainer is.</p>
          </Reveal>

          <ROICalculator />
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Wat ze zeggen</span>
            <h2 className="section-heading">Wat onze vakmannen zeggen.</h2>
            <p className="section-sub">Geen scripts, geen acteurs. Vakmannen die we elke maand spreken.</p>
          </Reveal>

          <Reveal stagger className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="card testimonial" key={i}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="testimonial-body">{t.body}</p>
                <div className="testimonial-author">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Prijzen</span>
            <h2 className="section-heading">Eenvoudige prijzen, geen verrassingen.</h2>
            <p className="section-sub">Maandelijks opzegbaar. Zonder lange contracten. Met geld-terug garantie.</p>
          </Reveal>

          <Reveal stagger className="pricing-grid">
            <div className="price-card">
              <span className="price-tier">Starter</span>
              <div className="price-amount">
                €97<span className="per">/maand</span>
              </div>
              <span className="price-name">Online aanwezigheid op orde</span>
              <ul className="price-list">
                <li><CheckIcon /> Nieuwe website (of widget op bestaande site)</li>
                <li><CheckIcon /> Google reviews automation</li>
                <li><CheckIcon /> Hosting + domein inbegrepen</li>
              </ul>
              <a href="#cta" className="price-cta">
                Kies Starter
              </a>
            </div>

            <div className="price-card featured">
              <span className="price-badge">Meest gekozen</span>
              <span className="price-tier">Groei</span>
              <div className="price-amount">
                €197<span className="per">/maand</span>
              </div>
              <span className="price-name">AI op alle kanalen</span>
              <ul className="price-list">
                <li><CheckIcon /> Alles uit Starter</li>
                <li><CheckIcon /> AI op uw website widget</li>
                <li><CheckIcon /> AI op Instagram, Facebook, WhatsApp</li>
                <li><CheckIcon /> Reageert binnen seconden, 24/7</li>
              </ul>
              <a href="#cta" className="price-cta">
                Kies Groei
              </a>
            </div>

            <div className="price-card">
              <span className="price-tier">Schaal</span>
              <div className="price-amount">
                €397<span className="per">/maand</span>
              </div>
              <span className="price-name">Voice agent + campagnes</span>
              <ul className="price-list">
                <li><CheckIcon /> Alles uit Groei</li>
                <li><CheckIcon /> AI voice agent neemt telefoon op</li>
                <li><CheckIcon /> WhatsApp broadcasts naar klantenlijst</li>
                <li><CheckIcon /> Seizoens-activatie campagnes</li>
              </ul>
              <a href="#cta" className="price-cta">
                Kies Schaal
              </a>
            </div>
          </Reveal>

          <Reveal as="p" className="pricing-foot">
            Alle pakketten inclusief 30 dagen geld-terug garantie. Geen lange contracten.
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-heading">Veelgestelde vragen.</h2>
          </Reveal>
          <Reveal className="faq-list">
            {faqs.map(([q, a], i) => (
              <FAQItem key={i} q={q} a={a} defaultOpen={i === 0} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section id="cta" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="eyebrow">Plan je gesprek</span>
            <h2 className="section-heading">Klaar om geen klus meer te missen?</h2>
            <p className="section-sub">Plan een gratis gesprek van 15 minuten. Geen verkoopverhaal, gewoon kijken of het past.</p>
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/kwikflow-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=040812&text_color=ffffff&primary_color=00c8e8"
            style={{ minWidth: '320px', height: '700px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0, 200, 232, 0.15)' }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#" className="wordmark" aria-label="Kwikflow home">
                <span>K</span>
                <span className="wordmark-dot" aria-hidden="true" />
                <span>wikflow</span>
              </a>
              <p className="footer-tag">AI voor vakmensen die geen tijd hebben voor onzin.</p>
            </div>
            <div>
              <div className="footer-heading">Snelle links</div>
              <ul className="footer-list">
                <li><a href="#vsl">Bekijk de video</a></li>
                <li><a href="#features">Wat u krijgt</a></li>
                <li><a href="#roi">ROI calculator</a></li>
                <li><a href="#pricing">Prijzen</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">Contact</div>
              <ul className="footer-list">
                <li><a href="tel:+31611223344">+31 (0)6 11 22 33 44</a></li>
                <li><a href="mailto:info@kwikflow.nl">info@kwikflow.nl</a></li>
                <li><span>Vragen? Bekijk de FAQ hieronder →</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Kwikflow.</span>
            <span>Geld-terug garantie. Geen lange contracten.</span>
          </div>
        </div>
      </footer>
    </>
  );
}