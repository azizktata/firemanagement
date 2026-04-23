"use client";

import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import MobileMenu from "@/components/ui/MobileMenu";
import Navbar from "@/components/ui/Navbar";
import References from "@/components/ui/References";
import Services from "@/components/ui/Services";
import Standards from "@/components/ui/Standards";
import TrustStrip from "@/components/ui/TrustStrip";
import WhyUs from "@/components/ui/WhyUs";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [svcIdx, setSvcIdx] = useState(0);
  const [clock, setClock] = useState("");
  const [step, setStep] = useState(0);
  const [selectedSvc, setSelectedSvc] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", scope: "", country: "" });
  const [submitted, setSubmitted] = useState(false);
  const [langActive, setLangActive] = useState("en");

  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      const hh = String(d.getUTCHours() + 1).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      setClock(`BE · BRUSSELS · ${hh}:${mm} CET`);
    };
    updateClock();
    const id = setInterval(updateClock, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handler = () => nav.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Navbar
        navRef={navRef}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        langActive={langActive}
        setLangActive={setLangActive}
      />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
      <Hero clock={clock} />
      <TrustStrip />
      <Services svcIdx={svcIdx} setSvcIdx={setSvcIdx} />
      <WhyUs />
      <References />
      <Standards />
      <Contact
        step={step}
        setStep={setStep}
        selectedSvc={selectedSvc}
        setSelectedSvc={setSelectedSvc}
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        setSubmitted={setSubmitted}
      />
      <Footer />
    </>
  );
}

// function ChevronIcon({ size = 12 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <path d="M1 5h8M5 1l4 4-4 4" />
//     </svg>
//   );
// }

