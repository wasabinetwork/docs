# GAMA Works — Bilingual Launch Roadmap

**Phase:** Native Mintlify localization foundation, English + Spanish.
**Status:** All seven previously translated pages, including Governance & Funding, are merged. Spanish About and Contact are complete on the current PR branch. All 9 of 9 English public pages now have matching Spanish source pages; Mintlify rendering, editorial and accessibility review are still required before production can be called fully bilingual.

## Product architecture

- **English:** all existing routes remain in place (no moves, no redirects, no renamed files).
- **Spanish:** `/es/`, `/es/services`, `/es/portfolio`, `/es/gama-web-ready-bundle`, `/es/automation-workflow-design`, `/es/it-services`, `/es/governance-funding-systems`, `/es/background`, and `/es/contact`, using native navigation under `navigation.languages`.
- The primary GAMA Works website stays on Mintlify. Atlas is an independent e-commerce OS initiative on its own subdomain.
- Spanish marketing copy uses neutral, readable Latin American Spanish suitable for Dominican businesses.
- Complex Spanish JSX lives in `snippets/gama-es.jsx`, `snippets/gama-webready-es.jsx`, and `snippets/gama-automation-es.jsx`, `snippets/gama-it-es.jsx`, `snippets/gama-governance-es.jsx`, and `snippets/gama-about-contact-es.jsx`, rendered through minimal MDX entrypoints to avoid the prior Mintlify editor parsing problem.
- Existing social image assets are reused rather than generating unapproved new artwork. Note that existing image text may still be in English; localized OG artwork is a future creative task.

## What this initial localization includes

| Page | English | Spanish | Status |
| --- | --- | --- | --- |
| Home | `/` | `/es/` | New Spanish visual page |
| Services overview | `/services` | `/es/services` | New Spanish visual overview |
| Portfolio | `/portfolio` | `/es/portfolio` | New Spanish portfolio |
| WebReady terms | `/gama-web-ready-bundle` | `/es/gama-web-ready-bundle` | Merged; complete Spanish guide |
| Automation details | `/automation-workflow-design` | `/es/automation-workflow-design` | Merged; complete Spanish guide |
| IT details | `/it-services` | `/es/it-services` | Merged; complete Spanish guide |
| Governance details | `/governance-funding-systems` | `/es/governance-funding-systems` | Merged; complete Spanish guide |
| About | `/background` | `/es/background` | **Translated in current PR; preview/review required** |
| Contact | `/contact` | `/es/contact` | **Translated in current PR; preview/review required** |

**Important:** The current branch completes Spanish content coverage for all nine public routes and removes outdated English-only handoffs. This is **source-ready, not a validated production launch**: review Mintlify rendering, native language alternates, Spanish copy, contact channels, and browser accessibility before calling the experience fully bilingual.

## Translation principles

- Don't change package price amounts, guarantees, domain conditions, support windows, ownership conditions, or professional advisory exclusions when translating.
- Preserve brand names: GAMA Works, WebReady, Atlas, Kokonut Network, Kokonut Intelligence.
- Prefer natural terms: *automatización de procesos*, *servicios de TI*, *gobernanza*, *financiación*, *portafolio*, *proyecto a medida*.
- Translate buttons, accessibility labels, SEO titles/descriptions, internal links, and alt text alongside body copy.
- Keep project status and founder relationship qualifications explicit; no implied client projects or performance claims.
- All four detailed service pages have been translated in full and their PRs have merged. Keep commercial, operational and professional boundaries and FAQs aligned with their English originals.
- Language switcher should provide the equivalent English/Spanish route across all nine public pages. Confirm native alternate-language mapping and hreflang from rendered output.

## Preview acceptance criteria

