import React from "react";
import { FORM_SERVICES } from "./data";
import { ArrowIcon, ChevronIcon } from "./icons";

interface ContactProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  selectedSvc: number | null;
  setSelectedSvc: (svc: number | null) => void;
  formData: { name: string; email: string; company: string; scope: string; country: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; company: string; scope: string; country: string }>>;
  submitted: boolean;
  setSubmitted: (submitted: boolean) => void;
}

export default function Contact({ step, setStep, selectedSvc, setSelectedSvc, formData, setFormData, submitted, setSubmitted }: ContactProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) { setStep(s => s + 1); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "110px 40px", paddingBottom: "80px" }}>
      <div className="wrap contact-grid">
        <div className="contact-left">
          <div className="eyebrow"><span className="dot" /><span className="kicker">06 — Start a project</span></div>
          <h2>Tell us what you&apos;re <em>protecting.</em></h2>
          <p>Three quick questions. You&apos;ll hear back from a senior engineer — within one business day.</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="lab">Belgium — HQ</span>
              <div className="v">
                Avenue Louise 480, 1050 Brussels
                <small>+32 2 588 14 72 · be@firemanagement.be</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="lab">Tunis — Engineering</span>
              <div className="v">
                Lac 2, Tunis 1053
                <small>+216 71 961 208 · eng@firemanagement.be</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="lab">Response</span>
              <div className="v">
                &lt; 1 business day
                <small>Senior engineer reply — no gatekeeping</small>
              </div>
            </div>
            <div className="contact-item">
              <span className="lab">NDA</span>
              <div className="v">
                Available on request
                <small>Standard mutual NDA provided same-day</small>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form-inner">
            {submitted ? (
              <div className="success">
                <div className="tick">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="#E63946" strokeWidth="1.5">
                    <path d="M1 8l6 6L21 1" />
                  </svg>
                </div>
                <p style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--fg-mute)" }}>
                  Message received — expect a reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-head">
                  <div className="title">
                    {step === 0 && "Step 1 / 3 · Project type"}
                    {step === 1 && "Step 2 / 3 · Your details"}
                    {step === 2 && "Step 3 / 3 · Location & scope"}
                  </div>
                  <div className="steps">
                    <span className={`dot${step >= 0 ? " on" : ""}`} />
                    <span className={`dot${step >= 1 ? " on" : ""}`} />
                    <span className={`dot${step >= 2 ? " on" : ""}`} />
                  </div>
                </div>

                {step === 0 && (
                  <>
                    <div className="field"><label>What do you need?</label></div>
                    <div className="choice-grid">
                      {FORM_SERVICES.map((s, i) => (
                        <div
                          key={i}
                          className={`choice${selectedSvc === i ? " on" : ""}`}
                          onClick={() => setSelectedSvc(i)}
                        >
                          <div className="cs">{s.sub}</div>
                          <div className="ct">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="field" style={{ marginTop: "22px" }}>
                      <label>Brief scope (optional)</label>
                      <textarea
                        placeholder="e.g. 18,000 m² warehouse, FM Global, retrofit"
                        value={formData.scope}
                        onChange={e => setFormData(d => ({ ...d, scope: e.target.value }))}
                      />
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="field">
                      <label>Full name</label>
                      <input required type="text" placeholder="Jan Martens" value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} />
                    </div>
                    <div className="field">
                      <label>Work email</label>
                      <input required type="email" placeholder="jan@company.be" value={formData.email} onChange={e => setFormData(d => ({ ...d, email: e.target.value }))} />
                    </div>
                    <div className="field">
                      <label>Company</label>
                      <input type="text" placeholder="Company name" value={formData.company} onChange={e => setFormData(d => ({ ...d, company: e.target.value }))} />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="field">
                      <label>Country / Region</label>
                      <select value={formData.country} onChange={e => setFormData(d => ({ ...d, country: e.target.value }))} style={{backgroundColor: "#2A2A2A" }}>
                        <option value="">Select…</option>
                        <option>Belgium — Flanders</option>
                        <option>Belgium — Brussels</option>
                        <option>Belgium — Wallonia</option>
                        <option>Germany</option>
                        <option>France</option>
                        <option>Luxembourg</option>
                        <option>Netherlands</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Project scope</label>
                      <textarea
                        required
                        placeholder="Describe your project: size, occupancy type, applicable standards, timeline…"
                        value={formData.scope}
                        onChange={e => setFormData(d => ({ ...d, scope: e.target.value }))}
                      />
                    </div>
                  </>
                )}

                <div className="form-foot">
                  <button
                    type="button"
                    className="back"
                    style={{ visibility: step > 0 ? "visible" : "hidden" }}
                    onClick={() => setStep(s => s - 1)}
                  >
                    ← Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {step < 2 ? <>Continue&nbsp;<ChevronIcon /></> : <>Send request&nbsp;<ArrowIcon size={12} /></>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}