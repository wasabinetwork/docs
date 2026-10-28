/**
 * GAMA WebReady — experiencia en español.
 * La guía íntegra de términos comerciales vive en
 * snippets/service-content/webready-es.mdx.
 * Se reutilizan las clases del sistema visual de Servicios aprobado.
 */

const WebReadyVisualEs = () => (
  <div className="gama-svc-product-visual gama-svc-product-web" role="img" aria-label="Representación de un sitio web empresarial adaptable a computadoras y teléfonos, acompañado de servicios de correo y copias de seguridad.">
    <div className="gama-svc-device-browser">
      <div className="gama-svc-device-bar"><i></i><i></i><i></i><b></b></div>
      <div className="gama-svc-device-content">
        <div className="gama-svc-device-copy"><i></i><i></i><i></i><b></b></div>
        <div className="gama-svc-device-picture"></div>
      </div>
      <div className="gama-svc-device-cards"><i></i><i></i><i></i></div>
    </div>
    <div className="gama-svc-device-phone"><div></div><i></i><i></i><b></b></div>
    <div className="gama-svc-device-satellite gama-svc-device-email">✉<small>CORREO</small></div>
    <div className="gama-svc-device-satellite gama-svc-device-backup">◴<small>RESPALDOS</small></div>
  </div>
);

const inclusiones = [
  ["Sitio web, alojamiento y correo", "Una presencia digital profesional, con la configuración esencial incluida dentro del alcance aprobado."],
  ["Respaldos y soporte de lanzamiento", "Copias de seguridad y 90 días de soporte complementario para incidencias cubiertas después de la publicación."],
  ["Plan mensual o anual", "$29.99 al mes, con garantía condicional de devolución de 30 días, o $299.98 al año, con prueba gratuita condicional de 30 días y un dominio estándar elegible para el primer año."]
];

export const GamaWebReadyEs = () => (
  <>
    <section className="gama-svc-hero gama-svc-individual gama-svc-hero-webready" aria-labelledby="gama-webready-es-title">
      <div className="gama-svc-container gama-svc-hero-grid">
        <div className="gama-svc-hero-copy">
          <p className="gama-svc-kicker"><span className="gama-svc-dot" aria-hidden="true"></span>01 / GAMA WEBREADY BUNDLE</p>
          <h1 id="gama-webready-es-title">Pagas el alojamiento.<br /><em>Construimos tu sitio web.</em></h1>
          <p className="gama-svc-lead">Un sitio web o blog profesional, correo empresarial, alojamiento, copias de seguridad y soporte después del lanzamiento. Todo en un paquete pensado para pequeños negocios.</p>
          <div className="gama-svc-actions">
            <a className="gama-svc-button gama-svc-button-primary" href="https://cal.com/wasabi/gama-webready-bundle-monthly">Explorar el plan mensual <span aria-hidden="true">↗</span></a>
            <a className="gama-svc-button gama-svc-button-outline" href="#detalles-webready">Leer todas las condiciones <span aria-hidden="true">↓</span></a>
          </div>
          <p className="gama-svc-scope-note">Servicio con planes publicados · Alcance definido · Condiciones aplicables</p>
        </div>
        <WebReadyVisualEs />
      </div>
    </section>

    <div className="gama-svc-pricing">
      <div className="gama-svc-container gama-svc-pricing-grid">
        <a href="https://cal.com/wasabi/gama-webready-bundle-monthly">
          <span>PLAN MENSUAL</span>
          <strong>$29.99 <small>/ mes</small></strong>
          <em>Garantía de devolución de 30 días, sujeta a las condiciones del servicio ↗</em>
        </a>
        <a href="https://cal.com/wasabi/gama-webready-bundle-yearly">
          <span>PLAN ANUAL</span>
          <strong>$299.98 <small>/ año</small></strong>
          <em>Prueba gratuita de 30 días y dominio estándar elegible el primer año, sujetos a condiciones ↗</em>
        </a>
      </div>
    </div>

    <section className="gama-svc-highlights" aria-labelledby="gama-webready-es-highlights">
      <div className="gama-svc-container">
        <div className="gama-svc-section-intro">
          <div>
            <p className="gama-svc-kicker">LO QUE IMPORTA</p>
            <h2 id="gama-webready-es-highlights">Una presencia digital<br /><em>que respalda tu negocio.</em></h2>
          </div>
          <p>Un alcance práctico, costos transparentes y una relación de servicio que no exige que te conviertas en experto en tecnología.</p>
        </div>
        <div className="gama-svc-highlight-grid">
          {inclusiones.map((item, i) => (
            <div className="gama-svc-highlight" key={i}>
              <span>0{i + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="gama-svc-service-next" aria-labelledby="gama-webready-es-next">
      <div className="gama-svc-container gama-svc-service-next-grid">
        <div>
          <p className="gama-svc-kicker">ANTES DE CONTRATAR</p>
          <h2 id="gama-webready-es-next">Conoce exactamente lo que incluye tu plan.</h2>
        </div>
        <div>
          <p>Más abajo encontrarás la guía completa: incorporación, precios, garantías, prueba gratuita, límites, soporte, exclusiones, titularidad de archivos fuente y preguntas frecuentes.</p>
          <a href="#detalles-webready">Leer la guía completa <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  </>
);
