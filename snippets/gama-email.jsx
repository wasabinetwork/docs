/**
 * Visible email component, constructed from adjacent spans to avoid
 * edge-layer email-protection rewriting the complete text node.
 * The encoded mailto URI remains a real keyboard-usable link.
 */
const emailName="hello";
const emailHost="gama.works";
export const GamaEmailText=()=>(
 <span className="gama-visible-email" aria-label="hello at gama dot works"><span>hello</span><span aria-hidden="true">@</span><span>gama.works</span></span>
);
export const GamaEmailAddress=({subject,children})=>{
 const base="mailto:hello%40gama.works";
 const href=subject?base+"?subject="+encodeURIComponent(subject):base;
 return <a className="gama-visible-email-link" aria-label={subject?"Email GAMA Works: "+subject:"Email GAMA Works"} href={href}>{children||<GamaEmailText />}</a>;
};
