/* GAMA Works editorial intros for the original English About and Contact pages.
   Reuses the approved accessible bilingual design system. */
import { GamaEmailText } from '/snippets/gama-email.jsx';

const HistoryGraphic =()=>(
 <div className="gama-es-about-art" role="img" aria-label="Founder's experience timeline: IT entrepreneurship since 2006, governance since 2021, practical systems today">
 <div className="gama-es-about-art-top">CONNECTED EXPERIENCE <span>01—03</span></div>
 <div className="gama-es-about-art-timeline">
  <div className="gama-es-about-art-entry"><b>2006</b><span>BUSINESS & IT</span><small>Technology services and operations</small></div>
  <div className="gama-es-about-art-entry"><b>2021+</b><span>GOVERNANCE</span><small>Coordination and public goods</small></div>
  <div className="gama-es-about-art-entry"><b>TODAY</b><span>USEFUL SYSTEMS</span><small>Technology, operations, impact</small></div>
 </div>
 <div className="gama-es-about-art-bottom">Founder experience informs the agency's approach <span>↗</span></div>
 </div>
);
export const GamaAboutEn=()=>(
 <>
 <section className="gama-svc-hero gama-es-editorial-hero" aria-labelledby="gama-about-en-title"><div className="gama-svc-container gama-svc-hero-grid"><div className="gama-svc-hero-copy">
 <p className="gama-svc-kicker">ABOUT GAMA WORKS / PURPOSE & EXPERIENCE</p>
 <h1 id="gama-about-en-title">Technology matters.<br/><em>The people operating it matter more.</em></h1>
 <p className="gama-svc-lead">We connect our founder's experience in business technology with digital systems, governance, and practical operations to solve meaningful problems.</p>
 <div className="gama-svc-actions"><a className="gama-svc-button gama-svc-button-primary" href="/services">Explore our services ↗</a><a className="gama-svc-button gama-svc-button-outline" href="#about-details">Read our story ↓</a></div>
 <p className="gama-svc-scope-note">Founder professional history · Each agency engagement independently scoped</p>
 </div><HistoryGraphic/></div></section>
 <div className="gama-svc-principles"><div className="gama-svc-container"><span><b>01</b> Problem before platform</span><span><b>02</b> Clear responsibilities</span><span><b>03</b> Long-term usefulness</span></div></div>
 <section className="gama-es-manifesto"><div className="gama-svc-container gama-es-manifesto-grid"><div><p className="gama-svc-kicker">OUR OPERATING PHILOSOPHY</p><h2>Less complexity.<br/><em>More real capacity.</em></h2></div><div><p>Useful technology makes work easier to understand, own, and improve.</p><p>We choose solutions for the people who actually operate them—not merely for an impressive presentation.</p></div></div></section>
 </>
);
export const GamaContactEn=()=>(
 <>
 <section className="gama-svc-hero gama-es-editorial-hero gama-es-contact-hero" aria-labelledby="gama-contact-en-title"><div className="gama-svc-container gama-svc-hero-grid"><div className="gama-svc-hero-copy">
 <p className="gama-svc-kicker">LET'S TALK / GAMA WORKS</p>
 <h1 id="gama-contact-en-title">Bring the challenge.<br/><em>Find a practical next step.</em></h1>
 <p className="gama-svc-lead">Websites, workflows, custom applications, or coordination systems: tell us what needs to work better.</p>
 <div className="gama-svc-actions"><a className="gama-svc-button gama-svc-button-primary" href="mailto:hello%40gama.works?subject=GAMA%20Works%20Project%20Inquiry">Email your project ↗</a><a className="gama-svc-button gama-svc-button-outline" href="https://cal.com/wasabi/gama">Book a conversation ↗</a></div>
 <p className="gama-svc-scope-note">Project inquiries · No technical specification required to start</p>
 </div><div className="gama-es-contact-art" role="img" aria-label="Two ways to contact GAMA Works: email or a discovery conversation">
 <div className="gama-es-contact-art-top">FROM CHALLENGE TO CONVERSATION <span>01—02</span></div>
 <div className="gama-es-contact-art-stack"><div className="gama-es-contact-art-tile"><span className="gama-es-contact-art-symbol">✉</span><div><strong>EMAIL</strong><small><GamaEmailText/></small></div></div><div className="gama-es-contact-art-connector">↓</div><div className="gama-es-contact-art-tile"><span className="gama-es-contact-art-symbol">◷</span><div><strong>DISCUSS</strong><small>Scope the problem before choosing tools</small></div></div></div>
 <div className="gama-es-contact-art-bottom">Start with the need, not the software.</div>
 </div></div></section>
 <section className="gama-es-contact-options"><div className="gama-svc-container">
 <div className="gama-svc-section-intro"><div><p className="gama-svc-kicker">CHOOSE YOUR FIRST STEP</p><h2>Two simple ways<br/><em>to get started.</em></h2></div><p>Share your organization, challenge, intended outcome, and timeline. Never include credentials in an initial message.</p></div>
 <div className="gama-es-contact-channels"><a className="gama-es-contact-channel" href="mailto:hello%40gama.works?subject=GAMA%20Works%20Project%20Inquiry"><span className="gama-es-contact-channel-meta">01 <span>↗</span></span><span className="gama-es-contact-channel-icon">✉</span><h3>Email us</h3><p>Tell us what you want to build or improve.</p><span className="gama-es-contact-channel-action"><GamaEmailText/> →</span></a>
 <a className="gama-es-contact-channel" href="https://cal.com/wasabi/gama"><span className="gama-es-contact-channel-meta">02 <span>↗</span></span><span className="gama-es-contact-channel-icon">◷</span><h3>Book a conversation</h3><p>Discuss a practical way forward.</p><span className="gama-es-contact-channel-action">Discovery calendar →</span></a></div>
 </div></section>
 </>
);
