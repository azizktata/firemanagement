import { ArrowIcon, ChevronIcon } from "./icons";

interface HeroProps {
  clock: string;
}

export default function Hero({ clock }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="hero-img" />
        <div className="hero-blueprint" />
      </div>
      <div className="hero-corner tl">
        <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M0 6V0h6" /></svg>
      </div>
      <div className="hero-corner tr">
        <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M12 0h6v6" /></svg>
      </div>
      <div className="hero-corner bl">
        <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M0 12v6h6" /></svg>
      </div>
      <div className="hero-corner br">
        <svg viewBox="0 0 18 18" fill="none" stroke="#E63946" strokeWidth="1"><path d="M12 18h6v-6" /></svg>
      </div>

      <div className="hero-meta">
        <span><b>FM/</b>001 · FIRE SAFETY ENGINEERING</span>
        <span id="clock">{clock}</span>
        <span>SINCE 2018 · SRL 0712.884.901</span>
      </div>

      <div className="hero-inner" style={{ paddingTop: "80px" }}>
        {/* <span className="hero-badge">
          <span className="live" />
          Accepting projects — Q2 / Q3 2026
        </span> */}
        <h1>
          {/* <span className="line"><span><span className="outline">engineered</span></span></span> */}
          <span className="line"><span>Fire safety,</span></span>
          <span className="line"><span>with <span className="red">precision.</span></span></span>
        </h1>
        <div className="hero-row">
         <p className="hero-sub" style={{ color: "rgba(255,255,255,0.7)", zIndex: 1 }}> {/* Boosted opacity */}
             Motivated Fire Safety Professionals, ready to support you in your most challenging projects. {" "}
              <span className="k">Fire Sprinkler Design, Risk Analysis, Fire Safety Audits</span> — across Belgium, Germany and France.
            </p>
         <div className="cta-row" style={{ pointerEvents: "all" }}> {/* Ensures link clicks go through */}
              <a href="#contact" className="btn btn-primary" style={{ cursor: "pointer", zIndex: 1 }}>
                Request a free audit&nbsp;<ArrowIcon size={12} />
              </a>
              <a href="#references" className="btn btn-ghost" style={{ cursor: "pointer", zIndex: 1 }}>
                View references&nbsp;<ChevronIcon />
              </a>
            </div>
        </div>
        {/* Stats Bar: Fixed brightness and alignment */}
          <div className="hero-stats" style={{ borderTop: "1px solid rgba(255,255,255,0.15)", zIndex: 1 }}>
            <div className="s">
              <div className="v" style={{ color: "#fff" }}>99<em>%</em></div>
              <div className="l" style={{ color: "var(--fg-dim)" }}>Sprinkler success rate<br />— 100+ years field data</div>
            </div>
            <div className="s">
              <div className="v" style={{ color: "#fff" }}>2 000<em>+</em></div>
              <div className="l" style={{ color: "var(--fg-dim)" }}>Sprinkler heads designed<br />— GSK RX395 alone</div>
            </div>
            <div className="s">
              <div className="v" style={{ color: "#fff" }}>4</div>
              <div className="l" style={{ color: "var(--fg-dim)" }}>Countries with<br />approved projects</div>
            </div>
            <div className="s">
              <div className="v" style={{ color: "#fff" }}>32</div>
              <div className="l" style={{ color: "var(--fg-dim)" }}>Certifications & tools<br />across the team</div>
            </div>
          </div>
      </div>
    </section>
  );
}