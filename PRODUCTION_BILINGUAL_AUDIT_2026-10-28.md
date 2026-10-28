# GAMA Works — Bilingual Production Quality Audit

**Date:** 2026-10-28  
**Site:** https://gama.works  
**Repository baseline:** `wasabinetwork/docs` main, after Contact SSR fix; corrective work in `audit-production-bilingual-quality-v1`.  
**Target:** WCAG 2.2 AA, reliable English/Spanish discovery and conversion, correct production metadata.

## Executive finding

The source supports a complete **nine-page English / nine-page Spanish** site with matching navigation, localized page metadata, and reusable high-contrast visual components. The source and asset audit identified **three small improvements** implemented in this PR:

1. The global navbar's labels were only English. Changed to **Email / Correo** and **Book / Agendar** to accommodate both languages without introducing unsupported Mintlify locale-specific navbar syntax.
2. The English homepage contained a literal, unprotected email address in its footer, despite the recent production email-display fix elsewhere. Converted this surface to static split-span text with a percent-encoded `mailto:` link (no new dynamic MDX import).
3. English Portfolio was the only public route lacking explicit `og:image` and `twitter:image` frontmatter. Added both using the **existing verified** `/images/og-about.png` as a temporary social image. The Spanish Portfolio already uses this image. A dedicated portfolio visual remains a creative follow-up.

**Important limitation:** The production website could not be fetched using this session's public-site tools (public web page fetch errors and lack of DNS/network in the execution container). Therefore this is a **source-confirmed audit with automated production tests supplied**, not proof of live HTTP 200s, CWV performance, correct rendered hreflang/canonical, or full WCAG 2.2 AA conformance. No invented production results or scores are presented.

## 18-page audit matrix

| Page | English route | Spanish route | Both source files present | Imported page snippets |
| --- | --- | --- | --- | --- |
| Home | `/` | `/es/` | Yes | Resolved |
| Services | `/services` | `/es/services` | Yes | Resolved |
| Portfolio | `/portfolio` | `/es/portfolio` | Yes | Inline EN, imported ES |
| WebReady | `/gama-web-ready-bundle` | `/es/gama-web-ready-bundle` | Yes | Resolved |
| Automation | `/automation-workflow-design` | `/es/automation-workflow-design` | Yes | Resolved |
| IT Services | `/it-services` | `/es/it-services` | Yes | Resolved |
| Governance & Funding | `/governance-funding-systems` | `/es/governance-funding-systems` | Yes | Resolved |
| About | `/background` | `/es/background` | Yes | Resolved |
| Contact | `/contact` | `/es/contact` | Yes | Resolved |

**Source checks:** all 18 entrypoints have title and description frontmatter and custom-mode experience; all 22 distinct directly imported entrypoint snippets were fetched successfully through GitHub; navigation has nine paths per language. After this PR, all 18 entries also have explicit OG/Twitter image frontmatter. Referenced image assets checked include the home, services, about/contact, WebReady, Automation, IT and Governance images. The unusual `/images/og-automation.png.png` filename **exists** in the repository and should not be renamed without updating the image itself and its references. The Portfolio social image is a verified placeholder, not portfolio-specific artwork.

## Priority findings and actions

| Priority | Finding | Evidence | Action / status |
| --- | --- | --- | --- |
| P0 | Actual production uptime and 18-route HTTP status are not independently verified in this session. | Public-site fetch failure from the inspection environment; not evidence of a site outage | **Automated network-side checks added**; run GitHub Actions and examine artifacts |
| P0 | Contact SSR regression must remain fixed on both languages. | Earlier user-reported 500 and editor error; user confirmed email rendering landed | Audit will test both Contact routes, rendered email text, encoded `mailto:`, page status |
| P1 | Navbar labels were English-only globally. | `docs.json` | **Fixed** with bilingual labels |
| P1 | English home still printed the full address in a raw text node. | `snippets/gama-home.jsx` | **Fixed** using static adjacent spans and encoded link |
| P1 | English Portfolio lacked explicit OG/Twitter artwork metadata. | `portfolio.mdx` | **Fixed**, using existing asset pending a bespoke Portfolio image |
| P1 | Actual `hreflang`, canonical, `html lang`, indexing and image meta tags have not been inspected in production HTML. | Source language navigation/metadata alone do not verify these | **Added response-level audit and review gates** |
| P1 | WCAG 2.2 AA cannot be certified from CSS token calculations alone. | High-contrast theme exists, but rendered DOM, overlay contrast and assistive-tech behavior untested | **Manual and automated browser review required** |
| P2 | Conversion performance has no verified baseline. | No live analytics read in this audit | Define CTA events and baseline before proposing A/B testing |
| P2 | Portfolio social preview uses the About image. | English and Spanish OG frontmatter | Create a unique portfolio preview as a later approved design asset |

