// Edit this file to change text and links. Anything marked TODO is a placeholder.
export const profile = {
  name: "Vishnu Dinesh",
  title: "UI/UX Designer",
  intro: "I design clear, trustworthy interfaces for complex tools. Pick a level below to see how I work.",
  gamePortfolioUrl: "https://portfolio-vishnu-dinesh.vercel.app/",
  industrialUrl: "https://industrial-design-portfolio-ruby.vercel.app/",
  email: "vishnudine@gmail.com",
  linkedin: "https://www.linkedin.com/in/vishnudinesh22/",
  portraitUrl: "https://industrial-design-portfolio-ruby.vercel.app/images/homepage/gemini-generated-image-qa1-ruyqa1-ruyqa1-r1-ee561.png",
  behance: "TODO: your Behance / Figma link",
};

const FIGMA = { name: "Figma", img: "https://industrial-design-portfolio-ruby.vercel.app/images/homepage/59687041-d0567.png" };
const ILLUSTRATOR = { name: "Illustrator", img: "https://industrial-design-portfolio-ruby.vercel.app/images/homepage/adobe-illustrator2024-logo-png-transparent-creative-and-distinct-0a64b.png" };

export const projects = [
  {
    id: "specra",
    level: 1,
    name: "Specra",
    tag: "Reimagining tech pack creation for India's manufacturing SMEs",
    summary:
      "The problem is not making the product, it is communicating how to make it. Specra puts one approved tech pack in a connected workspace instead of WhatsApp, Excel, PDFs, sketches and calls.",
    meta: [["Timeline", "12 weeks"]],
    tools: [FIGMA, { name: "FigJam" }, ILLUSTRATOR, { name: "AI" }],
    facts: [
      ["Where it started", "Noticed during an internship at a bag manufacturing company: making the product was not the hardest part."],
      ["Roles", "Product Designer, Merchandiser, Manufacturer, QC Inspector, Admin, with a role switcher"],
      ["Six clickable journeys", "Create a product, edit and approve a tech pack, review a sample, compare revisions, complete QC, confirm production readiness"],
      ["Navigation", "Dashboard, Products, Tasks, Notifications, Team, Settings; each product has Overview, Tech Pack, BOM, Samples, Revisions, QC, Files, Comments"],
      ["Statuses", "Draft, In Progress, In Review, Revision Required, Approved, Production Ready"],
      ["Production Ready needs", "Approved tech pack, completed BOM, approved sample, passed required QC"],
      ["Version safety", "Latest approved revision always visible; warnings for older versions and unsaved edits"],
    ],
    todo: ["Final prototype screens", "Prototype link", "Research findings", "The Framework and Impact slides (blank in the source PDF)"],
    link: "",
  },
  {
    id: "lawtek",
    level: 2,
    name: "LawTek",
    tag: "Legal AI you can verify",
    summary:
      "Legal AI answers fast, but lawyers cannot rely on an answer they cannot verify. LawTek asks: how might AI show its work, so a lawyer can check it in seconds?",
    meta: [["Timeline", "May to Jun 2026"]],
    tools: [FIGMA, { name: "Boolean variables" }, { name: "Figma MCP" }],
    facts: [
      ["1 Source", "Answers come from a verified library, with trust level, jurisdiction and status shown"],
      ["2 Evidence", "Findings point to the law or case behind them in an Evidence panel"],
      ["3 Check", "QA flags unsupported claims and low-confidence results before anyone relies on them"],
      ["4 Human", "Critical items are escalated to a person for review"],
      ["The system", "One shell around every check: Research, Work on documents, Team and storage, Account; light and dark themes"],
      ["Sample journey", "One employment contract through draft, translate, check, evidence and human review (illustrative, built from prototype data, not a real matter)"],
    ],
    todo: ["Legal Table screen", "Prototype link", "Real test results (planned measures only so far)"],
    link: "",
  },
  {
    id: "glitch-matrix",
    level: 3,
    name: "Glitch Matrix",
    tag: "Outdoor-play device for ages 10-14",
    summary:
      "A physical-digital play concept with tactile controls and missions. I designed the Glitch Hunter game UI as visual concepts; AR and tracking are proposed, not built.",
    meta: [["Timeline", "2 weeks"]],
    tools: [],
    facts: [
      ["Intended experience", "Outdoor missions, tactile controls, clear progress feedback, cooperative and competitive options"],
      ["Design questions", "Understand roles and cues, keep attention on surroundings, check hand fit, mass and visibility"],
      ["Interface concept", "Glitch Hunter start screen: keep the primary play action clear"],
      ["Limits", "Visual concepts, not connected tracking software; needs testing with children and guardians"],
    ],
    todo: ["Tools", "UI/UX screens for this page"],
    link: "https://industrial-design-portfolio-ruby.vercel.app/glitch-matrix/",
    linkLabel: "Full case study ↗",
  },
  {
    id: "next",
    level: 4,
    name: "Next project",
    tag: "Locked",
    summary: "Space for your next case study.",
    meta: [],
    tools: [],
    facts: [],
    todo: [],
    link: "",
    locked: true,
  },
];

const IMG = "https://industrial-design-portfolio-ruby.vercel.app/images/homepage/";
export const designTools = [
  { name: "Figma", img: IMG + "59687041-d0567.png" },
  { name: "Illustrator", img: IMG + "adobe-illustrator2024-logo-png-transparent-creative-and-distinct-0a64b.png" },
  { name: "Photoshop", img: IMG + "photoshop1-dd70e.png" },
  { name: "Sketchbook", img: IMG + "autodesk-sketchbook-pro-seeklogo1-55c4a.png" },
  { name: "Fusion 360", img: IMG + "autodesk-fusion360-seeklogo1-86ce6.png" },
  { name: "SolidWorks", img: IMG + "solidworks-seeklogo1-898ed.png" },
  { name: "Blender", img: IMG + "blender-logo1-c2589.png" },
  { name: "Rhino" },
];

// From the Industrial Design portfolio
export const experience = [
  { org: "Bayne, Kochi", role: "Industrial Designer & UI/UX Intern", when: "Jun to Jul 2026", points: ["UI/UX for internal operations", "Digital tech-pack and QC systems", "Design for manufacturing: ergonomic bags"] },
  { org: "Lawtek AI, Abu Dhabi", role: "UI/UX Designer (remote/hybrid)", when: "May to Jun 2026", points: ["AI legal-management interfaces", "Clear B2B workflows"] },
  { org: "Riviera, VIT Vellore", role: "Design & Print Coordinator", when: "Dec 2025 to Mar 2026", points: ["Festival design and print production", "Consistent branding across teams"] },
  { org: "graVITas, VIT Vellore", role: "Event Coordinator, UI/UX Track", when: "Sep 2025", points: ["UI/UX hackathon coordination"] },
];

export const skills = ["B2B interfaces", "Tech-pack / QC systems", "Ergonomic bag manufacturing", "CMF selection", "New-product research", "Branding & print production"];

// From the Industrial Design portfolio
export const education = { degree: "B.Des, Industrial Design", school: "Vellore Institute of Technology (VIT), Vellore", cgpa: "CGPA 8.00" };
