/** GAMA Works Services overview continuation.
 * Replaces the old documentation-styled lower half with one consistent,
 * high-contrast page experience. The original source is kept in
 * snippets/service-content/services.mdx for content traceability.
 */
const outcomes = [
  {n:"01", priority:"Establish a professional online presence", category:"WebReady Bundle", engagement:"Packaged recurring service",href:"/gama-web-ready-bundle"},
  {n:"02", priority:"Reduce repetitive work and connect tools", category:"Automation & Workflow Design", engagement:"Scoped workflow / integration",href:"/automation-workflow-design"},
  {n:"03", priority:"Build, fix, or maintain specialized technology",category:"IT Services",engagement:"Assessment / project / support",href:"/it-services"},
  {n:"04", priority:"Improve shared decisions, grants, and funding",category:"Governance & Funding",engagement:"Health check / program / advisory",href:"/governance-funding-systems"}
];

const services = [
  {
    number:"01",badge:"GAMA WEBREADY",heading:"An online presence that works for your business.",
    summary:"A professional website or blog, business email, hosting, backups, and post-launch support under one packaged service.",
    href:"/gama-web-ready-bundle",cta:"Explore WebReady",
    price:"$29.99/month or $299.98/year",
    benefits:["Design and hosting within the agreed WebReady scope","Business email, backups, onboarding, and covered post-launch support","Clear plan-specific domain, trial, guarantee, and ownership terms"],
    ideal:"A small business needs a credible digital home without coordinating several vendors.",
    alternative:"A large e-commerce platform or extensive custom application needs separate technical scoping.",
    visual:"web"
  },
  {
    number:"02",badge:"AUTOMATION",heading:"Less time moving information. More time moving forward.",
    summary:"Reduce repeated work, disconnected handoffs, forgotten follow-ups, and manual administration.",
    href:"/automation-workflow-design",cta:"Explore automation",
    price:"Custom scoped",
    benefits:["Map existing processes, ownership, and sources of friction","Connect tools, automate routing, reminders, and approvals","Introduce suitable AI assistance with clear human review and documentation"],
    ideal:"A repeatable process is measurable and worth improving.",
    alternative:"A standalone application or broad infrastructure migration may fit IT Services better.",
    visual:"automation"
  },
  {
    number:"03",badge:"IT SERVICES",heading:"Reliable technical systems for work beyond the basics.",
    summary:"Custom apps, portals, dashboards, APIs, hosting, migrations, cleanup, and ongoing technical assistance.",
    href:"/it-services",cta:"Explore IT Services",
    price:"Custom scoped",
    benefits:["Custom web applications, internal tools, and integrations","Cloud infrastructure, DNS, business email, and deployments","Technical assessments, migration planning, and ongoing support when agreed"],
    ideal:"An existing system limits operations or a specific custom build is needed.",
    alternative:"A straightforward website may be better served by WebReady.",
    visual:"it"
  },
  {
    number:"04",badge:"GOVERNANCE & FUNDING",heading:"Make shared decisions easier to explain and trust.",
    summary:"Build clearer governance, grants programs, resource allocation processes, and accountable funding operations.",
    href:"/governance-funding-systems",cta:"Explore Governance & Funding",
    price:"Custom scoped",
    benefits:["Governance health checks, proposal processes, councils, and delegates","Grants review and program operations, funding frameworks, and stakeholder coordination","Decision records, reporting, evidence, retrospectives, and fractional advisory"],
    ideal:"Decision authority, stakeholder coordination, or funding follow-through needs clearer structure.",
    alternative:"If the underlying need is only software, IT Services may be a better fit.",
    visual:"governance"
  }
];

const engagements = [
  {n:"01",heading:"Packaged offer",tag:"DEFINED PRODUCT",text:"WebReady's published plan lists inclusions, prices, onboarding, and the applicable conditional trial or guarantee terms."},
  {n:"02",heading:"Focused assessment",tag:"FIND THE RIGHT PATH",text:"A bounded review of technical, workflow, or governance needs that produces agreed findings and prioritized recommendations."},
  {n:"03",heading:"Custom project",tag:"AGREED DELIVERABLES",text:"An application, integration, migration, workflow, or funding program with written scope, responsibilities, fees, and acceptance criteria."},
  {n:"04",heading:"Ongoing support",tag:"DEFINED CONTINUITY",text:"A recurring relationship with explicit responsibilities, service levels, availability, and exclusions."}
];

const faqs = [
  ["What if I don't know which service fits?","Tell us the challenge and desired outcome. We can help determine whether WebReady, an assessment, automation, IT development, or governance support makes sense."],
  ["Can I start with a smaller project?","Yes. A bounded first step is often more useful than an oversized transformation. Scope depends on the actual requirements."],
  ["Can you work with our existing tools?","Often, yes. Integrating or improving an existing system can be more practical than replacing it. Technical limitations and permissions must be assessed."],
  ["Can one project involve more than one service?","Yes, where useful. For example, automation can complement a website, or custom IT can support a grants program. Each workstream is scoped appropriately."],
  ["Are all services fixed price?","No. WebReady has published monthly and annual plans. Automation, IT, and governance work is quoted after discovery and agreement on scope."],
  ["Is ongoing support included with everything?","No. Support and maintenance depend on the selected product or the specific written agreement."],
  ["Do you guarantee revenue, leads, search rankings, or grant approvals?","No. The work focuses on usable systems and accountable processes. External business results and funding decisions are influenced by factors outside the engagement."]
];

