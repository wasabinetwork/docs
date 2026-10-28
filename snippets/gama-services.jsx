/**
 * GAMA Works: Services visual experience.
 * Page entrypoints are tiny MDX imports, avoiding dashboard round-trip failures
 * from very deeply nested JSX in an MDX body.
 * See also: snippets/gama-home.jsx and root style.css.
 */

const offerings = {
  webready: {
    number: "01",
    eyebrow: "GAMA WEBREADY BUNDLE",
    titleA: "Pay for hosting.",
    titleB: "We build your website.",
    intro: "A professional website or blog, business email, hosting, backups, and post-launch support—without coordinating five different vendors.",
    primary: "Explore the monthly plan",
    primaryUrl: "https://cal.com/wasabi/gama-webready-bundle-monthly",
    secondary: "See full plan terms",
    note: "Packaged web presence · Published recurring plans",
    features: [
      ["Website, hosting & email", "A practical digital home, with the core setup handled under one approved scope."],
      ["Backups & launch support", "Technical setup, backups, and a 90-day complementary post-launch support window for covered issues."],
      ["Monthly or yearly", "$29.99/month with a conditional 30-day money-back guarantee, or $299.98/year with a conditional 30-day free trial and an eligible first-year standard domain."]
    ]
  },
  automation: {
    number: "02",
    eyebrow: "AUTOMATION & WORKFLOW DESIGN",
    titleA: "Less manual work.",
    titleB: "More momentum.",
    intro: "Map the work, connect the right tools, and introduce reliable automations—while keeping human judgment where it belongs.",
    primary: "Discuss a workflow",
    primaryUrl: "https://cal.com/wasabi/gama",
    secondary: "Explore engagement details",
    note: "Discovery-led · Custom scoped",
    features: [
      ["Map the friction", "Understand the current process and identify repeatable work worth improving."],
      ["Connect the system", "Route tasks, information, and approvals across tools with thoughtfully scoped automation."],
      ["Keep people in control", "Design exception handling, visibility, review, and human approval into important workflows."]
    ]
  },
  it: {
    number: "03",
    eyebrow: "IT SERVICES",
    titleA: "Build beyond",
    titleB: "the basics.",
    intro: "Custom applications, technical infrastructure, migrations, APIs, and ongoing support for businesses that need something more specific than an off-the-shelf solution.",
    primary: "Talk about your system",
    primaryUrl: "https://cal.com/wasabi/gama",
    secondary: "Explore technical services",
    note: "Assessment · Scoped project · Ongoing support",
    features: [
      ["Applications & internal tools", "Design interfaces, portals, dashboards, and systems around real operating requirements."],
      ["Infrastructure & integrations", "Connect APIs, deployments, domains, cloud services, and existing business systems."],
      ["Continuity & maintainability", "Improve existing technology, document it well, and define realistic support boundaries."]
    ]
  },
  governance: {
    number: "04",
    eyebrow: "GOVERNANCE & FUNDING SYSTEMS",
    titleA: "Funding systems",
    titleB: "people can trust.",
    intro: "Bring clarity to shared decisions, proposals, grants operations, responsible funding flows, and the evidence that connects decisions to outcomes.",
    primary: "Discuss your challenge",
    primaryUrl: "https://cal.com/wasabi/gama",
    secondary: "Explore the full approach",
    note: "Health checks · Program design · Fractional operations",
    features: [
      ["Clear responsibilities", "Define decision rights, governance roles, and transparent review processes."],
      ["Credible funding operations", "Design review, coordination, documentation, and responsible execution workflows."],
      ["Evidence & accountability", "Make follow-through observable, and connect decisions to reporting and learning."]
    ]
  }
};