// function ServiceSchema({ idx }: { idx: number }) {
//   if (idx === 1) return (
//     <svg className="schema" viewBox="0 0 600 380" fill="none" stroke="rgba(230,57,70,.55)" strokeWidth="1">
//       {/* main pipe horizontal */}
//       <path d="M60 190h480" stroke="rgba(230,57,70,.7)" strokeWidth="2" />
//       {/* branch verticals */}
//       <path d="M140 190v-80M220 190v-80M300 190v-80M380 190v-80M460 190v-80" stroke="rgba(255,255,255,.3)" />
//       <path d="M140 190v60M220 190v60M300 190v60M380 190v60M460 190v60" stroke="rgba(255,255,255,.2)" />
//       {/* sprinkler heads top */}
//       <circle cx="140" cy="110" r="6" stroke="rgba(230,57,70,.8)" /><line x1="134" y1="110" x2="146" y2="110" stroke="rgba(230,57,70,.9)" /><line x1="140" y1="104" x2="140" y2="116" stroke="rgba(230,57,70,.9)" />
//       <circle cx="220" cy="110" r="6" stroke="rgba(230,57,70,.8)" /><line x1="214" y1="110" x2="226" y2="110" stroke="rgba(230,57,70,.9)" /><line x1="220" y1="104" x2="220" y2="116" stroke="rgba(230,57,70,.9)" />
//       <circle cx="300" cy="110" r="6" stroke="rgba(230,57,70,.8)" /><line x1="294" y1="110" x2="306" y2="110" stroke="rgba(230,57,70,.9)" /><line x1="300" y1="104" x2="300" y2="116" stroke="rgba(230,57,70,.9)" />
//       <circle cx="380" cy="110" r="6" stroke="rgba(230,57,70,.8)" /><line x1="374" y1="110" x2="386" y2="110" stroke="rgba(230,57,70,.9)" /><line x1="380" y1="104" x2="380" y2="116" stroke="rgba(230,57,70,.9)" />
//       <circle cx="460" cy="110" r="6" stroke="rgba(230,57,70,.8)" /><line x1="454" y1="110" x2="466" y2="110" stroke="rgba(230,57,70,.9)" /><line x1="460" y1="104" x2="460" y2="116" stroke="rgba(230,57,70,.9)" />
//       {/* sprinkler heads bottom */}
//       <circle cx="140" cy="250" r="6" stroke="rgba(255,255,255,.4)" /><line x1="134" y1="250" x2="146" y2="250" stroke="rgba(255,255,255,.4)" /><line x1="140" y1="244" x2="140" y2="256" stroke="rgba(255,255,255,.4)" />
//       <circle cx="220" cy="250" r="6" stroke="rgba(255,255,255,.4)" /><line x1="214" y1="250" x2="226" y2="250" stroke="rgba(255,255,255,.4)" /><line x1="220" y1="244" x2="220" y2="256" stroke="rgba(255,255,255,.4)" />
//       <circle cx="300" cy="250" r="6" stroke="rgba(255,255,255,.4)" /><line x1="294" y1="250" x2="306" y2="250" stroke="rgba(255,255,255,.4)" /><line x1="300" y1="244" x2="300" y2="256" stroke="rgba(255,255,255,.4)" />
//       <circle cx="380" cy="250" r="6" stroke="rgba(255,255,255,.4)" /><line x1="374" y1="250" x2="386" y2="250" stroke="rgba(255,255,255,.4)" /><line x1="380" y1="244" x2="380" y2="256" stroke="rgba(255,255,255,.4)" />
//       <circle cx="460" cy="250" r="6" stroke="rgba(255,255,255,.4)" /><line x1="454" y1="250" x2="466" y2="250" stroke="rgba(255,255,255,.4)" /><line x1="460" y1="244" x2="460" y2="256" stroke="rgba(255,255,255,.4)" />
//       {/* alarm valve box */}
//       <rect x="68" y="170" width="36" height="40" stroke="rgba(230,57,70,.9)" />
//       <text x="70" y="188" fill="rgba(230,57,70,.9)" fontFamily="JetBrains Mono" fontSize="7">AV-01</text>
//       <text x="70" y="200" fill="rgba(230,57,70,.7)" fontFamily="JetBrains Mono" fontSize="6">WET</text>
//       {/* dimension lines */}
//       <text x="68" y="76" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">WN26 — LEVEL 04 SPRINKLER PLAN</text>
//       <text x="68" y="340" fill="rgba(255,255,255,.3)" fontFamily="JetBrains Mono" fontSize="8">SPACING: 3.0m × 3.0m · NFPA 13 / EN 12845</text>
//     </svg>
//   );
//   if (idx === 0) return (
//     <svg className="schema" viewBox="0 0 600 380" preserveAspectRatio="xMidYMid meet" fill="none" stroke="rgba(230,57,70,.55)" strokeWidth="1">
//       <rect x="60" y="60" width="480" height="260" stroke="rgba(255,255,255,.25)" />
//       <rect x="60" y="60" width="200" height="130" stroke="rgba(255,255,255,.15)" />
//       <rect x="260" y="60" width="280" height="130" stroke="rgba(255,255,255,.15)" />
//       <rect x="60" y="190" width="300" height="130" stroke="rgba(255,255,255,.15)" />
//       <rect x="360" y="190" width="180" height="130" stroke="rgba(255,255,255,.15)" />
//       <path d="M60 190h480M260 60v260M360 190v130" />
//       <text x="70" y="82" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">ZONE-A / GMP</text>
//       <text x="270" y="82" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">ZONE-B / CLEAN</text>
//       <text x="70" y="212" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">ZONE-C / STOR.</text>
//       <text x="370" y="212" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">ZONE-D / MECH.</text>
//       <circle cx="150" cy="120" r="3" /><circle cx="220" cy="120" r="3" /><circle cx="300" cy="120" r="3" /><circle cx="380" cy="120" r="3" /><circle cx="460" cy="120" r="3" />
//       <circle cx="150" cy="250" r="3" /><circle cx="250" cy="250" r="3" /><circle cx="320" cy="280" r="3" /><circle cx="420" cy="250" r="3" /><circle cx="490" cy="280" r="3" />
//     </svg>
//   );
//   if (idx === 2) return (
//     <svg className="schema" viewBox="0 0 600 380" fill="none" stroke="rgba(230,57,70,.55)" strokeWidth="1">
//       <rect x="80" y="60" width="440" height="260" stroke="rgba(255,255,255,.25)" />
//       <path d="M80 160h440M80 260h440M200 60v260M380 60v260" stroke="rgba(255,255,255,.15)" />
//       <circle cx="200" cy="110" r="18" stroke="rgba(230,57,70,.8)" /><text x="196" y="114" fill="rgba(230,57,70,.9)" fontFamily="JetBrains Mono" fontSize="9">✓</text>
//       <circle cx="380" cy="110" r="18" stroke="rgba(230,57,70,.8)" /><text x="376" y="114" fill="rgba(230,57,70,.9)" fontFamily="JetBrains Mono" fontSize="9">✓</text>
//       <circle cx="140" cy="210" r="14" stroke="rgba(255,255,255,.3)" />
//       <circle cx="290" cy="210" r="14" stroke="rgba(255,255,255,.3)" />
//       <circle cx="440" cy="210" r="14" stroke="rgba(255,255,255,.3)" />
//       <text x="68" y="82" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">AUDIT SCOPE — NBN / FM GLOBAL</text>
//       <path d="M200 128v32M380 128v32" stroke="rgba(230,57,70,.4)" strokeDasharray="4 3" />
//     </svg>
//   );
//   if (idx === 3) return (
//     <svg className="schema" viewBox="0 0 600 380" fill="none" stroke="rgba(230,57,70,.55)" strokeWidth="1">
//       <rect x="60" y="80" width="480" height="200" stroke="rgba(255,255,255,.2)" />
//       <path d="M300 80v200" stroke="rgba(255,255,255,.12)" />
//       <path d="M60 180h480" stroke="rgba(255,255,255,.12)" />
//       <rect x="80" y="100" width="80" height="60" stroke="rgba(230,57,70,.6)" />
//       <rect x="200" y="100" width="80" height="60" stroke="rgba(255,255,255,.3)" />
//       <rect x="340" y="100" width="80" height="60" stroke="rgba(255,255,255,.3)" />
//       <rect x="460" y="100" width="60" height="60" stroke="rgba(255,255,255,.3)" />
//       <path d="M120 160v40M240 160v40M380 160v40M490 160v40M80 200h460" stroke="rgba(230,57,70,.4)" strokeDasharray="4 3" />
//       <text x="70" y="76" fill="rgba(255,255,255,.5)" fontFamily="JetBrains Mono" fontSize="9">COMMISSIONING FLOW — ZUTENDAAL ABS</text>
//     </svg>
//   );
//   return null;
// }