- [ ] Mintlify docs.json schema accepts `navigation.languages` with `tabs` nested under `en` and `es`.
- [ ] Spanish language chooser displays correctly and English routes remain unchanged.
- [ ] All translated Spanish routes, including `/es/governance-funding-systems`, render, open in the Mintlify dashboard editor, and resolve their JSX/MDX snippet imports.
- [ ] Spanish typography does not clip and service graphics remain legible at 1440, 1024, 768, 390, and 320 px.
- [ ] Check keyboard navigation, heading hierarchy, contrast, and focus states against WCAG 2.2 AA.
- [ ] Verify Spanish-to-Spanish cross-links across all nine pages, existing booking/email links and social channels.
- [ ] Verify Spanish title/description metadata, canonical behavior, language alternates/hreflang, and social previews as actually rendered.
- [ ] Check native interface strings such as search, breadcrumbs, and language selector.
- [ ] Confirm no incomplete Spanish translations, stale English-only notices, misleading claims, or missing accessibility labels.
- [ ] Review regional Spanish copy with a native editor before declaring fully localized.
- [ ] Run Mintlify CLI broken-link checking and inspect build output.

## Next implementation increment

1. **All nine public routes have Spanish source content on this PR branch.** Finish Mintlify build, native language switcher/hreflang, UX, functional link, regional copy, accessibility and responsive release validation.
2. Verify that English About and Contact design presentation is coherent with the premium visual brand; consider an English-page design pass as a separate scoped PR.
3. Create localized social-sharing assets if desired.
4. Audit language-specific SEO and test the full bilingual conversion flow end to end.


## WebReady full-guide translation audit (previously merged)

- Complete Spanish version: `snippets/service-content/webready-es.mdx`. All major original sections and 13 FAQs have Spanish counterparts.
- Public entrypoint: `es/gama-web-ready-bundle.mdx`; visual intro: `snippets/gama-webready-es.jsx`.
- Preserve published prices, booking destinations, 30-day monthly conditional money-back guarantee, 30-day annual conditional free trial, eligible first-year standard domain, 45-minute discovery session, up-to-7-day delivery target conditional on onboarding during the first 72 hours, 90-day covered support, initial 1–24-hour response goal, 10 GB per inbox, and 12-month source-file eligibility conditions and exclusions.
- Do not imply an unconditional refund or delivery time, an ownership transfer before completion of the qualifying period, or that a trial and guarantee are the same protection.
- The Spanish marketing page should be reviewed against the applicable service agreement; it does not replace the agreement.

## Automation & Workflow Design localization audit (previously merged)

- Public route: `/es/automation-workflow-design`; MDX entrypoint: `es/automation-workflow-design.mdx`.
- Full Spanish guide: `snippets/service-content/automation-es.mdx`; visual component: `snippets/gama-automation-es.jsx`.
- Translate all original section headings, six use-case groups, seven engagement steps, measurable outcomes, risk/AI boundaries, four engagement modes, and seven FAQs.
- Maintain explicit **human-in-the-loop** controls for money, privacy, governance and consequential decisions; permissions, logs, fallback paths and escalation remain central.
- Retain custom scoping; there is **no fixed price, guaranteed business outcome, or unlimited AI autonomy** in this offer.
- Keep the original booking URL `https://cal.com/wasabi/gama` and link to English-only Contact with a transparent note until its translation is ready.
- Verify mobile diagram text, source-level contrast plus browser WCAG 2.2 AA checks, translated metadata and all in-language internal links before merging.


## IT Services full localization audit (previously merged)

- Public route: `/es/it-services`; thin entrypoint: `es/it-services.mdx`; localized visual: `snippets/gama-it-es.jsx`.
- Full Spanish guide: `snippets/service-content/it-es.mdx`.
- Preserve the complete technical scope: applications and internal tools, hosting/cloud/deployments, domains/business email, APIs/integrations, migrations/rescue work, fractional technical support, engagement models, operating principles, suitability and all nine FAQs.
- Retain the qualifications that there is **no guaranteed 24/7 emergency response**, formal penetration-testing service or regulated-industry compliance specialization without appropriate partners.
- Ongoing support, response expectations and fees depend on written agreement; custom projects require discovery and a defined proposal.
- Keep the English published booking destination unchanged while making Spanish WebReady, Automation, Home, and Services routes link directly to `/es/it-services`.
- Preview must check Mintlify editor parsing, rich content, mobile overflow, the annotated IT systems illustration, WCAG 2.2 AA contrast/keyboard behavior and native i18n routing.


