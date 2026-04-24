import { STANDARDS } from "./data";

export default function Standards() {
  return (
    <section
      id="standards"
      style={{
        backgroundColor: "var(--fg)",
        color: "var(--bg)",
        position: "relative",
      }}
    >
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        opacity: 0.05, 
        pointerEvents: "none",
        backgroundImage: `radial-gradient(var(--bg) 1px, transparent 1px)`,
        backgroundSize: "40px 40px" 
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* <div className="section-head" style={{ marginBottom: "80px" }}>
          <div className="eyebrow">
            <span className="dot" style={{ background: "var(--accent)" }} />
            <span className="kicker" style={{ color: "var(--fg-mute)" }}>05 — Codes & Compliance</span>
          </div>
          <h2 style={{ color: "var(--bg)" }}>Designed to the codes<br />that get <em>signed off.</em></h2>
        </div> */}

 <div className="section-head" style={{ marginBottom: "40px" }}>
          <div>
            <div className="eyebrow">
              <span className="dot"  />
              <span className="kicker" style={{ color: "var(--fg-mute)" }}>05 — Codes & Compliance</span>
            </div>
            <h2>fire codes &<br /><em>standards</em></h2>
          </div>
          {/* <p>Pharmaceutical GMP zones, military installations, high-value logistics. A sample of the work — full dossier on request.</p> */}
        </div>
        <div className="std-rows">
          {STANDARDS.map((s, i) => (
            <div key={i} className="std-row-item" style={{ 
              display: "flex", 
              alignItems: "flex-start",
              padding: "80px 0", 
              borderTop: "1px solid rgba(0,0,0,0.1)",
              gap: "80px"
            }}>
              
              {/* IMAGE: Larger with Hover Effect */}
              <div style={{ 
                flex: "0 0 200px", // Increased width for larger logos
                height: "100px",   // Increased height
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                cursor: "pointer"
              }}>
                <img 
                  src={s.logo} 
                  alt={s.n} 
                  className="standard-logo"
                  style={{ 
                    maxHeight: "100%", 
                    maxWidth: "100%", 
                    objectFit: "contain",
                    transition: "all 0.4s ease",
                    filter: "grayscale(1) brightness(0.8)", // Default state
                    opacity: 0.7
                  }} 
                />
              </div>

              {/* CONTENT: Stacked Column Layout */}
              <div style={{ 
                flex: 1, 
                display: "flex", 
                flexDirection: "column", 
                gap: "8px" 
              }}>
                <div style={{ 
                  fontFamily: "var(--mono)", 
                  fontSize: "12px", 
                  color: "var(--accent)", 
                  letterSpacing: "0.1em",
                  textTransform: "uppercase"
                }}>
                  {s.c}
                </div>
                
                <h3 style={{ 
                  fontSize: "28px", 
                  fontWeight: "700", 
                  color: "var(--bg)",
                  lineHeight: "1.2"
                }}>
                  {s.n}
                </h3>
                
                <p style={{ 
                  maxWidth: "720px", 
                  fontSize: "16px", 
                  lineHeight: "1.7", 
                  color: "var(--bg-2)",
                  marginTop: "8px"
                }}>
                  {s.d}
                </p>
              </div>

            </div>
          ))}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} />
        </div>
      </div>

      {/* Hover Logic - Add this to your globals.css or a style tag */}
      <style dangerouslySetInnerHTML={{ __html: `
        .std-row-item:hover .standard-logo {
          filter: grayscale(0) brightness(1) !important;
          opacity: 1 !important;
          transform: scale(1.05);
        }
      `}} />
    </section>
  );
}