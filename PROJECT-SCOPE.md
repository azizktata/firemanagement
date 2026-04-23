# Fire Management — Design Reference

> Last updated: April 2025 · Author: Aziz Ktata / Asis.tn

---

## 1. Project Context

**Client:** Fire Management SRL **Website:** firemanagement.be **Industry:** Fire Safety Engineering (B2B) **Markets:** Belgium (Flanders, Brussels, Wallonia), Germany, France — expanding to Luxembourg and Netherlands **Company structure:** Hybrid — team split between Belgium (on-site) and Tunisia (engineering) **Legal entity:** SRL (Belgian private limited company)

**Problem to solve:** The current website is built on Odoo (template, low flexibility, not mobile-friendly), has inconsistent AI-generated visuals, no clear brand identity, and fails to reflect the caliber of the clients they've worked with (GSK, Takeda, Belgian Air Force, Cargill).

---

## 2. Objectives of the New Website

| Priority | Objective                             | Why it matters                                                                                             |
| -------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 1        | **Establish credibility**       | Fire safety is a high-risk, high-trust industry — visitors must feel confident before making contact      |
| 2        | **Reflect real expertise**      | GSK, Belgian Air Force, Cargill are on the client list — the site must look like it belongs at that level |
| 3        | **Generate qualified leads**    | Replace passive contact page with an active funnel that qualifies visitors before they reach Dammak        |
| 4        | **Be fully mobile-first**       | Most B2B decision-makers browse on mobile — the current site fails completely on this                     |
| 5        | **Speak in multiple languages** | Current site mixes French/English — future site should support EN + FR + NL                               |
| 6        | **Be fast and maintainable**    | No more Odoo dependency — clean stack the owner can update without a developer                            |

---

## 3. Target Audience (Les Cibles)

### Primary — Direct Clients

* **Sprinkler installers** looking for a subcontracted design partner
* **Engineering and design firms** who need fire safety expertise for a project
* **Construction companies / general contractors** on large builds

### Secondary — End Clients / Decision-Makers

* **Facilities managers** at pharmaceutical companies, industrial sites, logistics hubs
* **Project managers** at large construction or infrastructure firms
* **Safety officers** at industrial and institutional organizations

### Psychographic Profile

* Risk-averse by nature — they are responsible for fire safety compliance
* Need  **proof before trust** : certifications, past projects, client names matter enormously
* Evaluate a supplier before ever reaching out — the website does the selling
* Value **precision and clarity** over personality or storytelling
* Often from Belgium, France, or Germany — expect professional European presentation

### What they ask when they land on the site

1. Have they done something like my project before?
2. Are they approved by the right authorities (ANPI, FM Global, QFPE)?
3. Can I trust them with something this critical?
4. How do I get in touch?

---

## 4. Brand Positioning

**Positioning statement:**

> Fire Management is the go-to fire safety engineering partner for demanding projects in Belgium, Germany, and France — trusted by GSK, Takeda, and the Belgian Air Force because we combine European on-site presence with high-output engineering at a competitive price.

**Brand personality:**

* Precise, not flashy
* Confident, not arrogant
* Serious, not cold
* Expert, not academic

**Tone of voice:**

* Direct and factual — no filler, no buzzwords
* Technical enough to signal expertise, plain enough to be understood
* Action-oriented — everything pushes toward contact
* English primary (professional standard in BE engineering sector), with French and Dutch support

**What the brand is NOT:**

* Not a startup (no playful gradients or rounded-everything UI)
* Not a generic "safety" brand (no stock helmet photos, no orange hi-vis clichés)
* Not a large corporation (keep human, approachable, precise)

---

## 5. Design Direction

### Aesthetic Reference

**Industrial precision meets European engineering.** Think: the visual language of technical documentation, aerospace signage, and high-end B2B SaaS — not fire truck red and warning labels.

Professional fire safety visual identity

BOLD design

**Keywords:** Authoritative · Structured · Dark · Precise · Heavy typography · Restrained

---

## 6. Site Structure (MVP → Full)

### MVP (Phase 1 — Landing Page)

```
/ (single-page)
├── Nav (fixed, transparent → solid on scroll)
├── Hero — headline + badge + stats + CTAs
├── Trust bar — client logos marquee
├── Services — 4 cards (01–04)
├── Why Us — differentiators + visual stats
├── References — 3 project cards + client logo grid
├── Standards — compliance grid
└── Contact — lead form + info
```

