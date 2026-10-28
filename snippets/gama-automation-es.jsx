/**
 * GAMA Works · Automatización y diseño de procesos — página en español.
 * La guía íntegra se mantiene por separado en
 * snippets/service-content/automation-es.mdx.
 * Se reutiliza el sistema visual y accesible de Servicios.
 */

const capacidades = [
  ["Comprender el proceso", "Identificamos los pasos, las personas involucradas y los obstáculos antes de recomendar herramientas."],
  ["Conectar los sistemas", "Diseñamos automatizaciones, integraciones, avisos y transferencias de trabajo con un alcance definido."],
  ["Mantener el control humano", "Las decisiones importantes cuentan con permisos, registros, revisión y vías de escalamiento apropiadas."]
];

const FlujoAutomatizacionEs = () => (
  <div className="gama-svc-product-visual gama-svc-product-auto" role="img" aria-label="Diagrama de un proceso donde la información de entrada pasa por una automatización, una revisión humana y una tarea completada.">
    <div className="gama-svc-flow-head">DEL PROBLEMA AL RESULTADO</div>
    <div className="gama-svc-flow-line" aria-hidden="true">
      <div className="gama-svc-flow-box"><span>☰</span><small>ENTRADA</small></div>
      <i></i>
      <div className="gama-svc-flow-box gama-svc-flow-box-hot"><span>⚙</span><small>PROCESO</small></div>
      <i></i>
      <div className="gama-svc-flow-box"><span>◎</span><small>REVISIÓN</small></div>
      <i></i>
      <div className="gama-svc-flow-box gama-svc-flow-box-done"><span>✓</span><small>LISTO</small></div>
    </div>
    <p>CON APROBACIÓN HUMANA CUANDO CORRESPONDA</p>
  </div>
);

export const GamaAutomatizacionEs = () => (
  <>
    <section className="gama-svc-hero gama-svc-individual gama-svc-hero-automation" aria-labelledby="gama-automation-es-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span>02 / AUTOMATIZACIÓN Y DISEÑO DE PROCESOS</p>
          <h1 id="gama-automation-es-title">Menos tareas manuales.<br /><em>Más capacidad para avanzar.</em></h1>
          <p className="gama-svc-lead">Transforma tareas repetitivas, herramientas desconectadas y procesos confusos en flujos de trabajo prácticos, con supervisión humana donde más importa.</p>
          <div className="gama-svc-actions">
            <a className="gama-svc-button gama-svc-button-primary" href="https://cal.com/wasabi/gama">Conversemos sobre tu proceso <span aria-hidden="true">↗</span></a>
            <a className="gama-svc-button gama-svc-button-outline" href="#detalles-automatizacion">Explorar la guía completa <span aria-hidden="true">↓</span></a>
          </div>
          <p className="gama-svc-scope-note">Diagnóstico inicial · Proyecto a medida · Alcance y precio acordados</p>
        </div>
        <FlujoAutomatizacionEs />
      </div>
    </section>

    <section className="gama-svc-highlights" aria-labelledby="gama-automation-highlights-es">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div>
            <p className="gama-svc-kicker">QUÉ BUSCAMOS MEJORAR</p>
            <h2 id="gama-automation-highlights-es">La tecnología debe servir <em>al trabajo real.</em></h2>
          </div>
          <p>Automatizamos donde aporta valor, medimos el resultado y preservamos el criterio humano en las decisiones sensibles.</p>
        </div>
        <div className="gama-svc-highlight-grid">
          {capacidades.map((item,i) => (
            <div className="gama-svc-highlight" key={i}>
              <span>0{i + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gama-svc-service-next" aria-labelledby="gama-automation-details-es">
      <div className="gama-svc-container gama-svc-service-next-grid">
        <div>
          <p className="gama-svc-kicker">ANTES DE EMPEZAR</p>
          <h2 id="gama-automation-details-es">Primero definimos el problema. Luego la solución.</h2>
        </div>
        <div>
          <p>La guía completa explica nuestro método de trabajo, los casos de uso, los controles de riesgo, la aplicación responsable de IA, las modalidades de contratación y las preguntas frecuentes.</p>
          <a href="#detalles-automatizacion">Leer todos los detalles <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  </>
);
