import { CLIENTS } from "./data";

export default function TrustStrip() {
  return (
    <section className="trust" style={{ padding: "36px 0" }}>
      <div className="trust-head">Trusted on critical-risk projects by</div>
      <div className="marquee">
        <div className="marquee-track">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div className="logo-chip" key={i}>
            
                <span>{c.toUpperCase()}</span>
            
              <span className="sep px-6">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}