// export default function Home() {
//   const navRef = useRef<HTMLElement>(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [svcIdx, setSvcIdx] = useState(0);
//   const [clock, setClock] = useState("");
//   const [step, setStep] = useState(0);
//   const [selectedSvc, setSelectedSvc] = useState<number | null>(null);
//   const [formData, setFormData] = useState({ name: "", email: "", company: "", scope: "", country: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const [langActive, setLangActive] = useState("en");

//   useEffect(() => {
//     const updateClock = () => {
//       const d = new Date();
//       const hh = String(d.getUTCHours() + 1).padStart(2, "0");
//       const mm = String(d.getUTCMinutes()).padStart(2, "0");
//       setClock(`BE · BRUSSELS · ${hh}:${mm} CET`);
//     };
//     updateClock();
//     const id = setInterval(updateClock, 30000);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     const nav = navRef.current;
//     if (!nav) return;
//     const handler = () => nav.classList.toggle("scrolled", window.scrollY > 40);
//     window.addEventListener("scroll", handler, { passive: true });
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (step < 2) { setStep(s => s + 1); return; }
//     setSubmitted(true);
//   };

//   const svc = SERVICES[svcIdx];

//   return (
//     <>
//       {/* ===== NAV ===== */}
//       <nav className="nav" ref={navRef} id="nav">
//         <a href="#" className="brand">
//           <span className="brand-mark">
//             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//               <path d="M12 2v20M2 12h20M4 4l16 16M20 4L4 20" opacity=".35" />
//               <circle cx="12" cy="12" r="5.5" />
//               <circle cx="12" cy="12" r="1.8" fill="#E63946" stroke="none" />
//             </svg>
//           </span>
//           <span>Fire Management</span>
//         </a>
//         <div className="nav-links">
//           <a href="#services">Services</a>
//           <a href="#why">Approach</a>
//           <a href="#references">References</a>
//           <a href="#standards">Compliance</a>
//           <a href="#contact">Contact</a>
//         </div>
//         <div className="nav-right">
//           <div className="lang-switch">
//             {["en", "fr", "nl"].map(l => (
//               <button key={l} className={langActive === l ? "on" : ""} onClick={() => setLangActive(l)}>
//                 {l.toUpperCase()}
//               </button>
//             ))}
//           </div>
//           <a href="#contact" className="cta">
//             Request audit&nbsp;<ArrowIcon />
//           </a>
//           <button className="hamb" aria-label="Menu" onClick={() => setMenuOpen(true)}>
//             <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5">
//               <path d="M0 1h14M0 5h14M0 9h14" />
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* ===== MOBILE MENU ===== */}
//       <div className={`mob-menu${menuOpen ? " on" : ""}`} id="mobmenu">
//         <a href="#services" onClick={closeMenu}>Services</a>
//         <a href="#why" onClick={closeMenu}>Approach</a>
//         <a href="#references" onClick={closeMenu}>References</a>
//         <a href="#standards" onClick={closeMenu}>Compliance</a>
//         <a href="#contact" className="mob-cta" onClick={closeMenu}>Request audit →</a>
//       </div>

//       {/* ===== HERO ===== */}
//       <section className="hero" id="top">
//         <div className="hero-bg">
//           <div className="hero-img" />
//           <div className="hero-blueprint" />
//         </div>
//         <div className="hero-corner tl">
//           <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M0 6V0h6" /></svg>
//         </div>
//         <div className="hero-corner tr">
//           <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M12 0h6v6" /></svg>
//         </div>
//         <div className="hero-corner bl">
//           <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M0 12v6h6" /></svg>
//         </div>
//         <div className="hero-corner br">
//           <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M12 18h6v-6" /></svg>
//         </div>