### Full Site (Phase 2)

```
/
├── / — Homepage (condensed version of MVP)
├── /services
│   ├── /conceptual-design
│   ├── /sprinkler-design
│   ├── /inspections-audits
│   └── /commissioning
├── /references — full project portfolio
├── /about — team, approach, locations
├── /contact
└── /[fr] /[nl] — multilingual routes
```

---

## 8. Real Content Inventory

### Services (confirmed from site)

1. **Conceptual Design** — Risk analysis, BOQ, feasibility, tender docs
2. **Detailed 2D/3D Sprinkler Design** — AutoCAD, Revit, SprinkCAD, BIM coordination, hydraulic calcs
3. **Inspections & Audits** — NFPA, FM Global, NBN, ANPI, Royal Decree compliance
4. **Construction Follow-Up & Commissioning** — Subcontractor management, site visits, testing witnessing

### Confirmed Projects

##### **GSK - RX395 - Fire Sprinkler System**

Feasibility Study

Conceptual Design - BOQ and Budget estimation

2D/3D Detailed Design of 11 sprinklers alarm valves (Wet system and Pre-action double Interlock Alarm Valves)

More than 2000 sprinkler Heads

##### **GSK - WN26 - Fire Remediation**

Protection of GMP Productions areas and Clean rooms.

Protection of Building Façade

More than 1300 sprinkler Head

Wet system - Deluge System - Pre-action Double Interlock System

##### **APS Fire Suppression - Zutendaal Air Base**

New Pump House & Water Tanks - 5 KM underground piping - 17 wraehouses - Workshop - Office Building - Medical Storage

Elaboration of Technical Specifications

Site Follow Up

Testing and Commissioning

### Client Logos (confirmed)

GSK · Takeda · UCB · Cargill · Cegelec · Les Saffre · TPF Engineering · IFC · TSK · Wayss & Freytag · Belgian Air Force · Fire Concept

### Standards (confirmed)

NFPA 13 · FM Global · NBN EN · CEA 4001 · ANPI · Zone de Secours Brabant Wallon · Royal Decree March 28, 2014 · EN54

### Tools (confirmed)

AutoCAD · Revit (2x certified) · SprinkCAD · AutoSprink RVT · Navisworks · BIM360 · ACC · Dalux · Newforma · Fieldwire

### Key Stats to Feature

* 99% worldwide sprinkler success rate (100+ year proven reliability)
* 2,000+ sprinkler heads designed (GSK RX395 alone)
* 3+ countries with approved projects
* Belgium: Flanders, Brussels, Wallonia — Germany — France — Luxembourg (in progress)

We have also a photo of team members

We have also testomonials

## 10. What to Avoid (Anti-patterns)

| Avoid                                          | Reason                                                                      |
| ---------------------------------------------- | --------------------------------------------------------------------------- |
| White background pages                         | Kills the industrial, authoritative feel                                    |
| Stock photos of fire / flames / helmets        | Generic, breaks trust in a technical industry                               |
| AI-generated imagery                           | Client already made this mistake — avoid entirely                          |
| Rounded everything (cards, buttons, etc.)      | Too soft for engineering/technical positioning                              |
| Purple gradients or pastel colors              | Wrong industry register                                                     |
| Long paragraphs of text without visual anchors | Engineers scan, they don't read                                             |
| Generic "Contact us" CTAs                      | Replace with action-specific: "Request a Free Audit", "Get a Project Quote" |
| Carousel / sliders for key content             | Visitors miss content; bad on mobile                                        |
| The Odoo "Generated by Odoo" footer            | Must be removed completely                                                  |
| Mixing languages mid-page                      | Choose one per locale; use proper i18n routing                              |

---

## 11. Tech Stack Recommendation

| Layer     | Choice                            | Reason                                                |
| --------- | --------------------------------- | ----------------------------------------------------- |
| Framework | Next.js 14 (App Router)           | SEO, multilingual routing, performance                |
| Styling   | Tailwind CSS                      | Fast iteration, consistent spacing                    |
| CMS       | Wordperss or sanity or Notion API | Client can update content without dev                 |
| Forms     | Resend + custom handler           | Email delivery without third-party form services      |
| Hosting   | Netlify                           | Free tier for this scale, perfect Next.js integration |
| Analytics | Plausible or GA4                  | Track form conversions and traffic sources            |
| i18n      | next-intl                         | EN / FR / NL routing                                  |

---

*Document maintained by Asis.tn — internal use only*
