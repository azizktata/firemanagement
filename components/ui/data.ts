export const SERVICES = [
  {
    n: "01", k: "Conceptual Design",
    title: "Conceptual design & feasibility.",
    desc: "We translate a brief, a site visit and your authority's codes into a defensible design basis — risk analysis, water supply study, BOQ and tender-ready documentation.",
    bullets: [
      "Fire risk analysis & hazard classification",
      "Water supply & reservoir sizing",
      "Bill of quantities + budget estimate",
      "Tender documents and technical specifications",
      "Feasibility studies for retrofit scenarios",
    ],
    file: "RX395_FEASIBILITY_R3.pdf",
    useImage: false,
  },
  {
    n: "02", k: "2D/3D Sprinkler Design",
    title: "Detailed 2D & 3D design.",
    desc: "Full coordinated drawing sets produced in AutoCAD, Revit and SprinkCAD — wet, dry, pre-action double interlock and deluge systems — with hydraulic calculations to NFPA 13.",
    bullets: [
      "Wet, dry, pre-action & deluge systems",
      "Hydraulic calculations (NFPA 13, EN 12845)",
      "BIM coordination — Navisworks, BIM360, ACC",
      "Alarm valve station design",
      "As-built drawings & O&M manuals",
    ],
    file: "WN26_LEVEL04_SPRK_R7.dwg",
    useImage: false,
  },
  {
    n: "03", k: "Inspections & Audits",
    title: "Independent inspections & audits.",
    desc: "Third-party assessments against NFPA, FM Global, NBN EN, CEA 4001 and ANPI — with clear remediation paths, prioritised by risk and by what your AHJ will actually require.",
    bullets: [
      "Pre-commissioning walkdowns",
      "Gap analysis vs. NFPA / FM Global / NBN",
      "ANPI-ready documentation",
      "Insurance-driven audits",
      "Remediation roadmap & budget",
    ],
    file: "AUDIT_CARGILL_R2.xlsx",
    useImage: false,
  },
  {
    n: "04", k: "Commissioning",
    title: "Site follow-up & commissioning.",
    desc: "We act as your technical agent on site — managing subcontractors, witnessing tests, signing off against the design and handing over a fully-documented, code-compliant system.",
    bullets: [
      "Subcontractor & installer management",
      "Hydrostatic & flow testing",
      "Witnessing & sign-off protocols",
      "Punch-list management",
      "AHJ final acceptance support",
    ],
    file: "ZUTENDAAL_PHO_ACCEPT.pdf",
    useImage: false,
  },
];

export const REFS = [
  { n: "01", t: "GSK RX395 — Fire Sprinkler System", d: "Feasibility, conceptual design, BOQ and full 2D/3D detailed design of 11 alarm valve systems — wet and pre-action double interlock.", tag: "Pharma / GMP", y: "2024" },
  { n: "02", t: "GSK WN26 — Fire Remediation", d: "Protection of GMP production areas, clean rooms and building façade. Wet, deluge and pre-action double interlock systems.", tag: "Pharma / GMP", y: "2023" },
  { n: "03", t: "Belgian Air Force — Zutendaal", d: "New pump house & water tanks, 5 km underground piping, 17 warehouses, workshop, office building and medical storage. Site follow-up, testing and commissioning.", tag: "Defence / Base", y: "2023" },
  { n: "04", t: "Takeda Lessines — Plant Extension", d: "Pre-action sprinkler design for a biologics production expansion. Full hydraulic model and alarm-valve coordination.", tag: "Pharma / GMP", y: "2022" },
  // { n: "05", t: "Cargill Ghent — Warehouse Upgrade", d: "FM Global-compliant retrofit of high-pile storage sprinklers over 18,000 m² of logistics floorplate.", tag: "Logistics / FMG", y: "2022" },
];

export const CLIENTS = ["GSK", "Takeda", "UCB", "Cargill", "Cegelec", "Les Saffre", "TPF Engineering", "IFC", "TSK", "Wayss & Freytag", "Belgian Air Force", "Fire Concept"];

export const STANDARDS = [
  { c: "NFPA 13", n: "Sprinkler Systems", d: "US / international reference standard for sprinkler installation design.", logo: "NFPA13.webp" },
  { c: "FM Global", n: "Property Loss", d: "Insurance-driven datasheets for high-value and high-hazard occupancies.", logo: "FM.webp" },
  { c: "NBN EN 12845", n: "EU Sprinklers", d: "European standard for automatic sprinkler systems — design, installation & maintenance.", logo: "NBN EN.webp" },
  { c: "CEA 4001", n: "Insurance EU", d: "Specification for sprinkler installations — European insurance framework.", logo: "CEA4001.webp" },
  { c: "ANPI", n: "BE Certification", d: "Belgian national safety institute — approved inspection body.", logo: "image.webp" },
  // { c: "Royal Decree", n: "28 March 2014", d: "Belgian federal fire prevention legislation for workplaces.", logo: "royal-decree.png" },
  // { c: "EN 54", n: "Detection & Alarm", d: "European standard for fire detection and fire alarm systems.", logo: "en-54.png" },
  { c: "Zone de Secours Brabant W.", n: "Local AHJ", d: "Authority having jurisdiction — Walloon Brabant fire services.", logo: "pompier.webp" },
];

export const FORM_SERVICES = [
  { label: "Conceptual design", sub: "Service 01" },
  { label: "2D / 3D sprinkler design", sub: "Service 02" },
  { label: "Inspection / audit", sub: "Service 03" },
  { label: "Commissioning / follow-up", sub: "Service 04" },
];