//         <div className="hero-meta">
//           <span><b>FM/</b>001 · FIRE SAFETY ENGINEERING</span>
//           <span id="clock">{clock}</span>
//           <span>SINCE 2018 · SRL 0712.884.901</span>
//         </div>

//         <div className="hero-inner" style={{ paddingTop: "80px" }}>
//           <span className="hero-badge">
//             <span className="live" />
//             Accepting projects — Q2 / Q3 2026
//           </span>
//           <h1>
//             <span className="line"><span>Fire safety,</span></span>
//             <span className="line"><span><span className="outline">engineered</span></span></span>
//             <span className="line"><span>with <span className="red">precision.</span></span></span>
//           </h1>
//           <div className="hero-row">
//             <p className="hero-sub">
//               We design, inspect and commission sprinkler & fire suppression systems for{" "}
//               <span className="k">pharma, aerospace and heavy industry</span> — across Belgium, Germany and France.
//             </p>
//             <div className="cta-row">
//               <a href="#contact" className="btn btn-primary">
//                 Request a free audit&nbsp;<ArrowIcon size={12} />
//               </a>
//               <a href="#references" className="btn btn-ghost">
//                 View references&nbsp;<ChevronIcon />
//               </a>
//             </div>
//           </div>
//           <div className="hero-stats">
//             <div className="s">
//               <div className="v">99<em>%</em></div>
//               <div className="l">Sprinkler success rate<br />— 100+ years field data</div>
//             </div>
//             <div className="s">
//               <div className="v">2 000<em>+</em></div>
//               <div className="l">Sprinkler heads designed<br />— GSK RX395 alone</div>
//             </div>
//             <div className="s">
//               <div className="v">4</div>
//               <div className="l">Countries with<br />approved projects</div>
//             </div>
//             <div className="s">
//               <div className="v">32</div>
//               <div className="l">Certifications & tools<br />across the team</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== TRUST MARQUEE ===== */}
//       <section className="trust" style={{ padding: "36px 0" }}>
//         <div className="trust-head">Trusted on critical-risk projects by</div>
//         <div className="marquee">
//           <div className="marquee-track">
//             {[...CLIENTS, ...CLIENTS].map((c, i) => (
//               <div className="logo-chip" key={i}>
//                 {(c.includes("Saffre") || c.includes("Fire Concept") || c.includes("Wayss"))
//                   ? <span className="serif">{c}</span>
//                   : <span>{c.toUpperCase()}</span>
//                 }
//                 <span className="sep">✦</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== SERVICES ===== */}
//       <section id="services" style={{ padding: "110px 40px" }}>
//         <div className="wrap">
//           <div className="section-head">
//             <div>
//               <div className="eyebrow"><span className="dot" /><span className="kicker">02 — Capabilities</span></div>
//               <h2>Four disciplines.<br /><em>One standard</em> of work.</h2>
//             </div>
//             <p>From first feasibility to final sign-off — we cover the full lifecycle of fire suppression engineering.</p>
//           </div>
//           <div className="svc-grid">
//             <div className="svc-tabs">
//               {SERVICES.map((s, i) => (
//                 <button key={i} className={`svc-tab${svcIdx === i ? " active" : ""}`} onClick={() => setSvcIdx(i)}>
//                   <span className="n">{s.n}</span>
//                   <span className="t">{s.k}</span>
//                 </button>
//               ))}
//             </div>
//             <div className="svc-panel">
//               <div className="svc-copy">
//                 <h3>{svc.title}</h3>
//                 <p>{svc.desc}</p>
//                 <ul>
//                   {svc.bullets.map((b, i) => <li key={i}>{b}</li>)}
//                 </ul>
//               </div>
//               <div className="svc-visual">
//                 <div className="head">
//                   <span>FM / {svc.n} · {svc.k.toUpperCase()}</span>
//                   <span className="dots"><i /><i /><i /></span>
//                 </div>
//                 <div className="stage">
//                   <ServiceSchema idx={svcIdx} />
//                 </div>
//                 <div className="foot">
//                   <span>{svc.file}</span>
//                   <span>SHEET 001 / 001</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== WHY US ===== */}
//       <section id="why" style={{ padding: "110px 40px" }}>
//         <div className="wrap why-grid">
//           <div className="why-left">
//             <div className="eyebrow"><span className="dot" /><span className="kicker">03 — Why Fire Management</span></div>
//             <h2>European presence.<br /><em>Engineering</em> output.<br />A sharper price.</h2>
//             <p>
//               Our hybrid model — senior engineers on the ground in Belgium, a deep delivery team in Tunis — means you get EN/NBN-fluent specialists walking your site, backed by 2x-certified Revit and SprinkCAD designers working at a cost that Western Europe alone cannot match.
//             </p>
//             <p style={{ marginTop: "16px", color: "var(--fg-mute)", fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: ".08em" }}>
//               → Same codes. Same senior review. Roughly <span style={{ color: "var(--fg)" }}>30–40% lower</span> fee structure.
//             </p>
//           </div>
//           <div className="why-metrics">
//             <div className="metric">
//               <div className="top"><span>01 / Reliability</span><span>Field data</span></div>
//               <div>
//                 <div className="v">99<em>%</em></div>
//                 <div className="l" style={{ marginTop: "14px" }}>Worldwide sprinkler activation success — a century of proven reliability we design to, not around.</div>
//               </div>
//             </div>
//             <div className="metric">
//               <div className="top"><span>02 / Throughput</span><span>RX395</span></div>
//               <div>
//                 <div className="v">2<em>k</em><span className="u">+</span></div>
//                 <div className="l" style={{ marginTop: "14px" }}>Sprinkler heads fully designed, calculated and coordinated in a single GSK pharmaceutical campus.</div>
//               </div>
//             </div>
//             <div className="metric">
//               <div className="top"><span>03 / Scale</span><span>Zutendaal</span></div>
//               <div>
//                 <div className="v">5<span className="u">km</span></div>
//                 <div className="l" style={{ marginTop: "14px" }}>Underground piping specified, followed on-site and commissioned for the Belgian Air Force.</div>
//               </div>
//             </div>
//             <div className="metric">
//               <div className="top"><span>04 / Reach</span><span>EU</span></div>
//               <div>
//                 <div className="v">BE <span className="u">·</span> DE <span className="u">·</span> FR</div>
//                 <div className="l" style={{ marginTop: "14px" }}>Approved and active in three markets — expanding to Luxembourg and the Netherlands in 2026.</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== REFERENCES ===== */}
//       <section id="references" style={{ padding: "110px 40px" }}>
//         <div className="wrap">
//           <div className="section-head">
//             <div>
//               <div className="eyebrow"><span className="dot" /><span className="kicker">04 — Selected Projects</span></div>
//               <h2>Project <em>portfolio</em></h2>
//             </div>
//             <p>Pharmaceutical GMP zones, military installations, high-value logistics. A sample of the work — full dossier on request.</p>
//           </div>