const ServiceIllustration = ({kind}) => (
  <div className={"gama-svc-detail-visual gama-svc-detail-visual-" + kind} aria-hidden="true">
    <div className="gama-svc-detail-visual-glow"></div>
    {kind === "web" && (
      <div className="gama-svc-detail-display gama-svc-detail-display-web">
        <div className="gama-svc-display-top">● ● ● <span>WEB PRESENCE</span></div>
        <div className="gama-svc-display-body"><i></i><i></i><i></i><b></b></div>
        <div className="gama-svc-display-tile"></div>
      </div>
    )}
    {kind === "automation" && (
      <div className="gama-svc-detail-flow">
        <span>INPUT</span><i></i><span className="gama-svc-detail-focus">FLOW</span><i></i><span>REVIEW</span><i></i><span className="gama-svc-detail-focus">DONE ✓</span>
      </div>
    )}
    {kind === "it" && (
      <div className="gama-svc-detail-modules"><span>API</span><span>APP</span><span>DATA</span><span>OPS</span></div>
    )}
    {kind === "governance" && (
      <div className="gama-svc-detail-orbits"><span>PROPOSAL</span><span>REVIEW</span><strong>DECIDE</strong><span>FUND</span><span>EVIDENCE</span></div>
    )}
  </div>
);

