export default function Footer() {
  return (
    <footer>
      <div className="foot-grid">
        <div className="foot-col">
          <div className="foot-brand">Fire <em>Management</em></div>
          <div className="foot-addr">Fire safety engineering partner for demanding projects in Belgium, Germany and France. SRL · VAT BE 0712.884.901</div>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          <a href="#services">Conceptual design</a>
          <a href="#services">Sprinkler design</a>
          <a href="#services">Inspections & audits</a>
          <a href="#services">Commissioning</a>
        </div>
        <div className="foot-col">
          <h4>Company</h4>
          <a href="#why">Approach</a>
          <a href="#references">References</a>
          <a href="#standards">Standards</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="foot-col">
          <h4>Offices</h4>
          <a>Brussels, BE</a>
          <a>Tunis, TN</a>
          <a>Project sites · EU</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 FIRE MANAGEMENT SRL</span>
        <span>FM / 001 — 0042</span>
        <span>EN · FR · NL</span>
      </div>
    </footer>
  );
}