//           {/* Project visual cards — schematic style */}
//           <div className="project-showcase">
//             {/* Card 1 — GSK RX395 floor plan */}
//             <div className="project-card">
//               <div className="head"><span>FM / 01 · GSK RX395</span><span className="dots"><i /><i /><i /></span></div>
//               <div className="stage" style={{ flex: 1, position: "relative", minHeight: "280px" }}>
//                 <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 560 320" fill="none" stroke="rgba(230,57,70,.55)" strokeWidth="1">
//                   <rect x="40" y="40" width="480" height="240" stroke="rgba(255,255,255,.22)" />
//                   <rect x="40" y="40" width="180" height="120" stroke="rgba(255,255,255,.13)" />
//                   <rect x="220" y="40" width="300" height="120" stroke="rgba(255,255,255,.13)" />
//                   <rect x="40" y="160" width="280" height="120" stroke="rgba(255,255,255,.13)" />
//                   <rect x="320" y="160" width="200" height="120" stroke="rgba(255,255,255,.13)" />
//                   <path d="M40 160h480M220 40v240M320 160v120" />
//                   <text x="50" y="58" fill="rgba(255,255,255,.45)" fontFamily="JetBrains Mono" fontSize="8">ZONE-A / GMP PRODUCTION</text>
//                   <text x="228" y="58" fill="rgba(255,255,255,.45)" fontFamily="JetBrains Mono" fontSize="8">ZONE-B / CLEAN ROOM</text>
//                   <text x="50" y="178" fill="rgba(255,255,255,.45)" fontFamily="JetBrains Mono" fontSize="8">ZONE-C / STORAGE</text>
//                   <text x="328" y="178" fill="rgba(255,255,255,.45)" fontFamily="JetBrains Mono" fontSize="8">ZONE-D / MECH.</text>
//                   {[130,175,250,310,370,430,470].map((cx,i) => <circle key={i} cx={cx} cy={98} r="3" />)}
//                   {[90,150,200,270,350,410,470].map((cx,i) => <circle key={i} cx={cx} cy={220} r="3" />)}
//                   <rect x="48" y="140" width="28" height="32" stroke="rgba(230,57,70,.85)" />
//                   <text x="50" y="154" fill="rgba(230,57,70,.85)" fontFamily="JetBrains Mono" fontSize="6">AV-01</text>
//                   <text x="50" y="164" fill="rgba(230,57,70,.65)" fontFamily="JetBrains Mono" fontSize="6">PRE-ACT</text>
//                   <rect x="86" y="140" width="28" height="32" stroke="rgba(230,57,70,.85)" />
//                   <text x="88" y="154" fill="rgba(230,57,70,.85)" fontFamily="JetBrains Mono" fontSize="6">AV-02</text>
//                   <text x="88" y="164" fill="rgba(230,57,70,.65)" fontFamily="JetBrains Mono" fontSize="6">WET</text>
//                   <text x="40" y="295" fill="rgba(255,255,255,.3)" fontFamily="JetBrains Mono" fontSize="7">11 ALARM VALVES · 2,000+ HEADS · NFPA 13</text>
//                 </svg>
//               </div>
//               <div className="project-card-overlay" style={{ position: "relative", zIndex: 2, padding: "20px 20px 0" }}>
//                 <div className="project-card-tag">Pharma / GMP · 2024</div>
//                 <div className="project-card-title">GSK <em>RX395</em> — Fire Sprinkler System</div>
//                 <div className="project-card-desc">2,000+ heads across 11 alarm valve systems — wet and pre-action double interlock.</div>
//               </div>
//               <div className="foot"><span>RX395_LEVEL03_SPRK_R11.dwg</span><span>SHEET 003 / 011</span></div>
//             </div>

