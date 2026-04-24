import { REFS, CLIENTS } from "./data";
import { ArrowIcon } from "./icons";

export default function References() {
  const images = [
    "/rx395.webp", 
    "/wn26.webp", 
    "/aps.svg", 
    "/project (3).jfif", 
  ];

  return (
    <section id="references" style={{ padding: "110px 0" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .ref-card { cursor: pointer; }
        .ref-card:hover .card-img-container { opacity: 0.7 !important; transform: scale(1.05); }
        .ref-card:hover .card-img-img { filter: grayscale(0%) !important; }
        .ref-card:hover .card-content-bottom { transform: translateY(-10px); }
        .ref-card:hover .arrow-wrap { transform: rotate(0deg) !important; color: var(--accent); }
      `}} />

      <div className="wrap">
        <div className="section-head" style={{ padding: "0 40px" }}>
          <div>
            <div className="eyebrow">
              <span className="dot" />
              <span className="kicker">04 — Selected Projects</span>
            </div>
            <h2>Projects <em>portfolio</em></h2>
          </div>
          <p>Pharmaceutical GMP zones, military installations, high-value logistics. A sample of the work — full dossier on request.</p>
        </div>

        <div className="ref-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(12, 1fr)", 
          gap: "1px", 
          background: "var(--line)", 
          marginTop: "64px",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)"
        }}>
          {REFS.map((r, i) => (
            <div 
              key={i} 
              className="ref-card"
              style={{ 
                gridColumn: i % 3 === 0 ? "span 7" : "span 5", 
                background: "var(--bg)",
                position: "relative",
                overflow: "hidden",
                minHeight: "480px",
                display: "flex",
                flexDirection: "column",
                padding: "40px"
              }}
            >
              {/* Image Layer */}
              <div 
                className="card-img-container"
                style={{ 
                  position: "absolute", 
                  inset: 0, 
                  zIndex: 0, 
                  opacity: "0.3",
                  transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)" 
                }}
              >
                <img 
                  className="card-img-img"
                  src={images[i] || images[0]} 
                  alt={r.d} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    filter: "grayscale(100%)",
                    transition: "filter 0.6s ease"
                  }} 
                />
                <div style={{ 
                  position: "absolute", 
                  inset: 0, 
                  background: "linear-gradient(to bottom, transparent, var(--bg) 95%)" 
                }} />
              </div>

              {/* Content Layer */}
              <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="num" style={{ fontFamily: "var(--mono)", color: "var(--accent)", fontSize: "12px" }}>
                    [{r.n}]
                  </span>
                  <span className="tag" style={{ 
                    fontSize: "10px", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em", 
                    border: "1px solid var(--line-2)",
                    padding: "4px 8px",
                    background: "rgba(14,14,14,0.5)",
                    backdropFilter: "blur(4px)"
                  }}>
                    {r.tag}
                  </span>
                </div>

                <div className="card-content-bottom" style={{ marginTop: "auto", transition: "transform 0.4s ease" }}>
                  <h3 style={{ fontSize: "28px", maxWidth: "80%", marginBottom: "12px", fontWeight: "600" }}>
                    {i === 0 && <>GSK <em>RX395</em></>}
                    {i === 1 && <>GSK <em>WN26</em></>}
                    {i === 2 && <>Belgian Air Force</>}
                    {i === 3 && <>Takeda <em>Lessines</em></>}
                    {i === 4 && <>Cargill <em>Ghent</em></>}
                  </h3>
                  <p style={{ color: "var(--fg-dim)", fontSize: "15px", lineHeight: "1.6", marginBottom: "32px", maxWidth: "420px" }}>
                    {r.d}
                  </p>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    paddingTop: "24px", 
                    borderTop: "1px solid var(--line)" 
                  }}>
                    <span style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--fg-mute)" }}>{r.y}</span>
                    <span className="arrow-wrap" style={{ transform: "rotate(-45deg)", transition: "all 0.4s ease" }}>
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients section */}
        <div className="clients" style={{ padding: "20px 40px 0" }}>
          <div className="clients-head" style={{ borderBottom: "1px solid var(--line)", paddingBottom: "20px", marginBottom: "40px" }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: "12px", textTransform: "uppercase", opacity: 0.7 }}>Clients & partners — selection</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: "12px", opacity: 0.3 }}>12 / 40+</span>
          </div>
          <div className="clients-grid">
            {CLIENTS.map((c, i) => (
              <div className="client" key={i}>
                {(c.includes("Saffre") || c.includes("Fire Concept") || c.includes("Wayss") || c.includes("TPF") || c.includes("Belgian"))
                  ? <em>{c}</em>
                  : c
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}