const pathways = [
  {
    number: "01",
    label: "WEBREADY",
    title: "Give your business a proper digital home.",
    description: "Website, business email, hosting, backups, and post-launch support.",
    footer: "From $29.99/month",
    href: "/gama-web-ready-bundle",
    visual: "webready"
  },
  {
    number: "02",
    label: "AUTOMATION",
    title: "Get time back from repetitive work.",
    description: "Simpler processes, connected tools, and human-controlled automation.",
    footer: "Custom scoped",
    href: "/automation-workflow-design",
    visual: "automation"
  },
  {
    number: "03",
    label: "IT SERVICES",
    title: "Make complex technology easier to run.",
    description: "Applications, integrations, infrastructure, and ongoing technical help.",
    footer: "Custom scoped",
    href: "/it-services",
    visual: "it"
  },
  {
    number: "04",
    label: "GOVERNANCE",
    title: "Turn shared decisions into trusted operations.",
    description: "Clear governance, grants processes, and accountable funding systems.",
    footer: "Custom scoped",
    href: "/governance-funding-systems",
    visual: "governance"
  }
];

const GamaButton = ({ href, children, secondary = false }) => (
  <a className={secondary ? "gama-svc-button gama-svc-button-outline" : "gama-svc-button gama-svc-button-primary"} href={href}>
    {children} <span aria-hidden="true">{secondary ? "→" : "↗"}</span>
  </a>
);

const GamaNetworkArt = () => (
  <div className="gama-svc-network" role="img" aria-label="Four interconnected capabilities: websites, automation, IT systems, and governance, linked through a shared GAMA Works coordination hub.">
    <div className="gama-svc-network-top"><span className="gama-svc-dot" aria-hidden="true"></span>CONNECTED CAPABILITIES <span>01 / 04</span></div>
    <div className="gama-svc-network-orbits" aria-hidden="true">
      <div className="gama-svc-network-core"><span>G</span><small>WORKS</small></div>
      <div className="gama-svc-network-node gama-svc-network-web"><b>▣</b><strong>Web</strong><small>Presence</small></div>
      <div className="gama-svc-network-node gama-svc-network-auto"><b>⇢</b><strong>Workflow</strong><small>Automation</small></div>
      <div className="gama-svc-network-node gama-svc-network-it"><b>⌘</b><strong>IT</strong><small>Systems</small></div>
      <div className="gama-svc-network-node gama-svc-network-gov"><b>◎</b><strong>Shared</strong><small>Decisions</small></div>
    </div>
    <div className="gama-svc-network-bottom">Different challenges. One practical approach. <span aria-hidden="true">↗</span></div>
  </div>
);

const GamaWebreadyArt = () => (
  <div className="gama-svc-product-visual gama-svc-product-web" role="img" aria-label="A responsive business website displayed on a desktop browser and smartphone, surrounded by email and backup indicators.">
    <div className="gama-svc-device-browser">
      <div className="gama-svc-device-bar"><i></i><i></i><i></i><b></b></div>
      <div className="gama-svc-device-content">
        <div className="gama-svc-device-copy"><i></i><i></i><i></i><b></b></div>
        <div className="gama-svc-device-picture"></div>
      </div>
      <div className="gama-svc-device-cards"><i></i><i></i><i></i></div>
    </div>
    <div className="gama-svc-device-phone"><div></div><i></i><i></i><b></b></div>
    <div className="gama-svc-device-satellite gama-svc-device-email">✉<small>EMAIL</small></div>
    <div className="gama-svc-device-satellite gama-svc-device-backup">◴<small>BACKUPS</small></div>
  </div>
);

const GamaAutomationArt = () => (
  <div className="gama-svc-product-visual gama-svc-product-auto" role="img" aria-label="Incoming business information flows into a structured workflow, passes a human approval checkpoint, and emerges as completed tasks.">
    <div className="gama-svc-flow-head">FROM INPUT TO OUTCOME</div>
    <div className="gama-svc-flow-line" aria-hidden="true">
      <div className="gama-svc-flow-box"><span>☰</span><small>INPUTS</small></div>
      <i></i>
      <div className="gama-svc-flow-box gama-svc-flow-box-hot"><span>⚙</span><small>WORKFLOW</small></div>
      <i></i>
      <div className="gama-svc-flow-box"><span>◎</span><small>REVIEW</small></div>
      <i></i>
      <div className="gama-svc-flow-box gama-svc-flow-box-done"><span>✓</span><small>DONE</small></div>
    </div>
    <p>HUMAN APPROVAL INCLUDED</p>
  </div>
);

