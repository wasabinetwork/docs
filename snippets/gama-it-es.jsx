/**
 * GAMA Works · Servicios de TI en español.
 * El contenido técnico completo está en
 * snippets/service-content/it-es.mdx.
 * Conserva los estilos WCAG de Servicios y el MDX público sencillo.
 */
const capacidadesIT = [
  ["Aplicaciones y herramientas internas", "Portales, paneles de control, integraciones y aplicaciones construidos según requisitos operativos reales."],
  ["Infraestructura y continuidad", "Alojamiento, nube, DNS, despliegues, correo empresarial y migraciones con planificación adecuada."],
  ["Mantenimiento y responsabilidad", "Mejoras sobre sistemas existentes, documentación comprensible y soporte definido según cada acuerdo."]
];

const IlustracionIT = () => (
  <div className="gama-svc-product-visual gama-svc-product-it" role="img" aria-label="Ilustración de una aplicación central conectada con interfaces de programación, servicios en la nube, bases de datos y soporte técnico.">
    <div className="gama-svc-it-links" aria-hidden="true"></div>
    <div className="gama-svc-it-core" aria-hidden="true">
      <div><i></i><i></i><i></i></div>
      <strong>APLICACIÓN</strong><span>◫ ━ ━</span>
    </div>
    <div className="gama-svc-it-node gama-svc-it-api" aria-hidden="true"><span>⇄</span><small>API</small></div>
    <div className="gama-svc-it-node gama-svc-it-cloud" aria-hidden="true"><span>☁</span><small>NUBE</small></div>
    <div className="gama-svc-it-node gama-svc-it-data" aria-hidden="true"><span>▤</span><small>DATOS</small></div>
    <div className="gama-svc-it-node gama-svc-it-support" aria-hidden="true"><span>⚙</span><small>SOPORTE</small></div>
  </div>
);

export const GamaServiciosITEs = () => (
  <>
    <section className="gama-svc-hero gama-svc-individual gama-svc-hero-it" aria-labelledby="gama-it-es-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span>03 / SERVICIOS DE TECNOLOGÍA DE LA INFORMACIÓN</p>
          <h1 id="gama-it-es-title">Tecnología que funciona.<br /><em>Sistemas que evolucionan.</em></h1>
          <p className="gama-svc-lead">Aplicaciones personalizadas, infraestructura, integraciones, migraciones y soporte técnico para organizaciones cuyas necesidades van más allá de lo básico.</p>
          <div className="gama-svc-actions">
            <a className="gama-svc-button gama-svc-button-primary" href="https://cal.com/wasabi/gama">Hablemos de tu sistema <span aria-hidden="true">↗</span></a>
            <a className="gama-svc-button gama-svc-button-outline" href="#detalles-it">Explorar servicios y condiciones <span aria-hidden="true">↓</span></a>
          </div>
          <p className="gama-svc-scope-note">Evaluación técnica · Proyecto de alcance definido · Soporte continuo según acuerdo</p>
        </div>
        <IlustracionIT />
      </div>
    </section>
    <section className="gama-svc-highlights" aria-labelledby="gama-it-es-highlights">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div>
            <p className="gama-svc-kicker">CAPACIDADES PRINCIPALES</p>
            <h2 id="gama-it-es-highlights">La tecnología al servicio <em>del negocio.</em></h2>
          </div>
          <p>Diseñamos soluciones proporcionales a tu necesidad. Sin complejidad innecesaria ni compromisos de servicio que no hayan sido definidos previamente.</p>
        </div>
        <div className="gama-svc-highlight-grid">
          {capacidadesIT.map((item,i) => (
            <div className="gama-svc-highlight" key={i}>
              <span>0{i + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="gama-svc-service-next" aria-labelledby="gama-it-es-next">
      <div className="gama-svc-container gama-svc-service-next-grid">
        <div>
          <p className="gama-svc-kicker">CONOCE EL ALCANCE</p>
          <h2 id="gama-it-es-next">Primero entendemos tu entorno. Después decidimos qué cambiar.</h2>
        </div>
        <div>
          <p>La guía completa explica aplicaciones, nube, dominios, correo, API, migraciones, modelos de contratación, criterios de seguridad y límites del soporte. Los proyectos personalizados requieren una propuesta y alcance acordados.</p>
          <a href="#detalles-it">Leer la guía completa <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  </>
);