//             {/* Card 2 — Zutendaal site plan */}
//             <div className="project-card">
//               <div className="head"><span>FM / 03 · ZUTENDAAL AIR BASE</span><span className="dots"><i /><i /><i /></span></div>
//               <div className="stage" style={{ flex: 1, position: "relative", minHeight: "280px" }}>
//                 <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 560 320" fill="none" stroke="rgba(230,57,70,.55)" strokeWidth="1">
//                   {/* Pump house */}
//                   <rect x="40" y="50" width="80" height="60" stroke="rgba(230,57,70,.8)" />
//                   <text x="48" y="76" fill="rgba(230,57,70,.9)" fontFamily="JetBrains Mono" fontSize="7">PUMP HSE</text>
//                   <text x="48" y="88" fill="rgba(230,57,70,.65)" fontFamily="JetBrains Mono" fontSize="6">NEW BUILD</text>
//                   {/* Water tanks */}
//                   <circle cx="170" cy="80" r="22" stroke="rgba(230,57,70,.6)" />
//                   <circle cx="170" cy="80" r="14" stroke="rgba(230,57,70,.3)" />
//                   <text x="152" y="84" fill="rgba(230,57,70,.8)" fontFamily="JetBrains Mono" fontSize="6">TANK</text>
//                   {/* Underground pipe — dashed */}
//                   <path d="M120 80h30M192 80h348" stroke="rgba(230,57,70,.5)" strokeDasharray="6 3" strokeWidth="2" />
//                   <text x="220" y="68" fill="rgba(255,255,255,.4)" fontFamily="JetBrains Mono" fontSize="7">5 KM UNDERGROUND PIPING</text>
//                   {/* Warehouses grid */}
//                   {[0,1,2,3,4,5,6,7,8].map(i => (
//                     <rect key={i} x={220 + (i % 3) * 112} y={110 + Math.floor(i / 3) * 64} width="96" height="50" stroke="rgba(255,255,255,.18)" />
//                   ))}
//                   <text x="220" y="104" fill="rgba(255,255,255,.4)" fontFamily="JetBrains Mono" fontSize="7">17 WAREHOUSES</text>
//                   {/* Office + medical */}
//                   <rect x="40" y="160" width="100" height="44" stroke="rgba(255,255,255,.22)" />
//                   <text x="48" y="180" fill="rgba(255,255,255,.4)" fontFamily="JetBrains Mono" fontSize="7">OFFICE BLDG</text>
//                   <rect x="40" y="214" width="100" height="44" stroke="rgba(255,255,255,.22)" />
//                   <text x="48" y="234" fill="rgba(255,255,255,.4)" fontFamily="JetBrains Mono" fontSize="7">MED. STORAGE</text>
//                   <text x="40" y="295" fill="rgba(255,255,255,.3)" fontFamily="JetBrains Mono" fontSize="7">BELGIAN AIR FORCE · APS FIRE SUPPRESSION · COMMISSIONING</text>
//                 </svg>
//               </div>
//               <div className="project-card-overlay" style={{ position: "relative", zIndex: 2, padding: "20px 20px 0" }}>
//                 <div className="project-card-tag">Defence / Base · 2023</div>
//                 <div className="project-card-title">Belgian Air Force — <em>Zutendaal</em></div>
//                 <div className="project-card-desc">5 km underground piping, 17 warehouses, new pump house. Full commissioning and sign-off.</div>
//               </div>
//               <div className="foot"><span>ZUTENDAAL_SITE_PLAN_R4.dwg</span><span>SHEET 001 / 006</span></div>
//             </div>
//           </div>