const GamaItArt = () => (
  <div className="gama-svc-product-visual gama-svc-product-it" role="img" aria-label="A central application layer connected to APIs, cloud infrastructure, data storage, and supporting system modules.">
    <div className="gama-svc-it-links" aria-hidden="true"></div>
    <div className="gama-svc-it-core" aria-hidden="true"><div><i></i><i></i><i></i></div><strong>APPLICATION</strong><span>◫ ━ ━</span></div>
    <div className="gama-svc-it-node gama-svc-it-api" aria-hidden="true"><span>⇄</span><small>APIs</small></div>
    <div className="gama-svc-it-node gama-svc-it-cloud" aria-hidden="true"><span>☁</span><small>CLOUD</small></div>
    <div className="gama-svc-it-node gama-svc-it-data" aria-hidden="true"><span>▤</span><small>DATA</small></div>
    <div className="gama-svc-it-node gama-svc-it-support" aria-hidden="true"><span>⚙</span><small>SUPPORT</small></div>
  </div>
);

const GamaGovernanceArt = () => (
  <div className="gama-svc-product-visual gama-svc-product-gov" role="img" aria-label="A transparent governance process connecting proposals, review, shared decisions, responsible funding, and evidence.">
    <div className="gama-svc-gov-orbit" aria-hidden="true">
      <div className="gama-svc-gov-core"><span>✓</span><small>DECIDE</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-propose">▤<small>PROPOSE</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-review">◎<small>REVIEW</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-fund">⇥<small>FUND</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-evidence">◇<small>EVIDENCE</small></div>
    </div>
  </div>
);

const GamaIllustration = ({ kind }) => {
  if (kind === "webready") return <GamaWebreadyArt />;
  if (kind === "automation") return <GamaAutomationArt />;
  if (kind === "it") return <GamaItArt />;
  return <GamaGovernanceArt />;
};

