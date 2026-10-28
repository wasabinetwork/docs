/** Accessible, framework-independent building blocks for GAMA Works service guides.
 * Replace Mintlify theme Cards/Tabs/Accordions whose inherited theme colors
 * can conflict with a custom light-on-dark agency page.
 */
const iconMarks = {
  calendar:"◷", mail:"✉", "mail-bulk":"✉", envelope:"✉", message:"✉",
  "message-circle":"✉", rocket:"↗", "badge-percent":"%", check:"✓",
  "clipboard-check":"✓", "headphones":"◉", headset:"◉", server:"▤", database:"▤",
  cloud:"☁", code:"⌘", gears:"⚙", workflow:"⇢", "diagram-project":"⇢",
  "network-wired":"◎", network:"◎", link:"⇄", plug:"⇄", bolt:"ϟ", 
  "hand-coins":"◇", "chart-line":"▥", "magnifying-glass":"⌕",
  "magnifying-glass-chart":"⌕", route:"↝", book:"▣", "book-open":"▣",
  "paper-plane":"↗", user:"◎", users:"◎", landmark:"◎", wrench:"⚙",
  "arrows-rotate":"↻", handshake:"◇", "life-ring":"◉", clock:"◷",
  brain:"◇", compass:"✧", sitemap:"▤", "laptop-code":"⌘",
  "comments":"✉", leaf:"♧", x:"×", sparkles:"✧"
};

export const GamaInfoColumns = ({ cols = 2, children }) => (
  <div className={cols === 3 ? "gama-guide-grid gama-guide-grid-three" : "gama-guide-grid"}>{children}</div>
);

export const GamaInfoCard = ({ title, icon, href, children }) => {
  const inner = (
    <>
      <span className="gama-guide-card-header">
        <span className="gama-guide-card-icon" aria-hidden="true">{iconMarks[icon] || "◆"}</span>
        {href && <span className="gama-guide-card-arrow" aria-hidden="true">↗</span>}
      </span>
      <span className="gama-guide-card-title">{title}</span>
      <div className="gama-guide-card-body">{children}</div>
    </>
  );
  return href ? (
    <a className="gama-guide-card gama-guide-card-link" href={href}>{inner}</a>
  ) : (
    <div className="gama-guide-card">{inner}</div>
  );
};

export const GamaGuideNote = ({ kind = "info", children }) => (
  <aside className={"gama-guide-note gama-guide-note-" + kind} aria-label={kind === "warning" ? "Important limitation" : "Important information"}>
    <span className="gama-guide-note-symbol" aria-hidden="true">{kind === "warning" ? "!" : kind === "check" ? "✓" : "i"}</span>
    <div className="gama-guide-note-body">{children}</div>
  </aside>
);
export const GamaGuideTabs = ({ children }) => <div className="gama-guide-panels">{children}</div>;
export const GamaGuideTab = ({ title, children }) => (
  <section className="gama-guide-panel">
    <h3>{title}</h3>
    <div>{children}</div>
  </section>
);
export const GamaGuideSteps = ({ children }) => <ol className="gama-guide-steps">{children}</ol>;
export const GamaGuideStep = ({ title, children }) => (
  <li><div><h3>{title}</h3><div>{children}</div></div></li>
);
export const GamaGuideAccordions = ({ children }) => <div className="gama-guide-faqs">{children}</div>;
export const GamaGuideAccordion = ({ title, defaultOpen = false, children }) => (
  <details className="gama-guide-faq" open={defaultOpen ? true : undefined}>
    <summary>{title}<span aria-hidden="true">+</span></summary>
    <div className="gama-guide-faq-content">{children}</div>
  </details>
);