//           {/* Project list */}
//           <div className="ref-list" style={{ marginTop: "56px" }}>
//             {REFS.map((r, i) => (
//               <div className="ref-row" key={i}>
//                 <span className="num">{r.n}</span>
//                 <span className="title">{r.t}</span>
//                 <span className="desc">{r.d}</span>
//                 <span className="tag">{r.tag}</span>
//                 <span className="yr">{r.y}</span>
//                 <span className="arrow"><ArrowIcon /></span>
//               </div>
//             ))}
//           </div>

//           {/* Client logos */}
//           <div className="clients">
//             <div className="clients-head">
//               <span>Clients & partners — selection</span>
//               <span>12 / 40+</span>
//             </div>
//             <div className="clients-grid">
//               {CLIENTS.map((c, i) => (
//                 <div className="client" key={i}>
//                   {(c.includes("Saffre") || c.includes("Fire Concept") || c.includes("Wayss") || c.includes("TPF") || c.includes("Belgian"))
//                     ? <em>{c}</em>
//                     : c
//                   }
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== STANDARDS ===== */}
//       <section id="standards" style={{ padding: "110px 40px" }}>
//         <div className="wrap">
//           <div className="section-head">
//             <div>
//               <div className="eyebrow"><span className="dot" /><span className="kicker">05 — Codes & Compliance</span></div>
//               <h2>Designed to the codes<br />that get <em>signed off.</em></h2>
//             </div>
//             <p>Our deliverables are prepared against the specific standard your authority having jurisdiction uses — not a generic template.</p>
//           </div>
//           <div className="std-grid">
//             {STANDARDS.map((s, i) => (
//               <div className="std" key={i}>
//                 <div className="code">{s.c}</div>
//                 <div>
//                   <div className="name">{s.n}</div>
//                   <div className="desc">{s.d}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="tools-row">
//             <span className="lab">Tools in production</span>
//             {["AutoCAD", "Revit ×2 cert.", "SprinkCAD", "AutoSprink RVT", "Navisworks", "BIM 360", "ACC", "Dalux", "Newforma", "Fieldwire"].map((t, i) => (
//               <span className="tool-pill" key={i}>{t}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CONTACT ===== */}
//       <section id="contact" style={{ padding: "110px 40px", paddingBottom: "80px" }}>
//         <div className="wrap contact-grid">
//           <div className="contact-left">
//             <div className="eyebrow"><span className="dot" /><span className="kicker">06 — Start a project</span></div>
//             <h2>Tell us what you&apos;re <em>protecting.</em></h2>
//             <p>Three quick questions. You&apos;ll hear back from a senior engineer — not a form robot — within one business day.</p>
//             <div className="contact-info">
//               <div className="contact-item">
//                 <span className="lab">Belgium — HQ</span>
//                 <div className="v">
//                   Avenue Louise 480, 1050 Brussels
//                   <small>+32 2 588 14 72 · be@firemanagement.be</small>
//                 </div>
//               </div>
//               <div className="contact-item">
//                 <span className="lab">Tunis — Engineering</span>
//                 <div className="v">
//                   Lac 2, Tunis 1053
//                   <small>+216 71 961 208 · eng@firemanagement.be</small>
//                 </div>
//               </div>
//               <div className="contact-item">
//                 <span className="lab">Response</span>
//                 <div className="v">
//                   &lt; 1 business day
//                   <small>Senior engineer reply — no gatekeeping</small>
//                 </div>
//               </div>
//               <div className="contact-item">
//                 <span className="lab">NDA</span>
//                 <div className="v">
//                   Available on request
//                   <small>Standard mutual NDA provided same-day</small>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="form">
//             <div className="form-inner">
//               {submitted ? (
//                 <div className="success">
//                   <div className="tick">
//                     <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="#E63946" strokeWidth="1.5">
//                       <path d="M1 8l6 6L21 1" />
//                     </svg>
//                   </div>
//                   <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
//                     Message received — expect a reply within one business day.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-head">
//                     <div className="title">
//                       {step === 0 && "Step 1 / 3 · Project type"}
//                       {step === 1 && "Step 2 / 3 · Your details"}
//                       {step === 2 && "Step 3 / 3 · Location & scope"}
//                     </div>
//                     <div className="steps">
//                       <span className={`dot${step >= 0 ? " on" : ""}`} />
//                       <span className={`dot${step >= 1 ? " on" : ""}`} />
//                       <span className={`dot${step >= 2 ? " on" : ""}`} />
//                     </div>
//                   </div>