export const GamaServicesDeepDive = () => (
  <>
    <section className="gama-svc-detail-intro" id="service-details" aria-labelledby="gama-svc-detail-title">
      <div className="gama-svc-container gama-svc-detail-intro-grid">
        <div>
          <p className="gama-svc-kicker">START WITH YOUR CHALLENGE</p>
          <h2 id="gama-svc-detail-title">The right service starts with <em>the right question.</em></h2>
          <p>Four service pathways, one operating philosophy: understand the problem, agree on what useful looks like, and build something that actually fits.</p>
        </div>
        <div className="gama-svc-contact-grid">
          <a className="gama-svc-contact-card" href="https://cal.com/wasabi/gama">
            <span className="gama-svc-contact-icon" aria-hidden="true">◷</span>
            <h3>Discuss your needs</h3>
            <p>Book a conversation about your organization, the bottleneck, and the best starting point.</p>
            <span className="gama-svc-contact-link">Book a discovery call <span aria-hidden="true">↗</span></span>
          </a>
          <a className="gama-svc-contact-card" href="/contact">
            <span className="gama-svc-contact-icon" aria-hidden="true">✉</span>
            <h3>Send a project brief</h3>
            <p>Prefer writing? Share what needs to change, your current tools, and your desired outcome.</p>
            <span className="gama-svc-contact-link">Contact GAMA Works <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </div>
    </section>

    <section className="gama-svc-outcomes" aria-labelledby="gama-svc-outcomes-title">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div><p className="gama-svc-kicker">CHOOSE BY OUTCOME</p><h2 id="gama-svc-outcomes-title">What do you need <em>to improve?</em></h2></div>
          <p>Don't start by shopping for software. Start with the business outcome, then choose the type of engagement that gets you there.</p>
        </div>
        <div className="gama-svc-outcome-board">
          <div className="gama-svc-outcome-head" aria-hidden="true"><span>BUSINESS PRIORITY</span><span>START WITH</span><span>TYPICAL ENGAGEMENT</span></div>
          {outcomes.map((outcome) => (
            <a className="gama-svc-outcome-row" key={outcome.n} href={outcome.href}>
              <span className="gama-svc-outcome-priority"><b>{outcome.n}</b>{outcome.priority}</span>
              <strong>{outcome.category}</strong>
              <span className="gama-svc-outcome-engagement">{outcome.engagement}<b aria-hidden="true">↗</b></span>
            </a>
          ))}
        </div>
        <p className="gama-svc-outcome-caption">Services can work together when needed, but every engagement should have a distinct, understandable scope.</p>
      </div>
    </section>

    <section className="gama-svc-offerings" aria-labelledby="gama-svc-offerings-title">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div><p className="gama-svc-kicker">OUR SERVICES · IN DETAIL</p><h2 id="gama-svc-offerings-title">Choose your path.<br /><em>Know what comes next.</em></h2></div>
          <p>Each offering has a clear purpose, fit, and next step. We don't recommend more than the problem actually calls for.</p>
        </div>
        <div className="gama-svc-offering-stack">
          {services.map((service) => (
            <article key={service.number} className={"gama-svc-offering gama-svc-offering-" + service.visual}>
              <div className="gama-svc-offering-main">
                <div className="gama-svc-offering-top"><span>CAPABILITY {service.number}</span><span>{service.badge}</span></div>
                <h3>{service.heading}</h3>
                <p className="gama-svc-offering-description">{service.summary}</p>
                <ul className="gama-svc-benefits">{service.benefits.map((benefit,idx)=><li key={idx}><span aria-hidden="true">✓</span>{benefit}</li>)}</ul>
                <div className="gama-svc-fit-row">
                  <div><b>STRONG FIT</b><p>{service.ideal}</p></div>
                  <div><b>CONSIDER ANOTHER PATH</b><p>{service.alternative}</p></div>
                </div>
                <div className="gama-svc-offering-bottom">
                  <span>{service.price}</span>
                  <a href={service.href}>{service.cta} <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <ServiceIllustration kind={service.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="gama-svc-process-area" aria-labelledby="gama-svc-process-title">
      <div className="gama-svc-container gama-svc-process-grid">
        <div>
          <p className="gama-svc-kicker">HOW THE PIECES CONNECT</p>
          <h2 id="gama-svc-process-title">Start focused.<br /><em>Expand with purpose.</em></h2>
          <p>A site can bring customers in. Automation can improve the work behind the site. IT Services can build what standard tools can't. Governance can make complex shared decisions accountable.</p>
          <p className="gama-svc-process-caveat">This isn't a mandatory sequence. Most organizations need one good next step—not four simultaneous projects.</p>
        </div>
        <ol className="gama-svc-process-list">
          <li><span>01</span><div><h3>Be findable</h3><p>Give people a clear way to understand and contact your business.</p></div></li>
          <li><span>02</span><div><h3>Reduce friction</h3><p>Connect handoffs, follow-ups, internal work, and reporting.</p></div></li>
          <li><span>03</span><div><h3>Build what you need</h3><p>Create fit-for-purpose applications and technical infrastructure.</p></div></li>
          <li><span>04</span><div><h3>Coordinate responsibly</h3><p>Clarify decision authority, resource allocation, and follow-through.</p></div></li>
        </ol>
      </div>
    </section>

    <section className="gama-svc-engagements" aria-labelledby="gama-svc-engagements-title">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div><p className="gama-svc-kicker">HOW WE SCOPE WORK</p><h2 id="gama-svc-engagements-title">A clear engagement.<br /><em>No mystery deliverables.</em></h2></div>
          <p>WebReady has published plans; custom services are quoted after discovery. We agree on responsibilities and acceptance criteria before implementation.</p>
        </div>
        <div className="gama-svc-engagement-grid">
          {engagements.map((item)=><article className="gama-svc-engagement-card" key={item.n}>
            <div><span>{item.n}</span><span>{item.tag}</span></div>
            <h3>{item.heading}</h3><p>{item.text}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="gama-svc-proof" aria-labelledby="gama-svc-proof-title">
      <div className="gama-svc-container gama-svc-proof-grid">
        <div><p className="gama-svc-kicker">WHY GAMA WORKS</p><h2 id="gama-svc-proof-title">A system is only useful when <em>people can operate it.</em></h2></div>
        <div>
          <p>We combine technical implementation with attention to processes, roles, accountability, and long-term maintainability.</p>
          <p>The approach draws on the founder's IT entrepreneurship beginning in 2006 and later work in public-goods governance, grants, and regenerative coordination since 2021. Those experiences aren't presented as GAMA Works client engagements.</p>
          <a href="/background">Read the founder's background <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section className="gama-svc-faq-section" aria-labelledby="gama-svc-faq-title">
      <div className="gama-svc-container gama-svc-faq-grid">
        <div><p className="gama-svc-kicker">GOOD QUESTIONS</p><h2 id="gama-svc-faq-title">Before we build <em>anything.</em></h2><p>Useful answers to common questions about scope, pricing, existing systems, and outcomes.</p></div>
        <div className="gama-svc-faq-list">
          {faqs.map((entry,i)=><details className="gama-svc-faq-item" key={i}>
            <summary>{entry[0]}<span aria-hidden="true">+</span></summary>
            <p>{entry[1]}</p>
          </details>)}
        </div>
      </div>
    </section>

    <section className="gama-svc-closing" aria-labelledby="gama-svc-closing-title">
      <div className="gama-svc-container">
        <p className="gama-svc-kicker">START A USEFUL CONVERSATION</p>
        <h2 id="gama-svc-closing-title">Bring the challenge.<br /><em>We'll find a practical path.</em></h2>
        <p>Tell us what isn't working, what you'd like to change, and what success would look like for your organization.</p>
        <div className="gama-svc-actions">
          <a className="gama-svc-button gama-svc-button-primary" href="https://cal.com/wasabi/gama">Book a discovery call <span aria-hidden="true">↗</span></a>
          <a className="gama-svc-button gama-svc-button-outline" href="/contact">Send your brief <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  </>
);