## Governance & Funding full localization audit (previously merged)

- Public route: `/es/governance-funding-systems`; MDX entrypoint: `es/governance-funding-systems.mdx`.
- Complete Spanish guide: `snippets/service-content/governance-es.mdx`; visual experience: `snippets/gama-governance-es.jsx`.
- Preserve all **five engagement models** (health check, governance system, grant program, ecosystem/funding framework, and fractional strategic operations), process flows, use-case groups, indicators, founder history and all FAQs.
- **Strict authority boundary:** recommendations and process support do not grant treasury signing rights, custody, disbursement authority, privileged access or final funding-decision rights. Decision rights remain with the client's authorized body unless explicitly assigned in a separate appropriately controlled agreement.
- **Professional boundary:** not legal, tax, investment, audit, or regulated fiduciary advice; independent qualified specialists may be required.
- No guarantees of grant awards, fundraising outcomes, token prices, community consensus, voting results, impact improvements or formal independent assurance.
- Existing founder roles in Gitcoin, Octant Community Fund, Polygon General Grants and Kokonut Network are attributed as founder experience, **not** as GAMA Works client engagements, sponsorships or endorsements.
- Keep the original booking URL, use Spanish WebReady, Automation and IT cross-links, and visibly identify About and Contact as English-only until localized.
- Confirm mobile and desktop visual rendering, agreement-language review, WCAG 2.2 AA browser testing, imported snippet compilation and language navigation before merge.


## About & Contact — final content-completion PR

- Spanish routes: `/es/background` and `/es/contact`, with new `Sobre nosotros` and `Contacto` Mintlify tabs.
- Full Spanish guides: `snippets/service-content/background-es.mdx` and `snippets/service-content/contact-es.mdx`; visual JSX: `snippets/gama-about-contact-es.jsx`.
- **About:** preserves 2006/2021 founder chronology, ~100 clients and 7 distributors in the earlier company, Gitcoin/Octant/Polygon experience and roles, Kokonut projects, organizational purpose, values and all 6 FAQs. Explicitly states GAMA Works is not claimed to have operated continuously since 2006 and that founder ecosystem contributions are not agency client endorsements.
- **Contact:** preserves exact company email, Cal.com URL, WhatsApp, Telegram, GitHub and LinkedIn URLs, all four service routing choices, detailed intake template, 4 process steps, active-client support qualifications and all 6 FAQs.
- Contact security warning preserves bans on sending passwords, API tokens, private keys, recovery phrases, payment credentials or other secrets over initial insecure channels.
- No fictitious contact form, response-time promise, emergency SLA, fixed-scope custom pricing or new customer relationship is introduced.
- All previously translated Spanish service copy now links to `/es/background` and `/es/contact`. Old English-only notices are removed; published English page content and commercial terms remain unchanged.
- **Pre-merge gate:** Mintlify parsing/preview, complete page-to-page language switching, keyboard and screen-reader testing, 320px/400% reflow, contrast checks under real computed browser CSS, email/booking link verification, SEO and hreflang audit, editorial review.

## Site-wide bilingual release audit still required

1. Verify all 18 public pages (9 EN + 9 ES) compile, are reachable, and have the intended language in navigation and metadata.
2. Check matching language alternates and canonical URL patterns for all pages; test search engine indexing behavior and OG previews.
3. Confirm all commercial conditions (particularly WebReady) and professional advice/authority boundaries match across languages.
4. Conduct WCAG 2.2 AA browser-assisted and manual testing: color contrast, non-text contrast, keyboard focus, target sizes, responsive text scaling, reduced motion, headings, semantics and screen readers.
5. Check copy at common mobile widths, page length, footer behavior and link states; review Latin American Spanish readability.
6. Confirm official email/booking/social channels and secure intake wording. No secrets should be submitted via public inquiry channels.
7. Independently assess whether the original English About and Contact default-mode layouts should be redesigned to match the premium custom-mode Spanish counterparts.
