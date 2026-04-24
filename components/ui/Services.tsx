import { SERVICES } from "./data";

function ServiceSchema({ idx }: { idx: number }) {
  // Common colors for technical consistency
  const red = "rgba(230,57,70,.8)";
  const whiteDim = "rgba(255,255,255,.2)";
  const whiteMute = "rgba(255,255,255,.1)";

  if (idx === 0) return (
    /* CONCEPTUAL: High-level zoning and hazard layout */
    <svg className="schema" viewBox="0 0 600 380" fill="none" stroke={whiteDim} strokeWidth="1">
      <rect x="50" y="50" width="500" height="280" strokeDasharray="4 4" />
      {/* Hazard Zones */}
      <rect x="50" y="50" width="200" height="180" fill="rgba(230,57,70,.05)" stroke={red} />
      <text x="60" y="75" fill={red} fontFamily="var(--mono)" fontSize="10">HIGH HAZARD (HHP)</text>
      
      <rect x="250" y="50" width="300" height="280" stroke={whiteDim} />
      <text x="260" y="75" fill="var(--fg-dim)" fontFamily="var(--mono)" fontSize="10">ORDINARY HAZARD (OH)</text>
      
      {/* Feasibility Path */}
      <path d="M50 300h500" stroke={whiteMute} />
      <circle cx="100" cy="300" r="4" fill={red} />
      <circle cx="300" cy="300" r="4" fill="var(--bg)" stroke={whiteDim} />
      <circle cx="500" cy="300" r="4" fill="var(--bg)" stroke={whiteDim} />
      <text x="60" y="325" fill="var(--fg-mute)" fontFamily="var(--mono)" fontSize="8">FEASIBILITY MILESTONES: WATER SUPPLY ➔ TANK CAPACITY ➔ PUMP HOUSE</text>
    </svg>
  );

  if (idx === 1) return (
    /* DETAILED DESIGN: Isometric 3D Sprinkler Network */
    <svg className="schema" viewBox="0 0 600 380" fill="none" stroke={red} strokeWidth="1.5">
      {/* Isometric Grid Ghost */}
      <path d="M0 190h600M300 0v380" stroke={whiteMute} strokeWidth="0.5" />
      
      {/* Isometric Piping */}
      <g transform="translate(100, 100)">
        {/* Main Feed */}
        <path d="M0 150 L150 100 L400 180" fill="none" stroke={red} strokeWidth="3" />
        {/* Branches */}
        <path d="M50 133 L50 80 M100 116 L100 60 M150 100 L150 40" stroke={whiteDim} strokeWidth="1" />
        {/* Heads */}
        <circle cx="50" cy="80" r="4" fill="var(--bg)" stroke={red} />
        <circle cx="100" cy="60" r="4" fill="var(--bg)" stroke={red} />
        <circle cx="150" cy="40" r="4" fill="var(--bg)" stroke={red} />
        
        <text x="0" y="170" fill={red} fontFamily="var(--mono)" fontSize="9">3D_MODEL_REF: REVIT_MEP_04</text>
      </g>
    </svg>
  );

  if (idx === 2) return (
    /* INSPECTION: Compliance Audit Over Floorplan */
    <svg className="schema" viewBox="0 0 600 380" fill="none" stroke={whiteDim} strokeWidth="1">
      <path d="M100 60h400v260h-400z" stroke={whiteMute} />
      <path d="M100 160h400M250 60v260" stroke={whiteMute} />
      
      {/* Audit Findings */}
      <g>
        <circle cx="180" cy="110" r="12" stroke={red} />
        <path d="M175 110l3 3l7-7" stroke={red} />
        <text x="200" y="114" fill="var(--fg)" fontFamily="var(--mono)" fontSize="9">VALVE_01: PASS</text>
      </g>
      
      <g>
        <circle cx="350" cy="230" r="12" stroke="orange" />
        <line x1="345" y1="225" x2="355" y2="235" stroke="orange" />
        <line x1="355" y1="225" x2="345" y2="235" stroke="orange" />
        <text x="370" y="234" fill="var(--fg)" fontFamily="var(--mono)" fontSize="9">HEAD_SPACING: NON-COMPLIANT</text>
      </g>
      
      <text x="100" y="50" fill="var(--fg-mute)" fontFamily="var(--mono)" fontSize="8">AUDIT REPORT #8491 — FM GLOBAL STANDARDS</text>
    </svg>
  );

  if (idx === 3) return (
    /* COMMISSIONING: Hydraulic Pump Curve */
    <svg className="schema" viewBox="0 0 600 380" fill="none" stroke={whiteDim} strokeWidth="1">
      {/* Graph Axes */}
      <path d="M100 80v220h400" stroke={whiteDim} />
      <text x="60" y="200" transform="rotate(-90 60 200)" fill="var(--fg-mute)" fontFamily="var(--mono)" fontSize="8">PRESSURE (BAR)</text>
      <text x="280" y="330" fill="var(--fg-mute)" fontFamily="var(--mono)" fontSize="8">FLOW (L/MIN)</text>
      
      {/* Pump Curve */}
      <path d="M100 120 Q 300 130 450 280" stroke={red} strokeWidth="2" />
      <path d="M100 160 Q 300 170 450 300" stroke={whiteDim} strokeDasharray="4 2" />
      
      {/* Duty Point */}
      <circle cx="310" cy="155" r="5" fill={red} />
      <text x="320" y="150" fill={red} fontFamily="var(--mono)" fontSize="10">DUTY POINT: 3200 L/M @ 8.2 BAR</text>
      
      <text x="100" y="60" fill="var(--fg-dim)" fontFamily="var(--mono)" fontSize="9">PUMP_TEST_RESULTS: ZUTENDAAL_FIRE_PUMP_01</text>
    </svg>
  );
  return null;
}

interface ServicesProps {
  svcIdx: number;
  setSvcIdx: (idx: number) => void;
}

export default function Services({ svcIdx, setSvcIdx }: ServicesProps) {
  const svc = SERVICES[svcIdx];

  return (
    <section id="services" style={{ padding: "110px 40px" }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot" /><span className="kicker">02 — Services</span></div>
            <h2>Full lifecycle.<br /><em>One</em> team.</h2>
          </div>
          <p>From first feasibility to final sign-off — we cover the full lifecycle of fire suppression engineering.</p>
        </div>
        <div className="svc-grid">
          <div className="svc-tabs" >
            {SERVICES.map((s, i) => (
              <button key={i} style={{padding: "30px"}} className={`svc-tab${svcIdx === i ? " active" : ""}`} onClick={() => setSvcIdx(i)}>
                <span className="n">{s.n}</span>
                <span className="t">{s.k}</span>
              </button>
            ))}
          </div>
          <div className="svc-panel">
            <div className="svc-copy">
              <h3>
                {svcIdx === 0 && <>Conceptual <em>design</em> & feasibility.</>}
                {svcIdx === 1 && <>Detailed <em>2D & 3D</em> design.</>}
                {svcIdx === 2 && <>Independent <em>inspections</em> & audits.</>}
                {svcIdx === 3 && <>Site follow-up & <em>commissioning</em>.</>}
              </h3>
              <p>{svc.desc}</p>
              <ul>
                {svc.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
            <div className="svc-visual">
              <div className="head">
                <span>FM / {svc.n} · {svc.k.toUpperCase()}</span>
                <span className="dots"><i /><i /><i /></span>
              </div>
              <div className="stage">
                <ServiceSchema idx={svcIdx} />
              </div>
              <div className="foot">
                <span>{svc.file}</span>
                <span>SHEET 001 / 001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}