## Repeatable production smoke and SEO audit

Run `python3 scripts/audit_live_site.py --base https://gama.works --fail-on-error` from a network-connected terminal, or use the workflow **GAMA Works bilingual production smoke audit** under GitHub Actions. The workflow is triggered by changes to its script/config and can also be dispatched manually after merging.

Output artifacts:

- `reports/site-audit.json`: per-route response codes, response latency, HTML language, title, description, H1 count, canonical, alternates, OG image, images without an alt attribute and email/link issues.
- `reports/site-audit.md`: human-readable matrix, issues by route and required follow-up tests.

This tool uses Python's standard library, makes **read-only GET requests**, does not send emails or book appointments, and **exits nonzero on HTTP errors or missing critical metadata** when `--fail-on-error` is supplied. Warning-level checks (such as missing `hreflang`) remain visible in artifacts, not silently accepted.

**Known limitations:** HTML source parsing is not a substitute for a full browser. It cannot measure Core Web Vitals, computed contrast/overlays, keyboard navigation, screen reader semantics, dynamic client-side state, consent flows or visual mobile clipping. A server-rendered email string that was rewritten by an edge layer can be diagnosed with browser inspection; if email protection is still active, consider a host-specific Cloudflare Configuration Rule after reviewing security/spam trade-offs.

## Browser validation required to close this production audit

### Accessibility — target WCAG 2.2 AA

- Test all 18 pages with the actual rendered layout in at least Chrome, Firefox and Safari where practical.
- Test page types at 1440/1024/768/390/320 px, 200% and 400% zoom, text spacing overrides, mobile landscape and reduced-motion mode.
- Use axe-core/Lighthouse as helpers, **then manually** test contrast and non-text contrast, keyboard-only order and focus visibility, no focus obscured by sticky UI, 24px-or-exception target sizes, labels, menu behavior, accessible names, H1 hierarchy and disclosure details.
- Verify **4.5:1 normal text, 3:1 qualifying large text, 3:1 essential non-text graphics** at computed-color level. See W3C WCAG 2.2 Understanding guidance.

### International SEO and navigation

- Verify source and rendered `<html lang>`, one canonical per page, reciprocal `hreflang="en"` / `"es"` with corresponding routes, locale switcher behavior, and accurate indexing/crawlability.
- Verify all 18 title/description/OG cards in the production HTML, including the Portfolio placeholder, and that social platforms can retrieve assets.
- Inspect sitemap and robots handling and make sure the two old URL redirects work without redirect loops.
- Confirm links between all four detailed services, About and Contact maintain their language.

### Conversion and contact

- Confirm **hello@gama.works** is visible, selectable and click-to-email on English/Spanish Home and Contact, with JavaScript both enabled and disabled.
- Verify `mailto:` recipient and subject, Cal.com call booking, and external contact channels. Do not submit live inquiries or create reservations as part of read-only QA.
- Check business CTA clarity, the four service journeys, FAQ visibility, CTA tap areas, booking handoff and mobile email interaction.
- Define privacy-conscious analytics events: `service_view`, `service_to_contact`, `book_call_click`, `email_click`, `locale_switch`, `qualified_inquiry`. Do not claim conversion uplift without a baseline.

## Acceptance / sign-off

- [x] All 18 corresponding source entrypoint files exist.
- [x] All 22 distinct direct page snippet imports resolve in GitHub.
- [x] Titles and descriptions on all public source pages.
- [x] Explicit OG and Twitter image metadata on all 18 pages after this PR.
- [x] Global nav bilingual copy and English Home email-format correction implemented.
- [ ] GitHub Actions network audit successfully executed and all errors investigated.
- [ ] Rendered 18-page HTTP/status, metadata and language alternates verified.
- [ ] Browser/manual WCAG 2.2 AA checks completed.
- [ ] Responsive and cross-language CTA journeys approved.
- [ ] Analytics baseline confirmed.

**Release verdict:** Source-ready for review; production-quality certification **pending** network and browser checks. No claim of complete WCAG conformance or measured conversion improvement.
