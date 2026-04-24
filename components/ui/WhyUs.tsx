export default function WhyUs() {
  return (
    <section
      id="why"
      className="why-section"
      style={{
        backgroundColor: "var(--fg)",
        color: "var(--bg)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* SVG: Detailed Sprinkler & Pipe Schematic */}
      <svg 
        style={{ position: "absolute", right: "-50px", top: "10%", width: "40%", height: "80%", opacity: 0.08, pointerEvents: "none" }}
        viewBox="0 0 200 400"
      >
        {/* Vertical Riser Pipe */}
        <rect x="95" y="0" width="10" height="400" fill="none" stroke="var(--bg)" strokeWidth="0.5" />
        {/* Sprinkler Head Details */}
        {[100, 200, 300].map((y) => (
          <g key={y} transform={`translate(100, ${y})`}>
            <path d="M -40 0 L 40 0" stroke="var(--bg)" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="3" fill="var(--accent)" />
            <path d="M -5 0 L -10 10 L 10 10 L 5 0" fill="none" stroke="var(--bg)" strokeWidth="0.5" />
            <text x="15" y="-5" fontSize="6" fontFamily="var(--mono)" fill="var(--fg-mute)">[SPRINKLER_HEAD_TYPE_A]</text>
          </g>
        ))}
      </svg>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-head">
          <div>
            <div className="eyebrow">
              <span className="dot" style={{ background: "var(--accent)" }} />
              <span className="kicker" style={{ color: "var(--fg-mute)" }}>03 — Reliability & Expertise</span>
            </div>
            <h2 style={{ color: "var(--bg)" }}>The core purpose is <em>saving lives.</em></h2>
          </div>
        </div>

        <div className="why-grid">
          
          {/* Left Column: Mission & Partnerships */}
          <div>
            <div style={{ marginBottom: "48px" }}>
              <p style={{ fontSize: "20px", lineHeight: "1.5", fontWeight: "500", color: "var(--bg)" }}>
                According to the NFPA, fire sprinklers reduce death rates by <span style={{ color: "var(--accent)" }}>81%</span>. We act early, controlling risks before the fire department even arrives.
              </p>
              <p style={{ marginTop: "24px", color: "var(--bg-2)", fontSize: "16px", lineHeight: "1.7" }}>
                Over the last 3 years, we’ve realized 40+ high-stakes projects across **Pharma, Nuclear, Food Industry, and Military** sectors. We don't just design; we secure 100% AHJ and Control Organism approvals.
              </p>
            </div>

            {/* Partner Network Stamps */}
            <div style={{ borderTop: "1px solid var(--line-2)", paddingTop: "32px" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "10px", color: "var(--fg-mute)", textTransform: "uppercase", display: "block", marginBottom: "20px" }}>
                Trusted Design Partner For:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {["Fire Concept", "Cegelec", "Tractebel", "TPF", "Wayss & Freytag"].map((partner) => (
                  <span key={partner} style={{ 
                    border: "1px solid var(--bg)", 
                    padding: "6px 12px", 
                    fontSize: "12px", 
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Core Team "Data Sheet" */}
          <div style={{ background: "rgba(0,0,0,0.03)", padding: "40px", border: "1px solid rgba(0,0,0,0.05)" }}>
            <div style={{ marginBottom: "32px" }}>
              <h4 style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--accent)", marginBottom: "16px" }}>[ LEADERSHIP_PROFILE ]</h4>
              <div style={{ fontSize: "18px", fontWeight: "700", marginBottom: "8px" }}>Mohamed — Owner & Lead Engineer</div>
              <p style={{ fontSize: "13px", lineHeight: "1.6", color: "var(--bg-2)" }}>
                10+ years of expertise in Fire Safety design, auditing, and commissioning. Specialist in navigating the most challenging industrial missions.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <h4 style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--fg-mute)" }}>TECHNICAL_FORCE</h4>
              {[
                "BIM Specialist",
                "Fire Safety Specialist",
                "Industrial Safety Engineer",
                "Operations Manager"
              ].map((role) => (
                <div key={role} style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  paddingBottom: "8px",
                  borderBottom: "1px dashed rgba(0,0,0,0.1)",
                  fontSize: "14px",
                  fontWeight: "500"
                }}>
                  <span>{role}</span>
                  <span style={{ color: "var(--accent)" }}>✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}