export const GamaServicesOverview = () => (
  <>
    <section className="gama-svc-hero gama-svc-overview" aria-labelledby="gama-svc-overview-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span> FOUR PATHWAYS · ONE PRACTICAL APPROACH</p>
          <h1 id="gama-svc-overview-title">Build better.<br /><em>Operate smarter.</em></h1>
          <p className="gama-svc-lead">Professional websites, thoughtful automation, dependable technical systems, and clearer governance—built around the real challenge you're trying to solve.</p>
          <p className="gama-svc-sublead">Start with one thing that matters. Add capabilities only when they create real value.</p>
          <div className="gama-svc-actions">
            <GamaButton href="https://cal.com/wasabi/gama">Talk through your project</GamaButton>
            <GamaButton href="#gama-svc-pathways" secondary>Explore services</GamaButton>
          </div>
        </div>
        <GamaNetworkArt />
      </div>
    </section>

    <div className="gama-svc-principles">
      <div className="gama-svc-container">
        <span><b>01</b> Understand the challenge</span>
        <span><b>02</b> Design the right system</span>
        <span><b>03</b> Make it easier to operate</span>
      </div>
    </div>

    <section className="gama-svc-pathways" id="gama-svc-pathways" aria-labelledby="gama-svc-pathways-title">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div><p className="gama-svc-kicker">FIND YOUR STARTING POINT</p><h2 id="gama-svc-pathways-title">Different needs.<br /><em>Focused solutions.</em></h2></div>
          <p>Each service stands on its own, but the pieces can work together as your business evolves.</p>
        </div>
        <div className="gama-svc-pathway-grid">
          {pathways.map((service) => (
            <a className={"gama-svc-pathway gama-svc-pathway-" + service.visual} href={service.href} key={service.number}>
              <span className="gama-svc-pathway-meta"><b>{service.number}</b> {service.label} <span aria-hidden="true">↗</span></span>
              <div className={"gama-svc-pathway-symbol gama-svc-pathway-symbol-" + service.visual} aria-hidden="true">
                <span>{service.visual === "webready" ? "▣" : service.visual === "automation" ? "⇢" : service.visual === "it" ? "⌘" : "◎"}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="gama-svc-pathway-link">{service.footer} <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
        <div className="gama-svc-pathway-note">Custom automation, IT, and governance projects are assessed and quoted based on scope. WebReady plan inclusions and applicable terms are on its product page.</div>
      </div>
    </section>

    <section className="gama-svc-bridge">
      <div className="gama-svc-container gama-svc-bridge-grid">
        <div><p className="gama-svc-kicker">HOW WE WORK</p><h2>Clarity comes<br /><em>before complexity.</em></h2></div>
        <div>
          <p>Most problems don't need a giant transformation project. We identify the bottleneck, agree on a meaningful scope, and build the simplest useful solution with room to evolve.</p>
          <GamaButton href="#service-details" secondary>See detailed service guide</GamaButton>
        </div>
      </div>
    </section>
  </>
);

export const GamaServiceExperience = ({ kind }) => {
  const service = offerings[kind] || offerings.it;
  return (
    <>
      <section className={"gama-svc-hero gama-svc-individual gama-svc-hero-" + kind} aria-labelledby="gama-svc-service-title">
        <div className="gama-svc-container gama-svc-hero-grid">
          <div className="gama-svc-hero-copy">
            <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span> {service.number} / {service.eyebrow}</p>
            <h1 id="gama-svc-service-title">{service.titleA}<br /><em>{service.titleB}</em></h1>
            <p className="gama-svc-lead">{service.intro}</p>
            <div className="gama-svc-actions">
              <GamaButton href={service.primaryUrl}>{service.primary}</GamaButton>
              <GamaButton href="#service-details" secondary>{service.secondary}</GamaButton>
            </div>
            <div className="gama-svc-scope-note">{service.note}</div>
          </div>
          <GamaIllustration kind={kind} />
        </div>
      </section>

      {kind === "webready" && (
        <div className="gama-svc-pricing">
          <div className="gama-svc-container gama-svc-pricing-grid">
            <a href="https://cal.com/wasabi/gama-webready-bundle-monthly"><span>MONTHLY</span><strong>$29.99 <small>/ month</small></strong><em>30-day money-back guarantee, subject to service terms ↗</em></a>
            <a href="https://cal.com/wasabi/gama-webready-bundle-yearly"><span>YEARLY</span><strong>$299.98 <small>/ year</small></strong><em>30-day free trial and eligible first-year standard domain, subject to terms ↗</em></a>
          </div>
        </div>
      )}

      <section className="gama-svc-highlights" aria-labelledby="gama-svc-highlights-title">
        <div className="gama-svc-container">
          <div className="gama-svc-section-intro">
            <div><p className="gama-svc-kicker">WHAT MATTERS</p><h2 id="gama-svc-highlights-title">Built for the work<br /><em>behind the work.</em></h2></div>
            <p>Practical choices, deliberate scope, and a clear operating relationship—not complexity for its own sake.</p>
          </div>
          <div className="gama-svc-highlight-grid">
            {service.features.map((feature, index) => (
              <div className="gama-svc-highlight" key={index}>
                <span>0{index + 1}</span>
                <h3>{feature[0]}</h3>
                <p>{feature[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gama-svc-service-next">
        <div className="gama-svc-container gama-svc-service-next-grid">
          <div><p className="gama-svc-kicker">BEFORE YOU DECIDE</p><h2>Know what you're getting.</h2></div>
          <div><p>The detailed guide below covers scope, fit, process, commercial terms, and common questions. For custom engagements, a written scope defines deliverables, responsibilities, and fees before work begins.</p><a href="#service-details">Read the complete service guide <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>
    </>
  );
};
