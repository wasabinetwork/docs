/**
 * GAMA Works: Spanish About + Contact experience.
 * Keeps public MDX minimal, and uses the approved Services typography,
 * contrast-safe palettes and responsive styles.
 */
const channels = [
  { number: "01", title: "Escríbenos", subtitle: "Cuéntanos qué necesitas mejorar.", action: "hello@gama.works", href: "mailto:hello@gama.works?subject=GAMA%20Works%20Project%20Inquiry", icon: "✉" },
  { number: "02", title: "Conversemos", subtitle: "Explora una solución con alcance realista.", action: "Agendar conversación", href: "https://cal.com/wasabi/gama", icon: "◷" }
];

const AboutTimeline = () => (
  <div className="gama-es-about-art" role="img" aria-label="Línea temporal de experiencia del fundador: empresa de TI en 2006, coordinación y gobernanza a partir de 2021, y sistemas digitales y regenerativos actuales.">
    <div className="gama-es-about-art-top"><span className="gama-svc-dot" aria-hidden="true"></span>EXPERIENCIA QUE CONECTA DISCIPLINAS <span>01—03</span></div>
    <div className="gama-es-about-art-timeline" aria-hidden="true">
      <div className="gama-es-about-art-entry"><b>2006</b><span>NEGOCIOS Y TI</span><small>Servicios empresariales · Infraestructura</small></div>
      <div className="gama-es-about-art-entry"><b>2021+</b><span>COORDINACIÓN</span><small>Gobernanza · Bienes públicos</small></div>
      <div className="gama-es-about-art-entry"><b>HOY</b><span>SISTEMAS ÚTILES</span><small>Tecnología · Operaciones · Impacto</small></div>
    </div>
    <div className="gama-es-about-art-bottom">La experiencia del fundador informa el enfoque de la agencia. <span>↗</span></div>
  </div>
);

export const GamaAboutEs = () => (
  <>
    <section className="gama-svc-hero gama-es-editorial-hero" aria-labelledby="gama-about-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span>SOBRE GAMA WORKS / HISTORIA Y PROPÓSITO</p>
          <h1 id="gama-about-title">La tecnología importa.<br /><em>Las personas que la operan, más.</em></h1>
          <p className="gama-svc-lead">Conectamos décadas de experiencia del fundador en tecnología empresarial con sistemas digitales, gobernanza y operaciones prácticas para resolver problemas reales.</p>
          <div className="gama-svc-actions">
            <a className="gama-svc-button gama-svc-button-primary" href="/es/services">Explorar nuestros servicios <span aria-hidden="true">↗</span></a>
            <a className="gama-svc-button gama-svc-button-outline" href="#historia-completa">Conoce nuestra historia <span aria-hidden="true">↓</span></a>
          </div>
          <p className="gama-svc-scope-note">Experiencia profesional del fundador · Proyectos con alcances propios</p>
        </div>
        <AboutTimeline />
      </div>
    </section>
    <div className="gama-svc-principles">
      <div className="gama-svc-container">
        <span><b>01</b> Problema antes que plataforma</span>
        <span><b>02</b> Responsabilidades claras</span>
        <span><b>03</b> Sistemas útiles a largo plazo</span>
      </div>
    </div>
    <section className="gama-es-manifesto" aria-labelledby="gama-es-manifesto-title">
      <div className="gama-svc-container gama-es-manifesto-grid">
        <div><p className="gama-svc-kicker">NUESTRA FORMA DE ENTENDER EL TRABAJO</p><h2 id="gama-es-manifesto-title">Menos complejidad.<br /><em>Más capacidad real.</em></h2></div>
        <div>
          <p>Una solución solo es buena si las personas pueden entenderla, operarla y adaptarla. No confundimos una arquitectura impresionante con un resultado empresarial útil.</p>
          <p>El objetivo es crear sistemas que faciliten las decisiones, reduzcan la fricción y ayuden a las organizaciones a trabajar mejor.</p>
        </div>
      </div>
    </section>
  </>
);

export const GamaContactEs = () => (
  <>
    <section className="gama-svc-hero gama-es-editorial-hero gama-es-contact-hero" aria-labelledby="gama-contact-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span>HABLEMOS / GAMA WORKS</p>
          <h1 id="gama-contact-title">Trae el problema.<br /><em>Busquemos el siguiente paso.</em></h1>
          <p className="gama-svc-lead">Un sitio web, una automatización, una aplicación personalizada o un sistema de coordinación: empieza contándonos qué quieres mejorar.</p>
          <div className="gama-svc-actions">
            <a className="gama-svc-button gama-svc-button-primary" href="mailto:hello@gama.works?subject=GAMA%20Works%20Project%20Inquiry">Enviar consulta <span aria-hidden="true">↗</span></a>
            <a className="gama-svc-button gama-svc-button-outline" href="https://cal.com/wasabi/gama">Agendar conversación <span aria-hidden="true">↗</span></a>
          </div>
          <p className="gama-svc-scope-note">Consultas de proyectos · Primer contacto sin especificaciones técnicas</p>
        </div>
        <div className="gama-es-contact-art" role="img" aria-label="Dos vías principales para contactar a GAMA Works: enviar un correo electrónico o agendar una conversación inicial.">
          <div className="gama-es-contact-art-top"><span className="gama-svc-dot" aria-hidden="true"></span>DEL RETO A UNA CONVERSACIÓN <span>01—02</span></div>
          <div className="gama-es-contact-art-stack">
            <div className="gama-es-contact-art-tile"><span className="gama-es-contact-art-symbol">✉</span><div><strong>ESCRIBIR</strong><small>hello@gama.works</small></div><b aria-hidden="true">↗</b></div>
            <div className="gama-es-contact-art-connector" aria-hidden="true">↓</div>
            <div className="gama-es-contact-art-tile"><span className="gama-es-contact-art-symbol">◷</span><div><strong>CONVERSAR</strong><small>Conocer el problema y acordar el alcance</small></div><b aria-hidden="true">↗</b></div>
          </div>
          <div className="gama-es-contact-art-bottom">No necesitas elegir herramientas antes de contactarnos.</div>
        </div>
      </div>
    </section>
    <section className="gama-es-contact-options" aria-labelledby="gama-es-contact-channels-title">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div><p className="gama-svc-kicker">ELIGE CÓMO COMENZAR</p><h2 id="gama-es-contact-channels-title">Dos formas sencillas<br /><em>de dar el primer paso.</em></h2></div>
          <p>Cuéntanos la situación, tu resultado deseado y cualquier limitación importante. No necesitas enviarnos credenciales ni documentación confidencial.</p>
        </div>
        <div className="gama-es-contact-channels">
          {channels.map(c => (
            <a key={c.number} href={c.href} className="gama-es-contact-channel">
              <span className="gama-es-contact-channel-meta"><b>{c.number}</b><span aria-hidden="true">↗</span></span>
              <span className="gama-es-contact-channel-icon" aria-hidden="true">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.subtitle}</p>
              <span className="gama-es-contact-channel-action">{c.action} <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  </>
);
