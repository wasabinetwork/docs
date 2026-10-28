/**
 * GAMA Works — Gobernanza y sistemas de financiación, versión en español.
 * El contenido y las condiciones completas se conservan en
 * snippets/service-content/governance-es.mdx.
 * Componentes fuera del MDX para evitar errores del editor de Mintlify.
 */

const capacidadesGobernanza = [
  ["Responsabilidades claras", "Definir quién propone, evalúa, decide y ejecuta, con registros, controles y vías de escalamiento adecuados."],
  ["Operaciones de financiación confiables", "Diseñar criterios de elegibilidad, revisión, deliberación, asignación, informes y coordinación de programas de subvenciones."],
  ["Evidencias y rendición de cuentas", "Vincular decisiones, hitos y resultados mediante documentación, seguimiento y ciclos de aprendizaje verificables cuando corresponda."]
];

const IlustracionGobernanza = () => (
  <div className="gama-svc-product-visual gama-svc-product-gov" role="img" aria-label="Proceso de gobernanza que conecta propuestas, revisión, decisiones, financiación y evidencias, con responsabilidades claras.">
    <div className="gama-svc-gov-orbit" aria-hidden="true">
      <div className="gama-svc-gov-core"><span>✓</span><small>DECIDIR</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-propose">▤<small>PROPONER</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-review">◎<small>REVISAR</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-fund">⇥<small>FINANCIAR</small></div>
      <div className="gama-svc-gov-node gama-svc-gov-evidence">◇<small>EVIDENCIA</small></div>
    </div>
  </div>
);

export const GamaGobernanzaEs = () => (
  <>
    <section className="gama-svc-hero gama-svc-individual gama-svc-hero-governance" aria-labelledby="gama-governance-es-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span>04 / GOBERNANZA Y SISTEMAS DE FINANCIACIÓN</p>
          <h1 id="gama-governance-es-title">Decisiones claras.<br /><em>Financiación responsable.</em></h1>
          <p className="gama-svc-lead">Diseñamos procesos de gobernanza, programas de subvenciones y sistemas de coordinación que convierten las decisiones compartidas en operaciones más transparentes y responsables.</p>
          <div className="gama-svc-actions">
            <a className="gama-svc-button gama-svc-button-primary" href="https://cal.com/wasabi/gama">Conversemos sobre tu reto <span aria-hidden="true">↗</span></a>
            <a className="gama-svc-button gama-svc-button-outline" href="#detalles-gobernanza">Explorar el servicio completo <span aria-hidden="true">↓</span></a>
          </div>
          <p className="gama-svc-scope-note">Diagnóstico · Diseño de programas · Apoyo operativo fraccional · Alcance acordado</p>
        </div>
        <IlustracionGobernanza />
      </div>
    </section>
    <section className="gama-svc-highlights" aria-labelledby="gama-governance-es-highlights">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div>
            <p className="gama-svc-kicker">LO QUE CONSTRUIMOS JUNTOS</p>
            <h2 id="gama-governance-es-highlights">Sistemas que convierten <em>decisiones en acciones.</em></h2>
          </div>
          <p>Más claridad operativa y responsabilidad humana, sin prometer resultados de financiación ni atribuir a GAMA Works autoridad de tesorería que no haya sido expresamente acordada.</p>
        </div>
        <div className="gama-svc-highlight-grid">
          {capacidadesGobernanza.map((item, i) => (
            <div className="gama-svc-highlight" key={i}>
              <span>0{i + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="gama-svc-service-next" aria-labelledby="gama-governance-es-next">
      <div className="gama-svc-container gama-svc-service-next-grid">
        <div>
          <p className="gama-svc-kicker">ALCANCE Y RESPONSABILIDADES</p>
          <h2 id="gama-governance-es-next">Buenas decisiones. Controles explícitos.</h2>
        </div>
        <div>
          <p>La guía completa explica cinco modalidades de trabajo, gobernanza de DAO, operaciones de subvenciones, evidencias, medición, autoridad de decisión y límites profesionales. La asesoría no implica custodia, facultad de firmar ni autorización para desembolsar fondos.</p>
          <a href="#detalles-gobernanza">Leer la guía completa <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  </>
);
