# GAMA Works · Bilingual Accessibility, Email and Conversion QA

**Branch:** `audit-bilingual-wcag-email-experience`  
**Target:** WCAG 2.2 AA, bilingual route consistency, and email deliverability of the *contact UI* (not email server testing).
**Status:** Source-level improvements implemented. Production-level WCAG conformance, search-engine alternate-language behavior and Cloudflare edge rendering remain **unverified**.

## Delivered

1. Redesign English `/background` and `/contact` using the same premium high-contrast editorial system as the Spanish pages. The original English bodies remain in full in `snippets/service-content/background-en.mdx` and `contact-en.mdx`; native Cards/Tabs/Steps/Accordions are replaced with accessible branded equivalents, preserving all wording and live links. Tiny public MDX imports minimize editor parsing risk.
2. Add `snippets/gama-email.jsx`, a reusable address display that breaks `hello@gama.works` into adjoining selectable spans while maintaining an encoded functional `mailto:hello%40gama.works` link. Use it on bilingual Contact content and key navigation/footer contact surfaces.
3. Provide visible email and booking choices at the top of both English/Spanish Contact pages, preserve the published business address and channel destinations, and avoid introducing an unimplemented form or unsupported response SLA.
4. Add responsive About/Contact artwork, accessible light card text, focus indicators, reduced-motion treatment, and mobile layout refinements. Existing nine English/nine Spanish navigation routes, pricing, offers and language structure are retained.

## Email-protection diagnosis & operations requirement

Cloudflare Email Address Obfuscation can replace email text in rendered HTML with an obfuscated placeholder if its decode script does not run. Cloudflare documentation: https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/ .

The split-span component is a source-level mitigation, **not a guarantee that Cloudflare or another edge transform will not rewrite the email**. Confirm by browser DevTools:

- On `/contact` and `/es/contact`, visual email reads `hello@gama.works` rather than a protected-email placeholder. Test with JavaScript on and off.
- Keyboard focus and click open an email draft to `hello@gama.works`; confirm percent-decoded recipient. Copy/paste selection is usable.
- Check Home/Spanish Home footers, overview/contact cards, FAQs and project guides for remaining obfuscation artifacts.
- Inspect response HTML for `/cdn-cgi/l/email-protection` and the `email-decode.min.js` script.
- **If Cloudflare obfuscation still rewrites the display**, disable Email Address Obfuscation for `gama.works` (or apply a Cloudflare Configuration Rule scoped to the website hostname). Review spam-risk tradeoffs with the site owner. This is a Cloudflare zone setting, not a Mintlify content setting.
- Do not claim successful email receipt without a real end-to-end send/receive test.

## 18-route acceptance matrix

English pages: `/`, `/services`, `/portfolio`, `/gama-web-ready-bundle`, `/automation-workflow-design`, `/it-services`, `/governance-funding-systems`, `/background`, `/contact`.

Spanish pages: `/es/`, `/es/services`, `/es/portfolio`, `/es/gama-web-ready-bundle`, `/es/automation-workflow-design`, `/es/it-services`, `/es/governance-funding-systems`, `/es/background`, `/es/contact`.

### Before merge and release

- [ ] All 18 pages compile and can be opened in the Mintlify editor without an MDX parser failure.
- [ ] English and Spanish About/Contact render the entire preserved rich guide below their custom hero.
- [ ] English and Spanish switchers navigate to equivalent pages without losing the route's semantic identity.
- [ ] Inspect HTML `<html lang>`, title/description, canonical, hreflang EN/ES and x-default semantics; verify no duplicate content or broken alternates. Do not assume native navigation alone proves SEO correctness.
- [ ] Inspect all 18 desktop/mobile layouts at 1440/1024/768/390/320 px and 200%/400% zoom; confirm no horizontal overflow, clipped CTAs or inaccessible code/price blocks.
- [ ] Run axe-core/Lighthouse and manual WCAG 2.2 AA audit on each layout type (contrast, non-text contrast, keyboard, focus, reflow, target sizes, text spacing, screen reader, language labels, reduced motion).
- [ ] Check every card and CTA's hover/focus colors and destination against the intended language.
- [ ] Confirm `hello@gama.works` is clearly visible and functional on both Contact routes despite Cloudflare email protection.
- [ ] Test the exact Cal.com, email, WhatsApp, Telegram, GitHub and LinkedIn destinations; test support inquiry subject lines and safe-intake warnings.
- [ ] Validate the WebReady pricing, trial/refund conditions, support windows, source ownership and localized technical/legal scope boundaries still match.
- [ ] Verify Spanish OG images, descriptions and social previews; existing English-language artwork is intentionally reused and may warrant localized replacement.
- [ ] Confirm founder prior roles are attributed as individual experience, not agency client endorsements.
- [ ] Verify analytics events for visitor navigation and CTAs before asserting conversion performance.

## What was actually checked in source

- All nine English and nine Spanish route entries remain declared in `docs.json`.
- Both English About/Contact rich guides preserve the original sections, cards, tabs, steps and FAQs in source as a separate imported MDX document, aside from semantic component substitution.
- JSX and CSS source structure, declared classes, and known internal links checked.
- Existing commercial prices, formal disclaimers and founder experience were not rewritten in this PR.
- No browser-based or assistive-technology WCAG conformance audit was completed and no live email receive/send test was performed.

## Conversion optimization follow-up

Measure navigation to service detail, booking CTA click-through, email-CTA click-through, and contact-to-qualified-conversation conversion by language. Only after baseline data exists should we A/B test CTA labels, service pathways or intake requirements. Avoid adding heavy forms or tracking that compromise usability or privacy.