//                   {step === 0 && (
//                     <>
//                       <div className="field"><label>What do you need?</label></div>
//                       <div className="choice-grid">
//                         {FORM_SERVICES.map((s, i) => (
//                           <div
//                             key={i}
//                             className={`choice${selectedSvc === i ? " on" : ""}`}
//                             onClick={() => setSelectedSvc(i)}
//                           >
//                             <div className="cs">{s.sub}</div>
//                             <div className="ct">{s.label}</div>
//                           </div>
//                         ))}
//                       </div>
//                       <div className="field" style={{ marginTop: "22px" }}>
//                         <label>Brief scope (optional)</label>
//                         <textarea
//                           placeholder="e.g. 18,000 m² warehouse, FM Global, retrofit"
//                           value={formData.scope}
//                           onChange={e => setFormData(d => ({ ...d, scope: e.target.value }))}
//                         />
//                       </div>
//                     </>
//                   )}

//                   {step === 1 && (
//                     <>
//                       <div className="field">
//                         <label>Full name</label>
//                         <input required type="text" placeholder="Jan Martens" value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} />
//                       </div>
//                       <div className="field">
//                         <label>Work email</label>
//                         <input required type="email" placeholder="jan@company.be" value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} />
//                       </div>
//                       <div className="field">
//                         <label>Company</label>
//                         <input type="text" placeholder="Company name" value={formData.company} onChange={e => setFormData(d => ({ ...d, company: e.target.value }))} />
//                       </div>
//                     </>
//                   )}

//                   {step === 2 && (
//                     <>
//                       <div className="field">
//                         <label>Country / Region</label>
//                         <select value={formData.country} onChange={e => setFormData(d => ({ ...d, country: e.target.value }))}>
//                           <option value="">Select…</option>
//                           <option>Belgium — Flanders</option>
//                           <option>Belgium — Brussels</option>
//                           <option>Belgium — Wallonia</option>
//                           <option>Germany</option>
//                           <option>France</option>
//                           <option>Luxembourg</option>
//                           <option>Netherlands</option>
//                           <option>Other</option>
//                         </select>
//                       </div>
//                       <div className="field">
//                         <label>Project scope</label>
//                         <textarea
//                           required
//                           placeholder="Describe your project: size, occupancy type, applicable standards, timeline…"
//                           value={formData.scope}
//                           onChange={e => setFormData(d => ({ ...d, scope: e.target.value }))}
//                         />
//                       </div>
//                     </>
//                   )}

//                   <div className="form-foot">
//                     <button
//                       type="button"
//                       className="back"
//                       style={{ visibility: step > 0 ? "visible" : "hidden" }}
//                       onClick={() => setStep(s => s - 1)}
//                     >
//                       ← Back
//                     </button>
//                     <button type="submit" className="btn btn-primary">
//                       {step < 2 ? <>Continue&nbsp;<ChevronIcon /></> : <>Send request&nbsp;<ArrowIcon size={12} /></>}
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== FOOTER ===== */}
//       <footer>
//         <div className="foot-grid">
//           <div className="foot-col">
//             <div className="foot-brand">Fire <em>Management</em></div>
//             <div className="foot-addr">Fire safety engineering partner for demanding projects in Belgium, Germany and France. SRL · VAT BE 0712.884.901</div>
//           </div>
//           <div className="foot-col">
//             <h4>Services</h4>
//             <a href="#services">Conceptual design</a>
//             <a href="#services">Sprinkler design</a>
//             <a href="#services">Inspections & audits</a>
//             <a href="#services">Commissioning</a>
//           </div>
//           <div className="foot-col">
//             <h4>Company</h4>
//             <a href="#why">Approach</a>
//             <a href="#references">References</a>
//             <a href="#standards">Standards</a>
//             <a href="#contact">Contact</a>
//           </div>
//           <div className="foot-col">
//             <h4>Offices</h4>
//             <a>Brussels, BE</a>
//             <a>Tunis, TN</a>
//             <a>Project sites · EU</a>
//           </div>
//         </div>
//         <div className="foot-bottom">
//           <span>© 2026 FIRE MANAGEMENT SRL</span>
//           <span>FM / 001 — 0042</span>
//           <span>EN · FR · NL</span>
//         </div>
//       </footer>
//     </>
//   );
// }
